$(document).ready(() => {
  // request "/api/todos"
  $.getJSON("/api/todos")
    .then(addTodos)

  $('#todoInput').keypress((event) => {
    if (event.which == 13) {
      createTodo()
    }
  })

  $('.list').on('click', 'li', (e) => {
    updateTodo($(e.target))
  })

  // put event listener on ul>span. if you put it on the li it won't work because they don't exist on the page yet
  $('.list').on('click', 'span', e => {
    // use e.target for arrow function because they don't have their own 'this'
    e.stopPropagation()
    removeTodo($(e.target).parent())
  })
})

function addTodos(todos) {
  todos.forEach(todo => {
    addTodo(todo)
  });
}

function addTodo(todo) {
  var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>')
  // add data id of mongodb's todo._id to jquery element newTodo
  newTodo.data('id', todo._id)
  newTodo.data('completed', todo.completed)
  if (todo.completed) {
    newTodo.addClass('done')
  }
  $(".list").append(newTodo)
}

function createTodo() {
  // get input from the form
  var userInput = $('#todoInput').val()
  // send POST request to the CREATE route "/api/todos"
  $.post('/api/todos', { name: userInput })
    .then((newTodo) => {
      addTodo(newTodo)
      $('#todoInput').val('')
    })
    .catch((err) => {
      console.log(err);
    })
}

function removeTodo(todo) {
  var clickedId = todo.data('id');
  var deleteUrl = '/api/todos/' + clickedId
  // console.log('CLICKED');
  $.ajax({
    method: 'DELETE',
    url: deleteUrl
  })
    .then(data => {
      todo.remove()
    })
    .catch(err => {
      console.log(err);
    })
}

// take whatever todo is clicked and call .data('completed') on it
function updateTodo(todo) {
  var updateUrl = '/api/todos/' + todo.data('id')
  var isDone = !todo.data('completed')
  var updateData = { completed: isDone }
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
  })
    .then((updatedTodo) => {
      todo.toggleClass('done')
      todo.data('completed', isDone)
    })
}