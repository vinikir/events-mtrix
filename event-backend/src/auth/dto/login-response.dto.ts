import { ApiProperty } from '@nestjs/swagger';
import { LoginValueDto } from './login-value.dto';

// Representa a resposta completa do endpoint de login
export class LoginResponseDto {
    @ApiProperty({ example: false })
    erro: boolean;

    @ApiProperty({ type: LoginValueDto })
    valor: LoginValueDto;
}
