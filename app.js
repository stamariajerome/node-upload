//* =========
//  PACKAGES
//* =========
var express      = require('express'),
    bodyParser   = require('body-parser'),
    multer       = require('multer');

//* ========
//  HELPERS
//* ========
var helpers = require('./helpers');

//* ==============
//  CONFIGURATION
//* ==============
// custom file upload configruation
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function(req, file, cb) {
    //every file is converted to uuid
    file.originalname = helpers.uuid(file.originalname);
    cb(null, file.originalname + helpers.getFileExtension(file.mimetype));
  }
});
//if default storage is not avaiable use the custom storage.
var dest = 'public/uploads/' || storage;
//use dest || storage property
var upload = multer({storage: storage});
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var files = [];

app.get('/', function(req, res) {
  console.log(files);
  res.render('index', {files: files});
});

app.post('/', upload.any(), function(req, res) {
  req.files.forEach(function(file){
    files.push(file);
   });
  res.redirect('/');
});

app.listen('3000',function() {
  console.log('server started in port 3000');
});
