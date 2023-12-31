const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
     command: 'add',
     describe: 'Menambahkan contact baru',
     builder: {
          nama: {
               describe: 'Nama Lengkap',
               demandOption: true,
               type: 'string'
          },
          email: {
               describe: 'Email',
               demandOption: true,
               type: 'string'
          },
          noHP: {
               describe: 'Nomor HandPhone',
               demandOption: true,
               type: 'string'
          }
     },
     handler(argv) {
          contacts.simpanContact(argv.nama, argv.email, argv.noHP);


          // const contact = {
          //      nama: argv.nama,
          //      email: argv.email,
          //      noHP: argv.noHP
          // };
          // console.log(contact);
     },
}).demandCommand();

// Menampilkan daftar semua nama & no hp contact
yargs.command({
     command: 'list',
     describe: 'Menampilkan daftar semua nama & no hp contact',
     handler() {
          contacts.listContact();
     }
})

// Menampilkan detail sebuah contact
yargs.command({
     command: 'detail',
     describe: 'Menampilkan detail sebuah contact berdasarkan nama',
     builder: {
          nama: {
               describe: 'Nama Lengkap',
               demandOption: true,
               type: 'string'
          }
     },
     handler(argv) {
          contacts.detailContact(argv.nama);
     }
});

// Menghapus contact berdasarkan nama
yargs.command({
     command: 'delete',
     describe: 'Menghapus sebuah contact berdasarkan nama',
     builder: {
          nama: {
               describe: 'Nama Lengkap',
               demandOption: true,
               type: 'string'
          }
     },
     handler(argv) {
          contacts.deleteContact(argv.nama);
     }
})

yargs.parse();