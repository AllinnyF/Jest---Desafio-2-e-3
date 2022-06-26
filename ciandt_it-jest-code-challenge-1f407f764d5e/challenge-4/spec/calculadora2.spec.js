const ex002 = require('../src/calculadora2');
const Core = require('../src/core');

describe('Given calculadora is started', () => {
  beforeEach(() => {
    number1 = 6789,
    number2 = 586,
    results = ex002(number1, number2, 1);
  });
  it('should create', () => {
    expect(Core.soma(number1, number2)).toEqual(results);
  });
  
  describe('Given calculadora is started', () => {
    beforeEach(() => {
      number1 = 6789,
      number2 = 586,
      results = ex002(number1, number2, 2);
    });

    it('should create', () => {
      expect(Core.dividir(number1, number2)).toEqual(results);
    });
  });

  describe('And ex002 does not receive any number', () => {
    beforeEach(() => {
      results = ex002();
    });

    it('Then the result will be equal to 0', () => {
      expect(results).toEqual(0);
    });

    describe('And return throw Error when OP is invalid', () => {
      it('Then return Error', () => {
        const results = (() => ex002(1, 2, 0))

        expect(results).toThrowError("OP INVALID");
      });
    });
  });
});