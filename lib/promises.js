// require const fsPromises = require('fs').promises;
const fsPromises = require('fs').promises;

// Copy a file
const copyAFile = (src, dst) => {
//   return fsPromises.readFile(src)
//     .then(result => fsPromises.writeFile(dst, result)); 
  const readFilePromise = fsPromises.readFile(src, { encoding: 'utf8' });

  return readFilePromise
    .then(content => fsPromises.writeFile(dst, content));
};

// Transformer
// create and export a transform(src) function
// use fsPromises.readFile to read a file
// then remove all capital letters
// then make all letters capital
// then reverse the string
const transformAFile = (src) => {
  const readTransformFilePromise = fsPromises.readFile(src, { encoding: 'utf8' });
  return readTransformFilePromise
    .then(textcontent => textcontent.replace(/[^a-z]/g, ''))
    .then(textcontent => textcontent.toUpperCase())
    .then(textcontent => textcontent.reverse());
}; 


// Superagent
// Use the Futurama Quote API http://futuramaapi.herokuapp.com
// use superagent to make a get request to http://futuramaapi.herokuapp.com/api/quotes/1
// use then to wait for the request to resolve and print the output
//      How would you get more than 1 quote?
//      How would you get only quotes by Bender?


// Superagent Again
//      use superagent to make a get request to https://rickandmortyapi.com/api/character/
//      use then to wait for the request to resolve and print the output


// Promise.all
//      use superagent to make a get request to https://rickandmortyapi.com/api/character/
//      use then to wait for the request to resolve and print the output
//      make another get request to retrieve the origin of each character
//          HINT: use Promise.all


// write a service
//      write a rickAndMortyApi.js and rickAndMortyApi.test.js file
//      export a function getCharacter that takes an id and returns a promise that resolves to a character
//      return only the characters name, status, and species
// WRITE YOUR TESTS FIRST


// write a get many service
//      export a function getManyCharacters that takes an array of ids and returns a promise that resolves with an array of characters
//          use your getCharacters function from before with a Promise.all
// WRITE YOUR TESTS FIRST


// Mocks
//      use jest.mock to mock your rickAndMortyApi.js
//      Use Promise.resolve to return a promise that resolves with some data

module.exports = {
  copyAFile, 
  transformAFile, 
};

