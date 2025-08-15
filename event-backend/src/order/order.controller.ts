import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import {
    ApiTags,
    ApiOperation,
    ApiBody,
    ApiResponse,
    ApiBearerAuth,
    ApiProperty
} from '@nestjs/swagger';
import { CheckoutDto } from './dto/checkout.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ReturnSucesso, ErroPadrao, ErroCatch } from '../commons/responses';
import { Type } from 'class-transformer';
import { ErrorResponse } from './dto/create-error-event.dto';
import { SuccessResponse } from './dto/create-event.dto';


@ApiTags('Order')
@ApiBearerAuth()
@Controller('order')
@UseGuards(JwtAuthGuard)
export class OrderController {
    constructor(
        private readonly orderService: OrderService,

    ) { }

    @Post('/save')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Finalizar compra',
        description: 'Processa os itens do carrinho e cria o pedido'
    })
    @ApiBody({
        type: CheckoutDto,
        description: 'Dados necessários para finalizar a compra',
        examples: {
            example1: {
                value: {
                    bag: [
                        {
                            id: 501,
                            uuid: "85c85794-26ce-44da-9da8-82e1e0dc06de",
                            qantitySolded: 1,
                            qantityHalfSolded: 0
                        }
                    ],
                    user: {
                        id: 1,
                        email: "usuario@exemplo.com"
                    }
                }
            }
        }
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Pedido processado com sucesso',
        type: SuccessResponse
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Dados inválidos',
        type: ErrorResponse
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Não autorizado'
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Erro interno do servidor',
        type: ErrorResponse
    })

    async saveOrder(@Body() checkoutDto: CheckoutDto) {
        try {

            if (typeof checkoutDto.bag == "undefined") {
                return new ErroPadrao(5)
            }

            if (typeof checkoutDto.user == "undefined") {
                return new ErroPadrao(6)
            }

            const res_createOrderAndUpdateSold = await this.orderService.createOrderAndUpdateSold(checkoutDto)

            return ReturnSucesso(res_createOrderAndUpdateSold)

        } catch (error) {
            throw new ErroCatch(error.message);
        }
    }
}
