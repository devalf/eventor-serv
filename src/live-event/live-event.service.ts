import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { LiveEvent } from '../entities';

@Injectable()
export class LiveEventService {
  constructor(
    @InjectRepository(LiveEvent)
    private readonly liveEventRepository: Repository<LiveEvent>,
  ) {}

  async getLiveEvents(): Promise<LiveEvent[]> {
    return this.liveEventRepository.find();
  }

  async getLiveEvent(id: string): Promise<LiveEvent | null> {
    const event = await this.liveEventRepository.findOneBy({ id });

    if (event === null) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    return event;
  }

  async createLiveEvent(liveEvent: LiveEvent): Promise<LiveEvent> {
    return this.liveEventRepository.save(liveEvent);
  }
}
