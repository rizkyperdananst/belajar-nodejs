// Core Module
// File System
const fs = require('fs');

// Readline
const radline = require('readline');
const rl = radline.createInterface({
     input: process.stdin,
     output: process.stdout
});

// Membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
     fs.mkdirSync(dirPath);
}

// Membuat file contacts.json jika belum ada
const filePath = './data/contacts.json';
if (!fs.existsSync(filePath)) {
     fs.writeFileSync(filePath, '[]', 'utf8');
}

const tulisPertanyaan = (pertanyaan) => {
     return new Promise((resolve, reject) => {
          rl.question(pertanyaan, (nama) => {
               resolve(nama);
          });
     });
};

const simpanContact = (nama, email, noHP) => {
     const contact = { nama, email, noHP};
     const file = fs.readFileSync('data/contacts.json', 'utf-8');
     const contacts = JSON.parse(file);

     contacts.push(contact);

     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

     console.log('Terima kasih sudah memasukkan data.');

     // console.log(`Terima Kasih ${nama}, Nomor HP anda ${noHP}.`);
     rl.close();
};

module.exports = {
     tulisPertanyaan,
     simpanContact,
}