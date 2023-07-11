const contacts = require('./contacts.js');

const main = async () => {
     const nama = await contacts.tulisPertanyaan('Masukkan nama anda : ');
     const email = await contacts.tulisPertanyaan('Masukkan email anda : ');
     const noHp = await contacts.tulisPertanyaan('Masukkan nomor handphone anda : ');

     contacts.simpanContact(nama, email, noHp);

};

main();


// rl.question('Masukan Nama anda : ', (nama) => {
//      rl.question('Masukan Nomor HP anda : ', (noHP) => {
//           // 1. Cara Pertama Dari Saya
//           // fs.writeFileSync('data/contacts.json', JSON.stringify([
//           //      {
//           //           "nama": nama,
//           //           "noHP": noHP,
//           //      }
//           // ]))

//           // 2. Cara Kedua Dari Pak Sandhika Galih
//           const contact = {
//                nama: nama,
//                noHP: noHP,
//           };
//           const file = fs.readFileSync('data/contacts.json', 'utf8');
//           const contacts = JSON.parse(file);

//           contacts.push(contact);

//           fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

//           console.log('Terima kasih sudah memasukkan data.');

//           // console.log(`Terima Kasih ${nama}, Nomor HP anda ${noHP}.`);
//           rl.close();
//      })
// });