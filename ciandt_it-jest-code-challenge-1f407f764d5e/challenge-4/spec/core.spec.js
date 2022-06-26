const Core = require('../src/core');

describe('Given core is started', () => {
  describe('when constructor is called', () => {
    let babel;
    beforeEach(() => {
      babel = Core.soma(1 + 1)
    })

    it('should', () => {
      expect(babel).toEqual(2);
    });
  });

  describe('when constructor is called', () => {
    let babel;
    beforeEach(() => {
      babel = Core.dividir(10 / 2)
    })

    it('should', () => {
      expect(babel).toEqual(Infinity);
    });
  });

  // describe('when constructor is called', () => {
  //   let spy;
  //   beforeEach(() => {
  //     console.log = jest.fn('init teste');
  //     spy = jest.spyOn(Core, 'constructor');
  //   })

  //   it('should', () => {
  //     expect(spy).toHaveBeenCalledWith('init teste');
  //   });
  // });

  // describe('when constructor is called', () => {
  //   let babel;
  //   beforeEach(() => {
  //     babel = Core.constructor()
  //   })

  //   it('should', () => {
  //     expect(babel).toEqual(Infinity);
  //   });
  // });

});