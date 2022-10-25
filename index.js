const express = require('express');
const cors = require('cors');
const app = express();
const Port = process.env.PORT || 5000;

app.use(cors())


const categories = require('./data/categories.json')

app.get('/', (req, res) => {
  res.send('Running API...')
})


app.get('/courses-categories', (req, res) => {
  res.send(categories)
})



app.listen(Port, (req, res) => {
  console.log(`Server listening on port ${Port}`)
})