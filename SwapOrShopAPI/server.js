const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 4020
const routes = require('./routes');

app.use(fileUpload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Final Project</h1>')
});

app.use('/api/v1/fits', routes.fits);
app.use('/api/v1/soss', routes.soss);
app.use('/api/v1/users', routes.users);
app.use('/api/v1/auth', routes.auth);

app.post('/upload', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const file = req.files.file;
  
    file.mv(`${__dirname}/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
  
      

      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
