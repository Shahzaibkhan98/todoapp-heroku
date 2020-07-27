const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const Todo = require('./models/todo');

const app = express();
app.use(express.json());

// Connect Database
connectDB();

app.get('/api/todos', (req, res) => {
  Todo.find().then((todo) => {
    res.json(todo);
  });
});

app.post('/api/todos', (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
  });
  newTodo.save().then((todo) => res.json(todo));
});

app.delete('/api/todos/:id', (req, res) => {
  Todo.findByIdAndDelete(req.params.id).then(() => res.json({ remove: true }));
});

// Server static assets if in production
// Set static folder

app.use(express.static('build'));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
