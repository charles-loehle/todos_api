var db = require('../models')

// INDEX
exports.getTodos = (req, res) => {
  db.Todo.find()
    .then((todos) => {
      res.json(todos)
    })
    .catch((err) => {
      res.send(err)
    })
}

// CREATE
exports.createTodo = (req, res) => {
  db.Todo.create(req.body)
    .then((newTodo) => {
      res.status(201).json(newTodo)
    })
    .catch((err) => {
      res.send(err)
    })
}

// SHOW
exports.getTodo = (req, res) => {
  // get the id out of the url
  db.Todo.findById(req.params.todoId)
    // if it finds the todo call it foundTodo
    .then((foundTodo) => {
      // sends a response that is the parameter converted to a JSON string
      res.json(foundTodo)
    })
    .catch((err) => {
      res.send(err)
    })
}

// UPDATE
exports.updateTodo = (req, res) => {
  db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
    .then((todo) => {
      res.json(todo)
      console.log(req.body);
    })
    .catch((err) => {
      res.send(err)
    })
}

// DELETE
exports.deleteTodo = (req, res) => {
  // remove _id from the database that matches the todoId 
  db.Todo.remove({ _id: req.params.todoId })
    .then(() => {
      res.json({ message: 'We deleted it!' })
    })
    .catch((err) => {
      res.send(err)
    })
}

module.exports = exports