'use strict'

const express = require('express')
const router = express.Router()
const multer = require('multer')
const cors = require('cors')
const fsExtra = require('fs-extra')
const PDFImage = require('pdf-image').PDFImage

router.use(cors())

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './src/public/pitchfolder'),
  filename: (req, file, cb) => cb(null, file.originalname)
})

const upload = multer({ storage: storage }).single('file')

router.post('/', async (req, res, next) => {

    // Empty pitchfolder
    await fsExtra.emptyDir('./src/public/pitchfolder')
    
    // Upload PDF
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).send({ uploadResponse:'An error occured while uploading '+ req.file.name + ' :(' })
        } else if (err) {
            return res.status(500).send({ uploadResponse:'An error occured while uploading '+ req.file.name + ' :(' })
        }
        // Convert pdf pages to images
        const pdfImage = new PDFImage('./src/public/pitchfolder/'+ req.file.originalname)
        pdfImage.convertFile().then( (imagePaths) => {

            //Slice paths
            const slicedPaths = imagePaths.map( (imagepath) => imagepath.slice(10))
            return res.status(200).send({ uploadResponse:'Success!', images: slicedPaths })
        })
    })
})

module.exports = router
