const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3200;

app.get('/start', (req, res) => {
    res.send('ok')
})

app.listen(PORT, () => {
  console.log(`project running on PORT ${PORT}`)  
})