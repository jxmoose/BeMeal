//AWS S3 Upload files
const AWS = require('aws-sdk');
const fs = require('fs');
const session = require('express-session');
const { builtinModules } = require('module');

const ID = 'AKIAVQ5T6O24GUJ2BYV5';
const SECRET = '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';
const BUCKET_NAME = 'bemeal-images';

AWS.config.update({
  accessKeyId: ID,
  secretAccessKey: SECRET
});

var s3 = new AWS.S3();

const uploadFile = (fileName, image_id) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: image_id, // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

modules.exports = uploadFile;