const { getCharacter } = require('./getCharacter');

describe('getCharacter testing', () => {

  jest.mock('superagent', () => ({
    get: () => {
      return Promise.resolve({
        body: {
          'id': 16, 
          'name': 'Amish Cyborg',
          'status': 'Dead',
          'species': 'Alien'
        }      
      });
    }
  }));

  describe('functions to get Rick and Morty character(s)', () => {

    it('gets one character from the api', () => {
      return getCharacter(1)
        .then(result => {
          expect(result).toEqual({
            'name': 'Amish Cyborg',
            'status': 'Dead',
            'species': 'Alien'
          });
        });
    });
  
    
  });
}); 
