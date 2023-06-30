// console.log('Hallo Perdana');

const cetakNama = (nama) => {
     return `Nama saya ${nama}`;
}

const PI = 3.5

const mahasiswa = {
     nama: 'Rizky',
     umur: 20,
     jurusan: 'Teknik Informatika',
     cetakMhs: function() {
          return `Nama saya ${this.nama}, umur ${this.umur} tahun dan saya jurusan ${this.jurusan}.`;
     }
}

class Orang {
     constructor() {
          console.log('Ini adalah object dari class Orang');
     }
}

// Cara export Pertama
module.exports.cetakNama = cetakNama;
module.exports.PI = PI;
module.exports.mahasiswa = mahasiswa;
module.exports.Orang = Orang;
// export default cetakNama;

// Cara export Kedua
// module.exports = {
//      cetakNama: cetakNama,
//      PI: PI,
//      mahasiswa: mahasiswa,
//      Orang: Orang,
// }

// Cara export Ketiga
// module.exports = { cetakNama, PI, mahasiswa, Orang };