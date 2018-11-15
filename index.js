var express = require('express'),
  port = 3000,
  app = express()

app.get('/', (req, res) => {
  res.send("{ data: 123456789 }")
})

app.get('/happy', (req, res) => {
  res.send("I AM HAPPY!")
})

app.listen(port, () => {
  console.log("APP IS RUNNING ON PORT 3000");
})