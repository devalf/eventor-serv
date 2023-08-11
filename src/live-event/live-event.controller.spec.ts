import { LiveEventController } from './live-event.controller';
import { LiveEventService } from './live-event.service';
import { DataFactory } from 'nestjs-seeder';
import { LiveEvent } from '../entities';

describe('LiveEventController', () => {
  let liveEventController: LiveEventController;
  let liveEventService: LiveEventService;

  beforeEach(async () => {
    liveEventService = new LiveEventService(undefined);
    liveEventController = new LiveEventController(liveEventService);
  });

  it('should return collection of `Live Events`', async () => {
    const generatedCollection =
      DataFactory.createForClass(LiveEvent).generate(1);

    jest
      .spyOn(liveEventService, 'getLiveEvents')
      .mockResolvedValue(generatedCollection as any);

    expect(await liveEventController.getLiveEvents()).toBe(generatedCollection);
  });
});
