import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumberString, IsString } from 'class-validator';

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
    @IsNumberString()
    limit?: number;

    @ApiProperty({
        description: 'Número de eventos para pular (offset)',
        required: false,
        default: 0,
    })
    @IsOptional()
    @IsNumberString()
    offset?: number;
}

