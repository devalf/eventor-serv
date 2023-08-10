import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('events')
@ApiTags('Live Events')
export class LiveEventController {
  @Get()
  getLiveEvents() {
    return 'Live Events';
  }

  @Get(':id')
  getLiveEvent(@Param('id') id: string) {
    return `Live Event ${id}`;
  }
}
