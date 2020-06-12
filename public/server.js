var express = require('express');
var app = express();
var multer = require('multer');
var cors = require('cors');

app.use(cors());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

var upload = multer({ storage: storage }).single('files');

app.post('/upload', function (req, res) {
    console.log(`post start`);
    console.log(upload);
    console.log(multer({ storage: storage }).single('fileses'));
    upload(req, res, function (err) {
        console.log(`upload start`);
        if (err instanceof multer.MulterError) {
            console.log(err);
            return res.status(500).json(err);
        } else if (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        console.log(`upload end`);
        return res.status(200).send(req.file);
    });
    console.log(`post end`);
});

app.get('/', function (req, res) {
    res.send('Express is excellent!')
});

app.listen(8000, () =>
    console.log(`App is listening on port 8000.`)
);