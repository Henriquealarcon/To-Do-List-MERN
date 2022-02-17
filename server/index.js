const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.model');
require('dotenv').config();
const error = require('./middlewares/error');

const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3200;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ebytr-mern-challenge')

app.post('/ebytr/register', async (req, res) => {
    console.log(req.body, 'reqbody')
    const {name, email, password} = req.body;
    try {
        await User.create({
            name,
            email,
            password
        })
        res.json({status: 'ok'})
    } catch(error) {
        console.log(error)
        res.json({error: error.message})
    }
})

app.post('/ebytr/login', async (req, res) => {
    console.log(req.body, 'reqbody')
    const { email, password} = req.body;
    try {
        await User.findOne({
            email,
            password
        })
        if(user){
            res.json({status: 'ok'})
        } else {
            res.json({status: error.message})
        }
    } catch(error) {
        console.log(error)
        res.json({error: error.message})
    }
})

app.use(error);

app.listen(PORT, () => {
  console.log(`project running on PORT ${PORT}`)  
})