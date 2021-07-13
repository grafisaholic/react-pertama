
const { timeStamp } = require('console')
const fs = require('fs')
const path = require('path')

function TaskHandler() {
  this.list = (req,res,next) => {
    let query = req.query;

    fs.readFile(path.join(__dirname, '../dummy/todo.json'), (err, data) => {
      if (err) 
        res.send(err)

      var data = JSON.parse(data.toString())

      if (query.search && query.search != '') {
        data = data.filter((r) => {
          return r.title == query.search
        })
      }

      return res.json({
        status: 200,
        data: data
      })
    })
  }

  this.addTask = (req,res,next) => {
    let b = req.body;
    let dataAdd = {
      title: b.title,
      description: b.description
    }

    fs.readFile(path.join(__dirname, '../dummy/todo.json'), (err, data) => {
      if (err) 
        res.send(err)

      var data = JSON.parse(data.toString())
      data.push(dataAdd)

      // add task
      fs.writeFile(path.join(__dirname, '../dummy/todo.json'), JSON.stringify(data), (err, result) => {
        if (err)
          return res.send(err)
        
          
        return res.json({
          status: 200,
          message: 'Add new task successfull !',
          data: b
        })
      })
    })
  }

  this.removeTask = async (req,res,next) => {
    var b = req.body

    fs.readFile(path.join(__dirname, '../dummy/todo.json'), (err, data) => {
      if (err) 
        res.send(err)

      var data = JSON.parse(data.toString())
      
      // remove task
      data = data.filter((d) => {
        return d.title !== b.title
      })

      fs.writeFile(path.join(__dirname, '../dummy/todo.json'), JSON.stringify(data), (err, result) => {
        if (err)
          return res.send(err)
        
          
        return res.json({
          status: 200,
          message: 'Remove task successfull !'
        })
      })
    })
  }
}

module.exports = exports = TaskHandler;