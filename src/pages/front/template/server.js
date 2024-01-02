const express = require('express');
const fs = require('fs');
const cheerio = require('cheerio');
const app = express();
const port = 3000;
// app.use(express.json());
const multer = require('multer');
const upload = multer({dest: '/'});
app.get('/', (req, res) => {
    res.send('Hello, this is a basic Node.js server!');
});


app.get('/get', (req, res) => {
    const filePath = './src/pages/front/template/index.vue'; // 指定文件的路径

    fs.readFile(filePath, 'utf8', (err, data) => {
        let $html;
        if (err) {
            res.status(500).send('Error reading the file');
        } else {
            $html = cheerio.load(data);
            res.send(data); // 返回文件文本内容
        }
    });
});
app.post('/upload', upload.single('file'), (req, res) => {
    const filePath = "./src/pages/front/template/index.vue"
    const code = req.body.file
    fs.writeFile(filePath, code, 'utf8', function (err) {
        if (err) {
            res.status(500).send('Error updating file');
        } else {
            res.send('File updated');
        }
    });
});

app.listen(port, () => {
    console.log(`Local server listening at http://localhost:${port}`);
});