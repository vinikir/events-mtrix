import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ReturnSucesso, ErroPadrao, ErroCatch } from '../commons/responses';
import { UsersService } from 'src/users/users.service';
import { isValidEmail } from 'src/commons/Functions';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { LoginResponseDto } from './dto/login-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(
        private readonly userService: UsersService,
        private jwtService: JwtService,

    ) { }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Realiza o login do usuário' })
    @ApiBody({ type: LoginDto })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Login bem-sucedido. Retorna o token e os dados do usuário.',
        type: LoginResponseDto, 
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Credenciais inválidas.',
    })
    async login(@Body() body: { email: string; password: string }) {
        try {


            if (typeof body == "undefined") {
                return new ErroPadrao(3);
            }

            const { email, password } = body

            if (typeof email == "undefined" || email.trim() == "") {
                return new ErroPadrao(1);
            }

            if (typeof password == "undefined" || password.trim() == "") {
                return new ErroPadrao(0);
            }

            const res_isValidEmail = isValidEmail(email.trim())

            if (!res_isValidEmail.error && !res_isValidEmail.confirmed) {

                return new ErroPadrao(4);

            }

            if (res_isValidEmail.error) {
                throw new Error(res_isValidEmail.msg)
            }

            const user = await this.userService.login(email.trim(), password.trim());

            if (!user) {
                return new ErroPadrao(2);
            }

            const token = this.jwtService.sign(user);



            return ReturnSucesso({
                access_token: token,
                user: user,
            });

        } catch (e) {
            throw new ErroCatch(e.message);

        }

    }
}
