import { Controller, Get, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { ReturnSucesso, ErroPadrao, ErroCatch } from '../commons/responses';
import { GetEventsDto } from './dto/get-events.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EventEntity } from './entities/event.entity';

@ApiTags('Events')
@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) { }

    @Get('/get')
    @ApiOperation({
        summary: 'Lista todos os eventos',
        description: 'Retorna uma lista de eventos com paginação e busca por termo.',
    })
    @ApiResponse({
        status: 200,
        description: 'Retorna a lista de eventos com sucesso.',
        type: EventEntity,
        isArray: true,
    })
    async getEvents(@Query() query: GetEventsDto) {

        try {
            
            
            const limit = query.limit ? parseInt(query.limit) : 10
            const offset = query.offset ? parseInt(query.offset) : 0
            
            const events = await this.eventsService.getEvents( limit, offset)

            return ReturnSucesso(events);

        } catch (error) {
            throw new ErroCatch(error.message);

        }

    }
}
