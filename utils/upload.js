const { extname } = require('path')
const { uploader } = require('./cloudinary')
const multer = require('multer')

// const storage = multer.diskStorage({
//   destination: function(req, file, cb){
//     cb(null, 'uploads/')
//   },
//   filename: function(req, file, cb){
//     let fileId = new Date().getTime()
//     let fileFormat = extname(file.originalname.toLowerCase())
//     let fileName = file.originalname.replace(`${fileFormat}`, '').slice(0, 12)
    
//     cb(null, `${fileName}-${fileId}${fileFormat}`)
//   }
// })

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) =>{
  let allowedFiles = /jpeg|jpg|png|webp/

  let fileExt = allowedFiles.test(extname(file.originalname.toLowerCase()))
  let fileMime = allowedFiles.test(file.mimetype.toLowerCase())

  if(!fileExt || !fileMime){
    cb(new Error('Invalid file'))
  }
  else{
    cb(null, true)
  }
}

const limits = { fileSize: 5 * 1024 * 1024 }

const upload = multer({storage, fileFilter, limits})

const uploadImage = async (file, folder) =>{
  // let result = await uploader.upload(file, {folder})
  // return result

  return await new Promise((resolve, reject)=>{
    uploader.upload_stream({folder}, 
      (error, result)=>{
        if(error) reject(error);
        else resolve(result)
      }).end(file)
  })
}

module.exports = { upload, uploadImage }