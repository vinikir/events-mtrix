import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { Prisma } from '@prisma/client';
type UserWithoutPassword = Omit<Prisma.UserGetPayload<{}>, 'password'>;

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async login(email: string, passwordValidation: string) {
        let user = await this.prisma.user.findUnique({ where: { email } });

        if (!user) return null;

        const passwordValid = await bcrypt.compare(passwordValidation, user.password);
        if (!passwordValid) return null;
        
        const { password, ...result } = user;

        return result;
    }

    async findOne(infos:any){
        console.log(infos)
        return "Ok"
    }
}
