// Core Module
// File System
const fs = require('fs');

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

// Ambil semua data di contact.json
const loadContact = () => {
     const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
     const contacts = JSON.parse(fileBuffer);

     return contacts;
}

// Cari contact berdasarkan nama
const findContact = (nama) => {
     const contacts = loadContact();
     const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
     return contact;
}

module.exports = { loadContact, findContact };