require('isomorphic-fetch');
const asyncMockActions = require('../src/asyncMockActions');

let spy;
let url;

describe('Given asyncMockActions is started', () => {
  beforeEach(async () => {
    spy = jest.spyOn(global, 'fetch').mockResolvedValue();
    url = 'http://localhost:3000/comments'

    await asyncMockActions.fetchData(url);
  })

  it('Then should call url comments', () => {
    expect(spy).toHaveBeenCalledWith('http://localhost:3000/comments')
  })

  it('Then should return error', async () => {    
    try {
      await asyncMockActions.fetchData(url);
    } catch (error) {
      expect(error).rejects.toEqual('error');
    }
  });
})