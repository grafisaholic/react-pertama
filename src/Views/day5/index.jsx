import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Table from "./Table";

const endpoint = 'http://localhost:9000/api/v1/todo/list';
const taskList = []
const queryFilter = {}
const todo = {
  title: '',
  description: ''
}

function App() {
  const [task, setTask] = useState(taskList);
  const [newTask, setNewTask] = useState([])
  const [filter, setFilter] = useState(queryFilter)

  useEffect(() => {
    const fetchTodo = async () => {
      let param = Object.entries(filter).map(([key, val]) => `${key}=${val}`).join('&')
  
      try {
        let request = await fetch(`${endpoint}?${param}`)
        let result = await request.json();
        
        setTask(result.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchTodo()
  }, [newTask, filter])

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(
      'http://localhost:9000/api/v1/todo/create',
      todo
    ).then((result) => {
      let data = result.data

      setNewTask(data)
    }).catch(e => { 
      console.log(e)
    })
  }

  // remove
  const removeTask = async (data) => {
    let c = window.confirm('Are you sure ? ')

    if (c) {
      let dataToSend = {
        title: data
      }
  
      axios.post(
        'http://localhost:9000/api/v1/todo/remove',
        dataToSend
      ).then((result) => {
        let data = result.data
  
        setNewTask(data)
      }).catch(e => { 
        console.log(e)
      })
    }
  }

  // handle change
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    todo[name] = value
  }

  const handleSearch = async (e) => {
    let title = e.target.value;

    setFilter({
      search: title
    })
  }

  return (
    <>
      <div className="row">
        <div className="col-md-4 ml-3">
          <h1>TodoMvc - React Hook</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Task</label>
            <input 
              name="title"
              type="text"
              id="title"
              onChange={handleChange}
              placeholder="Enter task list"
            />
            <label htmlFor="name">Description</label>
            <input 
              name="description"
              type="text"
              id="description"
              onChange={handleChange}
              placeholder="Enter description of task"
            />
            <input 
              type="submit"
              value="Save"
            />
          </form>

        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-8">
              <h1>Task List</h1>
            </div>
            <div className="col-md-4 mt-4" >
              <input type="text" onChange={handleSearch} className="pull-right " placeholder="Enter title"/>
            </div>
          </div>
          <Table 
            task={task} 
            remove={removeTask}
          />
        </div>
      </div>
    </>
  )
};

export default App;