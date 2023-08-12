import { DataFactory } from 'nestjs-seeder';
import { LiveEvent } from '../../entities';

export const generateLiveEvents = (count: number = 1) =>
  DataFactory.createForClass(LiveEvent).generate(count);
