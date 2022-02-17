const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.model');
require('dotenv').config();
const error = require('./middlewares/error');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const { root } = require('./controllers/root');

const PORT = process.env.PORT || 3200;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ebytr-mern-challenge');

app.use(root);

app.use(error);

app.listen(PORT, () => {
  console.log(`project running on PORT ${PORT}`)  
})