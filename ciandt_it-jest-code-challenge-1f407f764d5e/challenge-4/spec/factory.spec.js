const Factory = require('../src/factory');
const MongoCliente = require('../src/mongo-cliente');

const mockMongoCliente = jest.spyOn(MongoCliente, "criarConexao")
  .mockImplementation()
jest.mock('../src/repositorio.js')
describe('Given Factory is started', () => {
  describe('When criarRepositorio is called', () => {
    let result;
    beforeEach(() => {
      result = Factory.criarRepositorio();
    });

    it('Then should be call MongoCliente', () => {
      expect(mockMongoCliente).toHaveBeenCalled();
    });

    it('Then should return result promise', () => {
      const resolved = Promise.resolve('test')

      expect(result).toEqual(resolved);
    });
  });
});