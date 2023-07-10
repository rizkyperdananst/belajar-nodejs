const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
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
app.use(morgan('dev'));

// Built-in Middleware | => Artinya jika kita ingin menghubungkan file gambar, css, js kita maka harus mmebuat middleware static seperti dibawah ini
app.use(express.static('public'))

// Application Level Middleware |
app.use((req, res, next) => {
     console.log('Time: ', Date.now());
     next();
})

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

app.get('/contact', (req, res) => {
     res.render('contact', { 
          layout: 'layouts/main-layout',
          title: 'Halaman Contact',
     });
});

app.get('/product/:id', (req, res) => {
     res.send(`Ini halaman product ${req.params.id}`);
})

// Middleware
app.use((req, res) => {
     res.status(404);
     res.send('<h1>404 Not Found</h1>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})