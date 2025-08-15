import { HttpException, HttpStatus } from '@nestjs/common';

export const erros: Record<number, { msg: string; codHttp: number }> = {
    0: { msg: 'A senha é obrigatória.', codHttp: 422 },
    1: { msg: 'O email é obrigatório.', codHttp: 422 },
    2: { msg: 'Credenciais inválidas.', codHttp: 401 },
    3: { msg: 'Os parametros email e senha são obrigatorias.', codHttp: 422 },
    4: { msg: 'O formato do email esta invalido.', codHttp: 422 },
    5: { msg: 'O parametros bag é obrigatorio.', codHttp: 422 },
    6: { msg: 'O parametros user é obrigatorio.', codHttp: 422 },
};

export class ErroPadrao extends HttpException {
    constructor(cod: number) {
        
        if (!erros[cod]) {
            super(
                { erro: true, valor: 'Erro inesperado', codigo: 0 },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        } else {
            super(
                { erro: true, valor: erros[cod].msg, codigo: cod },
                erros[cod].codHttp,
            );
        }
    }
}

export class ErroCatch extends HttpException {
    constructor(msg: string) {
        super({ erro: true, valor: msg, codigo: 9999 }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

export const ReturnSucesso = (valor: any) => ({
    erro: false,
    valor,
});