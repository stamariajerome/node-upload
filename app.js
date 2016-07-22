//* =========
//  PACKAGES
//* =========
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

//* ========
//  HELPERS
//* ========
var helper = require('../helpers');



var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    console.dir(req);
    console.dir(file);
    console.dir(cb);
    cb(null, '/public/uploads');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname + helper.getFileExntesion(file.mimetype));
  }
});

// file upload destination
var upload = multer({dest: 'public/uploads/'});

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


var files = [];

app.get('/', function(req, res) {
  console.log(files);
  res.render('index', {files: files});
});

//TODO come-up with a woraround renamign the  filename before storing
// there are multiple types upload.single, upload.array, etc.
app.post('/', upload.any(), function(req, res) {
  req.files.forEach(function(file){
    file.filename = file.originalname;
    files.push(file);
   });
  res.redirect('/');
});

app.listen('3000',function() {
  console.log('server started in port 3000');
});
