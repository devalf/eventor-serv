import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LiveEventService } from './live-event.service';
import { LiveEvent, LiveEventCreate, UpdateResultApiModel } from '../entities';

import { AuthorizationSimulationInterceptor } from '../interceptors';

@Controller('events')
@ApiTags('Live Events')
@UseInterceptors(AuthorizationSimulationInterceptor)
@ApiHeader({
  name: 'X-Authorization-Simulation',
  description: 'Simulated token for authorization simulation',
  required: true,
})
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

  @ApiResponse({
    status: 200,
    description: 'The event has been successfully deleted.',
  })
  @Delete(':id')
  deleteLiveEvent(@Param('id') id: string) {
    return this.liveEventService.deleteLiveEvent(id);
  }

  @ApiResponse({
    status: 200,
    description: 'The event has been successfully updated.',
    type: UpdateResultApiModel,
  })
  @Put(':id')
  updateLiveEvent(@Param('id') id: string, @Body() liveEvent: LiveEvent) {
    return this.liveEventService.updateLiveEvent(id, liveEvent);
  }
}
