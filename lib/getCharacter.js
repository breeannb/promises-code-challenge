const request = require('superagent');

// make a mock for a singular character and get character 

// write a rickAndMortyApi.js and rickAndMortyApi.test.js file
// export a function getCharacter that takes an id and returns a promise that resolves to a character
// return only the characters name, status, and species
const getCharacter = id => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ body }) => ({
      name: body.name,
      status: body.status,
      species: body.species
    }));
};

//getmany gets the same character multiple times to get many characters and make a mock

const getManyCharacters = ids => {
  return Promise.all(
    ids.map(id => {
      return getCharacter(id);
    })
  );
};

module.exports = {
  getCharacter, 
  getManyCharacters
};
