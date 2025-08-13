import * as fs from 'fs';
import * as path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const seedsPath = path.join(__dirname, 'seeds');
    const seedFiles = fs.readdirSync(seedsPath)
        .filter(f => f.endsWith('.ts'))
        .sort();

    for (const file of seedFiles) {
        const filePath = path.join(seedsPath, file);
        console.log(`Executing seed: ${file}`);
        
        const seedModule = await import(filePath);
        if (seedModule.run) {
            await seedModule.run(prisma);
        }
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });