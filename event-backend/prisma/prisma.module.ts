import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersService } from 'src/users/users.service';
import { EventsService } from 'src/events/events.service';

@Module({
  providers: [PrismaService, UsersService, EventsService],
  exports: [PrismaService], 
})
export class PrismaModule {}
