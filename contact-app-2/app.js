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
     }
});

yargs.parse();