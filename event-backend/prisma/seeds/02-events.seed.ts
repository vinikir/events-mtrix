import { PrismaClient } from '@prisma/client';
import { eventsData } from '../../src/mok/events.data';

const prisma = new PrismaClient();

async function main() {
    
    const coutEvents = await prisma.event.count()

    if(coutEvents > 0){
        return
    }
    
    const formattedEvents = eventsData.map(event => ({
        ...event,
        date: new Date(event.date),
    }));

    try {
        const result = await prisma.event.createMany({
            data: formattedEvents,
        })

        console.log('Eventos criados:', result.count);
    } catch (error) {
        console.error('Erro ao inserir eventos:', error);
        throw error;
    }

}

main().catch((e) => {

    console.error(e);
    process.exit(1);

}).finally(async () => {

    await prisma.$disconnect();

});