const { copyAFile, transformAFile } = require('./promises.js');
const fsPromises = require('fs').promises;

describe('Functin testings', () => {
  beforeAll(() => {
    return fsPromises.writeFile('./test-file1.txt', 'Hello');
  });

  afterAll(() => {
    return Promise.all([
      fsPromises.unlink('./test-file1.txt'), 
      fsPromises.unlink('./test-file2.txt')
    ]);
  });

  it('copies a file', () => {
    return copyAFile('./test-file1.txt', './test-file2.txt')
      .then(() => {
        return fsPromises.readFile('./test-file2.txt', { encoding: 'utf8' });
      })
      .then(newFile => {
        expect(newFile).toEqual('Hello');
      });
  });

  it('transforms a file', () => {
    return transformAFile('./test-file1.txt')
      .then(tranformedFile => {
        expect(tranformedFile).toEqual('OLLE');
      });
  });

});
