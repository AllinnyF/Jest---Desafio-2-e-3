const timerActions = require('../src/timerActions');

jest.useFakeTimers();

let callback;
describe('Given timerActions is started', () => {

  describe('And one time has been executed', () => {
    it('Then should call the callback onetime in 1000', () => {
      callback = jest.fn();
      timerActions.withTimeout(callback);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    })
  })
  describe('And all timers been executed', () => {
    it('Then should call twice with more time', () => {
      jest.runAllTimers();
      callback = jest.fn();
      timerActions.withTimeout(callback);
      expect(setTimeout).toHaveBeenCalledTimes(2);
    })
  })
})