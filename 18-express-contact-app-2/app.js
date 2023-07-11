const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact, addContact, cekDuplikat } = require('./utils/contacts');
const { body, validationResult, check } = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

// Untuk membuat flash message download package dibawah ini :
// npm install express-session
// npm install cookie-parser
// npm install connect-flash
 
const app = express()
const port = 3000

// Dibawah ini adalah contoh middleware, maksudnya req ini akan di jalankan sebagai middleware, maka req atau url di bawahnya gak akan berjalan, kecuali jika middleware ini diletakkan di paling bawah, jika di letakkan di paling bawah maka jika requestnya gak ada dia bakalan nampilin respond nya. 
// app.use('/', (req, res) => {
//      res.send('This Middleware on Express JS');
// })

// gunakan view engine ejs / yang lain
app.set('view engine', 'ejs');

// Third-party Middleware
app.use(expressLayouts);

// Built-in Middleware | => Artinya jika kita ingin menghubungkan file gambar, css, js kita maka harus mmebuat middleware static seperti dibawah ini
app.use(express.static('public'))

// middleware dibawah ini harus dibuat, karna data yang dikirim dari form request harus di parsing dulu dengan menambahkan middleware di bawah ini.
app.use(express.urlencoded({ extended: true }));

// konfigurasi
app.use(cookieParser('secret'));
app.use(
     session({
          cookie: { maxAge: 6000 },
          secret: 'secret',
          resave: true,
          saveUninitialized: true,
     })
)
app.use(flash());

app.get('/', (req, res) => {
     const mahasiswa = [
          {
               nama: 'Rizky Perdana Nst',
               email: 'rizkyperdananst@gmail.com',
          },
          {
               nama: 'M. Kaja',
               email: 'mkaja@gmail.com',
          },
          {
               nama: 'Joni Munte',
               email: 'jonimunte@gmail.com',
          },
     ]

     res.render('index', { 
          nama: 'Rizky Perdana Nst', 
          title: 'Halaman Home', 
          mahasiswa,
          layout: 'layouts/main-layout',
      });
})

app.get('/about', (req, res) => {
     res.render('about', { 
          layout: 'layouts/main-layout',
          title: 'Halaman About',
     });
})

// Halama nampilin contact
app.get('/contact', (req, res) => {
     const contacts = loadContact();

     res.render('contact', { 
          layout: 'layouts/main-layout',
          title: 'Halaman Contact',
          contacts,
          msg: req.flash('msg'),
     });
});

// Halaman form tambah data contact
app.get('/contact/add', (req, res) => {
     res.render('add-contact', {
          title: 'Form Tambah Data Contact',
          layout: 'layouts/main-layout',
     });
});

// Halaman proses tambah data contact
app.post('/contact', [
     body('nama').custom((value) => {
          const duplikat = cekDuplikat(value);
          if(duplikat) {
               throw new Error('Nama contact sudah digunakan!'); // throw new error ini sama kek return false, tapi ini dia bisa sambil ngirim pesan error
          }
          return true
     }),
     check('email', 'Email tidak valid!').isEmail(),
     check('nohp', 'No HP tidak valid!').isMobilePhone('id-ID'),
], (req, res) => {
     const errors = validationResult(req);
     if(!errors.isEmpty()) {
          // return res.status(400).json({ errors: errors.array() });
          res.render('add-contact', {
               title: 'Form Tambah Data Contact',
               layout: 'layouts/main-layout',
               errors: errors.array(),
          });  
     } else {
          addContact(req.body);
          // kirimkan flash message
          req.flash('msg', 'Data contact berhasil ditambahkan..');
          res.redirect('/contact');
     }
          
     // console.log(req.body);
     // res.send('Data berhasil dikirim!');
     
});


// Halaman detail contact
app.get('/contact/:nama', (req, res) => {
     const contact = findContact(req.params.nama);

     res.render('detail', { 
          layout: 'layouts/main-layout',
          title: 'Halaman Detail',
          contact,
     });
});

// Middleware
app.use((req, res) => {
     res.status(404);
     res.send('<h1>404 Not Found</h1>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})