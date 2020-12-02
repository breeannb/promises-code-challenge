
// // Read a file
// //      require const fsPromises = require('fs').promises;
const fs = require('fs').promises;
// //      use fsPromises.readFile to read a file
// const promiseToReadFile = fs.readFile('./README.md', { encoding: 'utf8' });
// //      then console.log the file
// promiseToReadFile
//   .then(result => {
//     console.log(result);
//   }); 

// // Write a file
// //      use fsPromises.writeFile to write a file
// const promiseToWriteFile = fs.writeFile('./my-new-written-file.txt', 'this is the new text file');

// // use fsPromises.writeFile to write a file
// // then console.log "DONE!"
// promiseToWriteFile.then(() => console.log('DONE!')); 


// Copy a file
//      use fsPromises.readFile to read a file
const promiseToReadFileTwo = fs.readFile('./README.md', { encoding: 'utf8' });
//      then use fsPromises.writeFile to write the read data
const promiseToWriteFileTwo = fs.writeFile('./my-copy-of-README.md', 'this is the copy of README file');
//      then console.log "DONE!"
Promise.all([promiseToReadFileTwo, promiseToWriteFileTwo]).then(() => 
  console.log('DONE!'));
