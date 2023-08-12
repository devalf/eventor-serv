import { generateLiveEvents } from './generate-live-events';

describe('Generate Live Events testing', () => {
  it('Should generate live events properly', () => {
    const generatedCollection = generateLiveEvents(5);

    const [firstEvent] = generatedCollection;

    expect(generatedCollection.length).toEqual(5);

    expect(firstEvent).toHaveProperty('title');
    expect(firstEvent).toHaveProperty('description');
    expect(firstEvent).toHaveProperty('dateTime');
    expect(firstEvent).toHaveProperty('location');
  });
});
