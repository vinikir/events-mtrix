import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EventsService {

    constructor(private prisma: PrismaService) { }

    async getEvents(search: string | undefined, limit: number| undefined, offset: number | undefined) {
        let params = {}

        return await this.prisma.event.findMany({
            skip:offset,
            take:limit,
            orderBy: {
                date: 'desc',
            },
        })
    }
}
