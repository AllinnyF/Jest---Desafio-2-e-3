const timerActions = require('../src/timerActions');

jest.useFakeTimers();

let callback;
describe('Given timerActions is started', () => {
  beforeEach(() => {
    console.log = jest.fn();
    jest.runAllTimers();
    callback = jest.fn();
    timerActions.withTimeout(callback);
  });

  describe('And one time has been executed', () => {
    it('Then should call the callback onetime in 1000', () => {
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    })
  })
  describe('And all timers been executed', () => {
    it('Then should call twice with more time', () => {
      expect(setTimeout).toHaveBeenCalledTimes(2);
    })

    it('Then should log message of delayed execution', () => {
      expect(console.log).toHaveBeenCalledWith('Where are we now?');
    })
  })

  describe('And all timers been executed', () => {
    it('Then should call twice with more time', () => {
      expect(setTimeout).toHaveBeenCalledTimes(4);
    })

    it('Then should log message of success in sync', () => {
      expect(console.log).toHaveBeenCalledWith('We in sync bois!');
    })
  })
})