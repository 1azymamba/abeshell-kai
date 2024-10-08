const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use('/upload', express.static('upload'));
const port = 3001;

// setting file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload');
    },
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);
        cb(null, `${file.originalname}`);
    }
});

const upload = multer({ dest: '../front/src/upload', storage });

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }
    console.log(req.file.originalname);
    return res.status(200).json({
        message: 'File uploaded successfully.',
        filename: req.file.originalname
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
