// Core Module
// File System
const fs = require('fs');
const validator = require('validator');

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

const loadContact = () => {
     const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
     const contacts = JSON.parse(fileBuffer);

     return contacts;
}

const simpanContact = (nama, email, noHP) => {
     const contact = { nama, email, noHP};
     // const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
     // const contacts = JSON.parse(fileBuffer);

     const contacts = loadContact();

     // cek duplikat
     const duplikat = contacts.find((contact) => contact.nama === nama);
     if(duplikat) {
          console.log('Contact sudah terdaftar, gunakan nama lain!');
          return false;
     }

     // cek email
     if(email) {
          if(!validator.isEmail(email)) {
               console.log('Email tidak valid!');
               return false;
          }
     }

     // cek nomor hp
     if(!validator.isMobilePhone(noHP, 'id-ID')) {
          console.log('Nomor HP tidak valid!');
          return false;
     }

     contacts.push(contact);

     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

     console.log('Terima kasih sudah memasukkan data.');

     // console.log(`Terima Kasih ${nama}, Nomor HP anda ${noHP}.`);
     // rl.close();
};

const listContact = () => {
     const contacts = loadContact();
     console.log('Daftar Kontak : ');
     contacts.forEach((contact, i) => {
          console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
     });
}

const detailContact = (nama) => {
     const contacts = loadContact();
     const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

     if(!contact) {
          console.log('Contact tidak ditemukan!');
          return false;
     };

     console.log(`Nama : ${contact.nama}`);
     console.log(`Nomor HP : ${contact.noHP}`);
     if(contact.email) {
          console.log(`Email : ${contact.email}`);
     }
};

const deleteContact = (nama) => {
     const contacts = loadContact();
     const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase());

     if(contacts.length === newContacts.length) {
          console.log('Contact tidak ditemukan!');
          return false;
     };

     fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));

     console.log(`${nama} berhasil dihapus!`);
}

module.exports = { simpanContact, listContact, detailContact, deleteContact };