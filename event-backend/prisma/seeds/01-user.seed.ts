import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    
    const passwordHash = await bcrypt.hash('senha123', 10);

    const user = await prisma.user.upsert({
        where: { email: 'admin@mtrix.com' },
        update: {},
        create: {
            name: 'Admin',
            email: 'admin@mtrix.com',
            password: passwordHash,
        },
    });

    console.log('Usuário criado:', user);
}

main().catch((e) => {

        console.error(e);
        process.exit(1);

    }).finally(async () => {

        await prisma.$disconnect();
        
    });
