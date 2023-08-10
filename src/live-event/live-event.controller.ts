import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LiveEventService } from './live-event.service';
import { LiveEvent, LiveEventCreate } from '../entities';

@Controller('events')
@ApiTags('Live Events')
export class LiveEventController {
  constructor(private liveEventService: LiveEventService) {}

  @ApiResponse({
    status: 200,
    description: 'The detailed product has been successfully retrieved.',
    type: [LiveEvent],
  })
  @Get()
  getLiveEvents() {
    return this.liveEventService.getLiveEvents();
  }

  @ApiResponse({
    status: 200,
    description: 'The event has been successfully retrieved.',
    type: LiveEvent,
  })
  @Get(':id')
  getLiveEvent(@Param('id') id: string) {
    return this.liveEventService.getLiveEvent(id);
  }

  @ApiResponse({
    status: 200,
    description: 'The event has been successfully created.',
    type: LiveEvent,
  })
  @Post()
  createLiveEvent(@Body() liveEvent: LiveEventCreate) {
    return this.liveEventService.createLiveEvent(liveEvent);
  }
}
