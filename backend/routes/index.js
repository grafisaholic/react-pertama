const app = require('express').Router()

const TodoHandler = require('./todo'), Todo = new TodoHandler();
const AuthHandler = require('./auth'), Auth = new AuthHandler();
  
app.get('/', (req,res,next) => {
  res.json({
    message: 'Welcome to simple api for reactjs simple apps'
  })
})

app.post('/auth/login', Auth.checkData);

app.get('/todo/list', Todo.list)
app.post('/todo/create', Todo.addTask)
app.post('/todo/remove', Todo.removeTask)

module.exports = exports = app