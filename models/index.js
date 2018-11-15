var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo_api');

// prevent callback hell
mongoose.Promise = Promise;

// use the Todo model from models/todo.js
module.exports.Todo = require("./todo");

