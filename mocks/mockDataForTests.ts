export const mockData = [
  {
    user_id: 'ec28d8b8-1320-4e35-88ef-700c3eec750a',
    timestamp: '2019-10-03T03:42:25Z',
    currency: 'GBP',
    amount: '+690.67',
  },
  {
    user_id: '32138630-53c5-40df-973d-497b306f0576',
    timestamp: '2020-06-28T19:01:45Z',
    currency: 'USD',
    amount: '-618.50',
  },
  {
    user_id: '6f6c005c-bb46-47d3-b560-800a67798e70',
    timestamp: '2020-06-21T16:37:05Z',
    currency: 'EUR',
    amount: '+380.19',
  },
  {
    user_id: '58b906e2-df1e-4b1c-a9c5-eced03801299',
    timestamp: '2019-11-19T16:49:22Z',
    currency: 'EUR',
    amount: '-604.56',
  },
  {
    user_id: '58b906e2-df1e-4b1c-a9c5-eced03801299',
    timestamp: '2019-09-14T23:13:41Z',
    currency: 'EUR',
    amount: '-767.01',
  },
  {
    user_id: '308020fa-2074-4ac5-afa6-d514b35c5962',
    timestamp: '2019-11-19T08:42:09Z',
    currency: 'GBP',
    amount: '-538.02',
  },
  {
    user_id: '58b906e2-df1e-4b1c-a9c5-eced03801299',
    timestamp: '2020-03-14T18:40:29Z',
    currency: 'GBP',
    amount: '-751.10',
  },
];

export const transformedMockData = [
  {
    uuid: 'ec28d8b8-1320-4e35-88ef-700c3eec750a',
    lastActivity: '2019-10-03',
    GBP: '690.67',
  },
  {
    uuid: '32138630-53c5-40df-973d-497b306f0576',
    lastActivity: '2020-06-28',
    USD: '-618.50',
  },
  {
    uuid: '6f6c005c-bb46-47d3-b560-800a67798e70',
    lastActivity: '2020-06-21',
    EUR: '380.19',
  },
  {
    uuid: '58b906e2-df1e-4b1c-a9c5-eced03801299',
    lastActivity: '2020-03-14',

    EUR: '-1371.57',
    GBP: '-751.10',
  },
  {
    uuid: '308020fa-2074-4ac5-afa6-d514b35c5962',
    lastActivity: '2019-11-19',
    GBP: '-538.02',
  },
];
