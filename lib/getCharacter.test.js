const { getCharacter, getManyCharacters } = require('./getCharacter');

describe('getCharacter testing', () => {

  jest.mock('superagent', () => ({
    get: () => {
      return Promise.resolve({
        body: {
          'id': 1, 
          'name': 'Rick Sanchez',
          'status': 'Alive',
          'species': 'Human'
        }      
      });
    }
  }));

  describe('functions to get Rick and Morty character(s)', () => {

    it('gets one character from the api', () => {
      return getCharacter(1)
        .then(result => {
          expect(result).toEqual({
            'name': 'Rick Sanchez',
            'status': 'Alive',
            'species': 'Human'
          });
        });
    });

    it('get multiple characters from api', () => {
      return getManyCharacters([1, 2, 3])
        .then(result => {
          expect(result).toEqual([
            {
              'name': 'Rick Sanchez',
              'status': 'Alive',
              'species': 'Human'
            },
            {
              'name': 'Morty Smith',
              'species': 'Human',
              'status': 'Alive',
            },
            {
              'name': 'Summer Smith',
              'species': 'Human',
              'status': 'Alive',
            }
          ]);
        });
    });
  
    
  });
}); 
