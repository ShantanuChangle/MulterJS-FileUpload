var express = require('express');
const upload = require('./multer')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// This code is for uploading single file at a time!

// For uploading a single file we use upload.single() method and
// for uploading multiple files we use uploads.array() method in index.js file and write multiple in input feild
router.post('/uploadFile', upload.array("image"), function(req, res, next) {
  res.send("File Uploaded!")
});

module.exports = router;
