const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/')
    },
    filename: function (req, file, cb) {
      const filename = file.originalname.split(' ').join('-')
      cb(null,`${filename}`)
    }
  })
  
const upload = multer({
    storage: storage
}).single('file')

module.exports ={ upload}