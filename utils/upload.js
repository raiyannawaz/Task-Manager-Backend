const multer = require('multer')
const path = require('path');
const cloudinary = require('../utils/cloudinary')

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//        ['jpeg', 'jpg', 'png', 'webp'].filter(format=>file.originalname.includes(format)).map(format=>file.originalname.replace(`.${format}`, '-')+ new Date().getTime()+`.${format}`)[0]
//     );
//   }, 
// })

const storage = multer.memoryStorage()

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp/
  const extname = allowedTypes.test(path.extname(file.originalname).toLocaleLowerCase())
  const mimetype = allowedTypes.test(file.mimetype)

  if (extname && mimetype) {
    cb(null, true)
  }
  else {
    new Error('Only images allowed')
  }
}

const upload = multer({ storage, fileFilter })

const uploadImage = (fileBuffer, folder) =>{
  return new Promise((resolve, reject)=>{
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (err, result) =>{
        if(err) return reject(err)
        resolve(result)
      }
    )
    stream.end(fileBuffer)
  })
}

module.exports = { upload, uploadImage }