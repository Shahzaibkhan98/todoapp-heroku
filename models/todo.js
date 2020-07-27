const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const todoSchema = new Schema({
  title: {
    type: String,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

module.exports = Todo = mongoose.model('todo', todoSchema);

// var User = mongoose.model('users', UserSchema);
// module.exports = { User };
