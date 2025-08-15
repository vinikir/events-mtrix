import { ApiProperty } from '@nestjs/swagger';


export class SuccessResponse {
    @ApiProperty({
        example: {
            message: "Processamento do carrinho finalizado.",
            successfulOrders: [],
            failedItems: []
        },
        description: 'Resultado do processamento'
    })
    data: any;
}