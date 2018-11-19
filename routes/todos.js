var express = require('express')
var router = express.Router()
var db = require('../models')
var helpers = require('../helpers/todos')

router.route('/')
  // INDEX
  .get(helpers.getTodos)
  // CREATE
  .post(helpers.createTodo)

router.route('/:todoId')
  // SHOW
  .get(helpers.getTodo)
  // UPDATE
  .put(helpers.updateTodo)
  // DELETE
  .delete(helpers.deleteTodo)

module.exports = router
/**
 * THE ROUTES!
 * GET   /api/todos   List all todos
 * POST  /api/todos   Create new todo
 * GET   /api/todos/:todoid  Get a todo
 * PUT   /api/todos/:todoid  Update a todo
 * DELETE /api/todos/:todoid  Delete a todo 
 */