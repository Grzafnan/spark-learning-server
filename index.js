const express = require('express');
const cors = require('cors');
const app = express();
const Port = process.env.PORT || 5000;

app.use(cors())


const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
  res.send('Running API...')
})


app.get('/courses-categories', (req, res) => {
  res.send(categories)
})

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if (id === '07') {
    res.send(courses);
  }
  else {
    const category_course = courses.filter(c => c.category_id === id);
    res.send(category_course);
  }
})

app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedCourse = courses.find(c => c._id === id);
  console.log(selectedCourse);
  res.send(selectedCourse);
});


app.listen(Port, (req, res) => {
  console.log(`Server listening on port ${Port}`)
})