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
const transformAFile = (src) => {
  const readTransformFilePromise = fsPromises.readFile(src, { encoding: 'utf8' });
  return readTransformFilePromise
    .then(textcontent => textcontent.replace(/[^a-z]/g, ''))
    .then(textcontent => textcontent.toUpperCase())
    .then(textcontent => textcontent.split('').reverse().join(''));
}; 

module.exports = {
  copyAFile, 
  transformAFile
};

