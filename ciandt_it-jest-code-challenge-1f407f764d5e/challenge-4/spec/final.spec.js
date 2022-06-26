const final = require('../src/final');
const Factory = require('../src/factory');

const mockFindAllFiles = jest.fn(() => 'mockFindAllFiles');

const spyMockFactory = jest
  .spyOn(Factory, 'criarRepositorio')
  .mockImplementation(() => ({
    findAllFiles: mockFindAllFiles
  }));

describe('Given final is started', () => {
  let results;

  beforeEach(async () => {
    results = await final();
  });
  describe('And if attempt is successful', () => {
    it('Then factory.criarRepositorio is called', () => {
      expect(spyMockFactory).toHaveBeenCalled();
    });
    it('Then should call findAllFiles methods', () => {
      expect(mockFindAllFiles).toHaveBeenCalled();
    });
    it('Then return results with all files', () => {
      expect(results).toEqual('mockFindAllFiles');
    });
  });
  describe('And if attempt fails', () => {
    beforeEach(async () => {
      jest.spyOn(console, 'error');
      spyMockFactory.mockRejectedValue('attempt fails')
      await final();
    });
    it('Then should call error log', () => {
      expect(console.error).toHaveBeenCalledWith('FAILED', 'attempt fails');
    });
  });
});