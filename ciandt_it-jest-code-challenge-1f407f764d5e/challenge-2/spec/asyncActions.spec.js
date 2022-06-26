require('isomorphic-fetch');
const asyncActions = require('../src/asyncActions');

describe('Given asyncActions is started', () => {
  let responseData;
  let spyFetch;

  beforeEach(() => {
    responseData = { title: 'Learning test', statusTest: 'passed'};

    spyFetch = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(responseData) })
      )
  });
  describe('When fetchData is called', () => {
    describe('And fetchData is resolved', () => {
      it('Then should return response', async () => {
        expect(await asyncActions.fetchData()).toEqual(responseData)
      });
    });

    describe('And fetchData is rejected', () => {
      beforeEach(() => {
        spyFetch.mockRejectedValue(new Error("Failed to fetch"))
      });

      it('Then should return error', async () => {
        expect(await asyncActions.fetchData()).toEqual(new Error("Failed to fetch"))
      });
    });

    describe('And the url is called correctly', () => {
      beforeEach(() => {
        global.fetch = jest.fn()
      });

      it('Then return url', () => {
        expect(asyncActions.url).toEqual('http://localhost:3005/comments');
      });
    });
  });

  describe('When fetchAndStore is called', () => {
    describe('And fetchData is rejected', () => {
      beforeEach(() => {
        console.log = jest.fn("Failed to save");
        spyFetch.mockRejectedValue(new Error("Failed to save"))
      });

      it('Then should return error', async () => {
        expect(await asyncActions.fetchAndStore()).toEqual(new Error("Failed to save"));
      })
    });
  });

  describe('When saveToLocalStorage is called', () => {
    beforeEach(() => {
      console.log = jest.fn();
      asyncActions.saveToLocalStorage({
        url: asyncActions.url,
        title: 'Learning test',
        statusTest: 'passed',
      });
    })
    it('Then should log message of save data to local storage', () => {
      expect(console.log).toHaveBeenCalledWith(
        'comments',
        '{"url":"http://localhost:3005/comments","title":"Learning test","statusTest":"passed"}'
      );
    });
  })
});