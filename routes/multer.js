const multer = require('multer')
var path = require('path')
const crypto = require('crypto')                                   // it is used to give the random names to the files

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')                                   // yaha ke null ke aage ke code ko change krke ./public/uploads kardo. 
  },
  filename: function (req, file, cb) {
    const filename = crypto.randomBytes(20).toString('hex') + path.extname(file.originalname)    //is line ke code ko change krke yeh rakhna hai.
    cb(null, filename)                                             // null ke baad wale code ko change krke filename kr denge.
  }
})

const upload = multer({ storage: storage })

module.exports = upload