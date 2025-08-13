import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @ApiProperty({
        description: 'O endereço de e-mail do usuário',
        example: 'usuario@example.com',
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'A senha do usuário',
        example: 'senhaSegura123',
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}