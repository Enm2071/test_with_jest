import getData from '../../utils/getData';

describe('getData', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('should return data from the API', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 'test' }));

    getData('/test').then((response) => {
      expect(response.data).toEqual({ data: 'test' });
    });

    expect(fetch.mock.calls[0][0]).toEqual('/test');
  });

});
