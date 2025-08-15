import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { CheckoutDto } from './dto/checkout.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ReturnSucesso, ErroPadrao, ErroCatch } from '../commons/responses';

@ApiTags('Order')
@Controller('order')
@UseGuards(JwtAuthGuard)
export class OrderController {
    constructor(
        private readonly orderService: OrderService,

    ) { }

    @Post('/save')

    async saveOrder(@Body() checkoutDto: CheckoutDto) {
        try {

            if(typeof checkoutDto.bag == "undefined"){
                return new ErroPadrao(5)
            }

            if(typeof checkoutDto.user == "undefined"){
                return new ErroPadrao(6)
            }

            const res_createOrderAndUpdateSold = await  this.orderService.createOrderAndUpdateSold(checkoutDto)

            return ReturnSucesso(res_createOrderAndUpdateSold)
            
        } catch (error) {
            throw new ErroCatch(error.message);
        }
    }
}
