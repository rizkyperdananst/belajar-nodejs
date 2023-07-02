// console.log('Hmmm');


// const nama = 'Rizky Perdana Nst';
// console.log(nama)

// const myName = (nama) => {
//      return `Nama saya ${nama}.`;
// };

// console.log(myName(nama));

// import './coba'; // Ini jika require pake es6/7
// require('./coba');

// const fs = require('fs'); // code module
// import cetakNama from './coba'; // mengimport local module
// const moment = require('moment'); // third party module / npm module / node_modules

// console.log('Hallo Rizky');

// const cetakNama = require('./coba');

const coba = require('./coba');

console.log(coba.cetakNama('Rizky'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());