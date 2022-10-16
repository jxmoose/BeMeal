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
const accessKeyId = 'AKIAVQ5T6O24GUJ2BYV5';
const secretAccessKey = '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';

const s3 = new AWS.S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region:region
});

router.post("/uploadfile", upload.single('file'), (req, res) => {
    // console.log(req);
    //console.log(req.file);
    console.log(req);
    if (req.file == null) {
        return res.status(400).json({ 'message': 'Please choose the file' })
     }

    var file = req.file
    // res.send(200);
    // res.sendStatus(201);

    const uploadImage=(file)=>{
        const fileStream = fs.createReadStream(file.path);

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
            const q = pool.query("INSERT INTO images VALUES ($1, $2)", [username, data.Location])
        });
    }
    uploadImage(file);
    return res.send(201)
})

router.get("/retrievefiles", function(req, res){
    let username = req.body.username;
    const retrieve_images = pool.query("SELECT location FROM images WHERE username = $1", [username], function(error, results){
        output = []
        if (error) throw error;
        // If the account exists
        if (results.rows.length > 0) {
          for(let i = 0; i < results.rows.length; i++) {
            var params = { Bucket: config.bucket, Key: req.params.imageId };
            s3.getObject(params, function(err, data) {
            output.push(data)
            });
          }
          res.send({output});
        }
      });
})

module.exports = router;
