var express = require('express'),
  port = 3000,
  app = express(),
  //Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
  bodyParser = require('body-parser')

var todoRoutes = require('./routes/todos')

// allows us to access the request body as req.body in a POST or PUT request
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('HELLO FROM THE ROOT ROUTE')
})

// prefix all routes with '/api/todos'
app.use('/api/todos', todoRoutes)

app.listen(port, () => {
  console.log("APP IS RUNNING ON PORT 3000");
})
/**
 * THE ROUTES!
 * GET   /api/todos   List all todos
 * POST  /api/todos   Create new todo
 * GET   /api/todo/:todoid  Get a todo
 * PUT   /api/todo/:todoid  Update a todo
 * DELETE /api/todo/:todoid  Delete a todo 
 */