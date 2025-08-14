import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EventsService {

    constructor(private prisma: PrismaService) { }

    async getEvents(search: string | undefined , limit: number, offset: number) {
        let params = {
            skip:offset,
            take:limit,
            
        }
        
        return await this.prisma.event.findMany(params)
    }
}
