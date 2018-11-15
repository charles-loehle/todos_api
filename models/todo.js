var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name cannot be blank!'
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
// compile the Schema into a model
var Todo = mongoose.model('Todo', todoSchema)

//export the model
module.exports = Todo;