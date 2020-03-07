'use strict' ;

const express = require('express');
const port = 3000;

const app = express();
 

//memanggil css di public
app.use('/public',express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/about', function(req, res) {
    res.render('pages/about', {
        about: 'Halaman Tentang',
        content:`What is the "E" for? "Embedded?" Could be. How about "Effective,"`,
    });
});


app.get('/contact', function(req, res) {
    res.render('pages/contact', {
        name: 'Andhika arnes',
        phonenumber: '085716497573'
    });
});

app.get('/profile', function(req, res) {
    res.render('pages/profile', {
        name: 'Andhika arnes',
        kelas: 'X RPL',
        sekolah: 'SMK Jakarta pusat 1'
    });
});


app.listen(port, function() {
    console.log(`server listeningon port ${port}`);
});