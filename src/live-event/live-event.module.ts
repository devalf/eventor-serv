import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LiveEventController } from './live-event.controller';
import { LiveEventService } from './live-event.service';
import { LiveEvent } from '../entities';

@Module({
  imports: [TypeOrmModule.forFeature([LiveEvent])],
  controllers: [LiveEventController],
  providers: [LiveEventService],
})
export class LiveEventModule {}
