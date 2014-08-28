// CONFIGURATION ====================
// ==================================
// load the things we need
var express = require('express');
var app     = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the path for all public resources (css/js/images)
app.use(express.static(__dirname + '/public'));

// ROUTES ===========================
// ==================================
// use res.render to load up an ejs view file
// index/home page 
app.get('/', function(req, res) {
	res.render('pages/home');
});

// about page 
app.get('/about', function(req, res) {
	res.render('pages/about');
});

// contact page 
app.get('/contact', function(req, res) {
	res.render('pages/contact');
});

// START THE SERVER ================
// =================================
app.listen(8080);
console.log('8080 is the magic port!');