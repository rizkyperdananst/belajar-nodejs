const fs = require('fs');
const http = require('http');
const port = 3000;

const renderHTML = (path, res) => {
     fs.readFile(path, (err, data) => {
          if(err) {
               res.writeHead(404);
               res.write('Error: file not found');
          } else {
               res.write(data);
          }
          res.end();
     })
}

// buat server http nya
server = http.createServer((req, res) => {
     res.writeHeader(200, { 'Content-Type': 'text/html' });

     const url = req.url;

     if(url === '/about') {
          renderHTML('./about.html', res);
     } else if(url === '/contact') {
          renderHTML('./contact.html', res);
     } else {
          // res.write('Hello World');
          renderHTML('./index.html', res);
          // res.end(); // untuk menandakan bahwa perintah di dalamnya sudah selesai.
     }
})

// menjalankan atau mendengearkan server nya
server.listen(port, () => {
     console.log(`Server is lintening on port ${port}`);
})