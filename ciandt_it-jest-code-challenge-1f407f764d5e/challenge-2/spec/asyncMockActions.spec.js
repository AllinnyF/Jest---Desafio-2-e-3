require('isomorphic-fetch');
const asyncMockActions = require('../src/asyncMockActions');

describe('Given asyncMockActions is started', () => {
  let response;

  beforeEach(() => {
    response = { nome: "Allinny" };
  });

  const spyFetchData = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(response) })
    )

  describe('When fetchData is called', () => {
    describe('And fetchData resolved', () => {
      it('Then should return response', async () => {
        expect(await asyncMockActions.fetchData()).toEqual({ nome: "Allinny" })
      });
    });

    describe('And fetchData is rejected', () => {
      beforeEach(() => {
        spyFetchData.mockRejectedValue(new Error("ERROR: Failed to fetch"))
      });

      it('Then should return error', async () => {
        expect(await asyncMockActions.fetchData()).toEqual(new Error("ERROR: Failed to fetch"))
      });
    });

    describe('And the url is called correctly', () => {
      beforeEach(() => {
        global.fetch = jest.fn() 
      });

      it('Then return url', () => {
        expect(asyncMockActions.url).toEqual('http://localhost:3005/comments');
      });
    });
  });
});