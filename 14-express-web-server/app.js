const express = require('express')
const app = express()
const port = 3000

// Dibawah ini adalah contoh middleware, maksudnya req ini akan di jalankan sebagai middleware, maka req atau url di bawahnya gak akan berjalan, kecuali jika middleware ini diletakkan di paling bawah, jika di letakkan di paling bawah maka jika requestnya gak ada dia bakalan nampilin respond nya. 
// app.use('/', (req, res) => {
//      res.send('This Middleware on Express JS');
// })

app.get('/', (req, res) => {
//   res.send('Hello World!')
     // res.json({
     //      nama: "Rizky Perdana Nst",
     //      umur: 21,
     //      alamat: "Medan",
     // });
     res.sendFile('index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
//   res.send('Ini halaman about!');
     res.sendFile('about.html', { root: __dirname });
})

app.get('/contact', (req, res) => {
//   res.send('Ini halaman contact!');
     res.sendFile('contact.html', { root: __dirname });
});

app.get('/product/:id', (req, res) => {
     res.send(`Ini halaman product ${req.params.id}`);
})

// Middleware
app.use('/', (req, res) => {
     res.status(404);
     res.send('<h1>404 Not Found</h1>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// const fs = require('fs');
// const http = require('http');
// const port = 3000;

// const renderHTML = (path, res) => {
//      fs.readFile(path, (err, data) => {
//           if(err) {
//                res.writeHead(404);
//                res.write('Error: file not found');
//           } else {
//                res.write(data);
//           }
//           res.end();
//      })
// }

// // buat server http nya
// server = http.createServer((req, res) => {
//      res.writeHeader(200, { 'Content-Type': 'text/html' });

//      const url = req.url;

//      if(url === '/about') {
//           renderHTML('./about.html', res);
//      } else if(url === '/contact') {
//           renderHTML('./contact.html', res);
//      } else {
//           // res.write('Hello World');
//           renderHTML('./index.html', res);
//           // res.end(); // untuk menandakan bahwa perintah di dalamnya sudah selesai.
//      }
// })

// // menjalankan atau mendengearkan server nya
// server.listen(port, () => {
//      console.log(`Server is lintening on port ${port}`);
// })