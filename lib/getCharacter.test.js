const { getCharacter, getManyCharacters } = require('./getCharacter');

describe('getCharacter testing', () => {

  jest.mock('superagent', () => ({
    get: () => {
      return Promise.resolve({
        body: {
          'id': 16, 
          'name': 'Amish Cyborg',
          'species': 'Alien',
          'status': 'Dead',
        }      
      });
    }
  }));

  describe('functions to get Rick and Morty character(s)', () => {

    it('gets one character from the api', () => {
      return getCharacter(16)
        .then(result => {
          expect(result).toEqual({
            'name': 'Amish Cyborg',
            'species': 'Alien',
            'status': 'Dead',
          });
        });
    });

    it('get multiple characters from api', () => {
      return getManyCharacters([1, 20, 16])
        .then(result => {
          expect(result).toEqual([
            {
              'name': 'Rick Sanchez',
              'status': 'Alive',
              'species': 'Human'
            },
            {
              'name': 'Ants in my Eyes Johnson',
              'species': 'Human',
              'status': 'unknown',
            },
            {
              'name': 'Amish Cyborg',
              'species': 'Alien',
              'status': 'Dead',
            }
          ]);
        });
    });
  
    
  });
}); 
