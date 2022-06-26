const exercise1 = require('../src/exercise1');

describe('Given exercise1', () => {
    describe('When method1 is called', () => {
        let result;
        beforeEach(() => {
            result = exercise1.method1();
        });

        it('Then should return 1', () => {
            expect(result).toEqual(1);
        });
    });

    describe('When method2 is called', () => {
        let result;
        beforeEach(() => {
            result = exercise1.method2();
        });

        it('Then should return 2', () => {
            expect(result).toEqual(2);
        });
    });

    describe('When method3 is called', () => {
        beforeAll(() => {
            exercise1.method1 = jest.fn();
            exercise1.method2 = jest.fn();
        });
 
        describe('and "x" variable is true', () => {
            beforeEach(() => {
                exercise1.method3(true);
            });
    
            it('Then should call method1', () => {
                expect(exercise1.method1).toHaveBeenCalled();
            });
    
            it('Then should not call method2', () => {
                expect(exercise1.method2).not.toHaveBeenCalled();
            });
        });
 
        describe('and "x" variable is false', () => {
            beforeEach(() => {
                exercise1.method3(false);
            });
    
            it('Then should call method2', () => {
                expect(exercise1.method2).toHaveBeenCalled();
            });
    
            it('Then should not call method1', () => {
                jest.clearAllMocks();
                expect(exercise1.method1).not.toHaveBeenCalled();
            });
        });
    });
});
