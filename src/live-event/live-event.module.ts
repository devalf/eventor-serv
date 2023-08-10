import { Module } from '@nestjs/common';
import { LiveEventController } from './live-event.controller';
import { LiveEventService } from './live-event.service';

@Module({
  controllers: [LiveEventController],
  providers: [LiveEventService],
})
export class LiveEventModule {}
