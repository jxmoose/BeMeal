var express = require('express');
var router = express.Router();
var pool = require('../db');
var app = express();
var cors = require('cors');
const multer  = require('multer');
const fs = require('fs');
const AWS = require('aws-sdk');
const upload = multer({ dest: 'uploads/' })

const bucketName = 'bemeal-images';
const region = 'us-west-1';
const accessKeyId = 'AKIAVQ5T6O24PMS4FOQL';
const secretAccessKey = '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';

const s3 = new AWS.S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region:region
});
  
app.post("/uploadfile", upload.single('file'), (req, res) => {
    // console.log(req);
    console.log(req.file);
    if (req.file == null) {
        return res.status(400).json({ 'message': 'Please choose the file' })
     }

    var file = req.file
    // res.send(200);
    // res.sendStatus(201);

    const uploadImage=(file)=>{
        const fileStream 
                =fs.createReadStream(file.path);

        const params = {
            Bucket: bucketName,
            Key: file.originalname,
            Body: fileStream,
        };

        s3.upload(params, function (err, data) {
            console.log(data)
            if (err) {
                throw err
            }
            console.log(`File uploaded successfully. ${data.Location}`);
        });
    }
    uploadImage(file);
    return res.send(201)
})

module.exports = router;
