import { ApiProperty } from '@nestjs/swagger';


export class ErrorResponse {
    @ApiProperty({ example: 5, description: 'Código do erro' })
    code: number;

    @ApiProperty({ example: 'Parâmetros inválidos', description: 'Mensagem do erro' })
    message: string;
}