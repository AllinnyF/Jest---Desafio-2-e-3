require('isomorphic-fetch');
const asyncActions = require('../src/asyncActions');

let spy;
let data;

const url = 'http://localhost:3000/comments'
describe('Given asyncActions is started', () => {
  describe('And use fetchData', () => {
    beforeEach(async () => {
      spy = jest.spyOn(global, 'fetch').mockResolvedValue();

      await asyncActions.fetchData(url);
    })

    it('Then should call with url comments', () => {
      expect(spy).toHaveBeenCalledWith('http://localhost:3000/comments')
    })

    it('Then should return error', async () => {
      try {
        await asyncActions.fetchData(url);
      } catch (error) {
        expect(error).rejects.toEqual('error');
      }
    });
  })

  describe('And use fetchAndStore', () => {
    beforeEach(async () => {
      jest.spyOn(asyncActions, 'saveToLocalStorage')
      data = ({ title: 'Learning test', statusTest: 'passed', year: 2022 });
      await asyncActions.saveToLocalStorage(data);
      await asyncActions.fetchAndStore(url)
    })
    it('Then call saveToLocalStorage', () => {
      expect(asyncActions.saveToLocalStorage).toHaveBeenCalled()
    })
  })

  // describe('And use fetchAndStore', () => {
  //   beforeEach(async () => {
  //     jest.spyOn(asyncActions, 'saveToLocalStorage')
  //     // data = ({ title: 'Learning test', statusTest: 'passed', year: 2022 });
  //     await asyncActions.saveToLocalStorage(data);
  //     await asyncActions.fetchAndStore(url)
  //   })
  //   it('Then cal saveToLocalStorage', () => {
  //     expect(asyncActions.saveToLocalStorage).toHaveBeenCalled()
  //   })
  //   // it('Then should return error', () => {
  //   //   return asyncActions.fetchAndStore(url).catch(err =>
  //   //     expect(err).rejects.toEqual('error'),
  //   //   );
  //   // });
  // })
})