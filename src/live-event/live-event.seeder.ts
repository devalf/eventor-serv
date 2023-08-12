import { Seeder } from 'nestjs-seeder';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { generateLiveEvents } from '../utils';
import { InjectRepository } from '@nestjs/typeorm';
import { LiveEvent } from '../entities';

@Injectable()
export class LiveEventSeeder implements Seeder {
  constructor(
    @InjectRepository(LiveEvent)
    private readonly liveEventRepository: Repository<LiveEvent>,
  ) {}

  drop = async (): Promise<any> => {
    return this.liveEventRepository.delete({});
  };

  seed = async (): Promise<any> => {
    const generatedCollection = generateLiveEvents(5);

    return this.liveEventRepository.insert(generatedCollection);
  };
}
