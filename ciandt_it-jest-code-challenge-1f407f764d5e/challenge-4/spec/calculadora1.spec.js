const ex002 = require('../src/calculadora1');
const Core = require('../src/core');

const spySoma = jest.spyOn(Core, 'soma');
const spyDividir = jest.spyOn(Core, 'dividir');

describe('Given calculadora is started', () => {

  let results;
  describe('And spySoma is called with valid numbers', () => {
    beforeEach(() => {
      number1 = 6789,
      number2 = 586,
      results = ex002(number1, number2, 1);
    });

    it('Then return result of the sum', () => {
      expect(results).toEqual(number1 + number2);
    });

    it('Then spySoma is called with numbers defined', () => {
      expect(spySoma).toHaveBeenCalledWith(number1, number2);
    });
  });

  describe('And spyDividir is called with valid numbers', () => {
    beforeEach(() => {
      number1 = 486,
      number2 = 9312,
      results = ex002(number1, number2, 2);
    });

    it('Then return result of division', () => {
      expect(results).toEqual(number1 / number2);
    });
    it('Then spyDividir is called with numbers defined', () => {
      expect(spyDividir).toHaveBeenCalledWith(number1, number2);
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