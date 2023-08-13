import axios, { AxiosError, AxiosResponse } from 'axios';
import { LiveEvent, UpdateResultApiModel } from '../src/entities';

describe('e2e testing', () => {
  const liveEventData = {
    title: 'TED talks - humanity',
    description: 'Public speaking',
    dateTime: '2023-10-10T10:10:10.000Z',
    location: 'Concert hall',
  };
  it('Should return success for request Live Events', async () => {
    const result: AxiosResponse<LiveEvent[]> = await axios.get(`/api/events`);

    expect(result.status).toBe(200);
  });

  it('Should return 401 error for request without `X-Authorization-Simulation` header', async () => {
    const axiosConfig = {
      headers: {
        'X-Authorization-Simulation': undefined,
      },
    };

    axios.get(`/api/events`, axiosConfig).catch((err) => {
      expect(err instanceof AxiosError).toBe(true);
      expect(err.message).toBe('Request failed with status code 401');
    });
  });

  it('Should return 400 error on creation Live Event request', async () => {
    axios
      .post(`/api/events`, {
        ...liveEventData,
        location: undefined,
      })
      .catch((err) => {
        expect(err instanceof AxiosError).toBe(true);
        expect(err.message).toBe('Request failed with status code 400');
      });
  });

  it('Should create, return in the list and delete Live Event', async () => {
    const result: AxiosResponse<LiveEvent> = await axios.post(
      `/api/events`,
      liveEventData,
    );

    expect(result.status).toBe(201);
    expect(result.data).toHaveProperty('id');
    expect(result.data).toHaveProperty('title', liveEventData.title);
    expect(result.data).toHaveProperty(
      'description',
      liveEventData.description,
    );
    expect(result.data).toHaveProperty('dateTime', liveEventData.dateTime);
    expect(result.data).toHaveProperty('location', liveEventData.location);

    const { data: liveEventCollection }: AxiosResponse<LiveEvent[]> =
      await axios.get(`/api/events`);
    const newLiveEvent = liveEventCollection.find(
      (entry: LiveEvent) => entry.title === liveEventData.title,
    );

    expect(newLiveEvent.title).toBe(liveEventData.title);

    const deleteResult: AxiosResponse = await axios.delete(
      `/api/events/${newLiveEvent.id}`,
    );

    expect(deleteResult.status).toBe(200);

    const { data: liveEventCollectionCheck }: AxiosResponse<LiveEvent[]> =
      await axios.get(`/api/events`);
    const newLiveEventCheck = liveEventCollectionCheck.find(
      (entry: LiveEvent) => entry.title === liveEventData.title,
    );

    expect(newLiveEventCheck).toBe(undefined);
  });

  it('Should return 404 error on fetching Live Event by wrong id', async () => {
    axios.get(`/api/events/123`).catch((err) => {
      expect(err instanceof AxiosError).toBe(true);
      expect(err.message).toBe('Request failed with status code 404');
    });
  });

  it('Should create, check by single Event request and update Live Event', async () => {
    const { data: newLiveEvent }: AxiosResponse<LiveEvent> = await axios.post(
      `/api/events`,
      {
        ...liveEventData,
        title: 'Event for update',
      },
    );

    expect(newLiveEvent.title).toBe('Event for update');

    const { data: checkLiveEvent }: AxiosResponse<LiveEvent> = await axios.get(
      `/api/events/${newLiveEvent.id}`,
    );

    expect(checkLiveEvent.title).toBe('Event for update');

    const updateResult: AxiosResponse<UpdateResultApiModel> = await axios.put(
      `/api/events/${newLiveEvent.id}`,
      {
        ...newLiveEvent,
        title: 'Updated event title',
      },
    );

    expect(updateResult.status).toBe(200);

    const { data: updateResultData } = updateResult;

    expect(updateResultData.affected).toEqual(1);

    const deleteResult: AxiosResponse = await axios.delete(
      `/api/events/${newLiveEvent.id}`,
    );

    expect(deleteResult.status).toBe(200);
  });
});
