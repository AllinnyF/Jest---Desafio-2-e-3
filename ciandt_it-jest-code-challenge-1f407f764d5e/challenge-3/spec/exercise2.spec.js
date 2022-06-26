const exercise2 = require('../src/exercise2');

describe('Given exercise2', () => {
    describe('When mainMethod is called', () => {
        beforeEach(() => {
            jest.spyOn(exercise2, 'isNumber2').mockImplementationOnce()
            exercise2.mainMethod();
        });

        it('Then should call isNumber2', () => {
            expect(exercise2.isNumber2).toHaveBeenCalledWith(3);
        });
    });
    describe('When isNumber2 is called with 1', () => {
        let result;
        beforeEach(() => {
            result = exercise2.isNumber2(1);
        });

        it('Then should return false', () => {
            expect(result).toBeFalsy();
        });
    });

    describe('When isNumber2 is called with 2', () => {
        let result;
        beforeEach(() => {
            result = exercise2.isNumber2(2);
        });

        it('Then should return true', () => {
            expect(result).toBeTruthy()
        });
    });
});
