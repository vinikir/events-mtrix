import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumberString, IsString, IsNumber } from 'class-validator';

export class GetEventsDto {
    @ApiProperty({
        description: 'Termo de busca para filtrar eventos',
        required: false,
    })
    @IsOptional()
    @IsString()
    search?: string;

    @ApiProperty({
        description: 'Número de eventos por página',
        required: false,
        default: 10,
    })
    @IsOptional()
    @IsString()
    limit?: string;

    @ApiProperty({
        description: 'Número de eventos para pular (offset)',
        required: false,
        default: 0,
    })
    @IsOptional()
    @IsString()
    offset?: string;
}

