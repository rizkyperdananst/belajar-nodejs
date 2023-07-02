// Core Module
// File System
const fs = require('fs');

// console.log(fs);

// Menuliskan srting ke file (synchronous)
// try {
//      fs.writeFileSync('data/test.txt', 'Hello World Seacara Synchronous');
// } catch (error) {
//      console.log(error);     
// }

// Menuliskan string ke file (asynchronous) // Jika asynchronous dia akan menjalankan perintah yang berikutnya jika perintah yang pertama masih lama di eksekusi atau di jalankan.
// fs.writeFile('data/test.txt', 'Hello World Seacara Asynchronous', (err) => {
//      console.log(err);
// });

// Membaca isi file synchronous
// Cara 1
// const data = fs.readFileSync('data/test.txt');
// console.log(data.toString());
// Cara 2
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// Membaca isi file asynchronous
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//      if (err) throw err;
//      console.log(data);
// });


// Readline
const radline = require('readline');
const rl = radline.createInterface({
     input: process.stdin,
     output: process.stdout
});

rl.question('Masukan Nama anda : ', (nama) => {
     rl.question('Masukan Nomor HP anda : ', (noHP) => {
          // 1. Cara Pertama Dari Saya
          // fs.writeFileSync('data/contacts.json', JSON.stringify([
          //      {
          //           "nama": nama,
          //           "noHP": noHP,
          //      }
          // ]))

          // 2. Cara Kedua Dari Pak Sandhika Galih
          const contact = {
               nama: nama,
               noHP: noHP,
          };
          const file = fs.readFileSync('data/contacts.json', 'utf8');
          const contacts = JSON.parse(file);

          contacts.push(contact);

          fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

          console.log('Terima kasih sudah memasukkan data.');

          // console.log(`Terima Kasih ${nama}, Nomor HP anda ${noHP}.`);
          rl.close();
     })
});