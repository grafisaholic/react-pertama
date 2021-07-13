import React, {useState} from 'react';
import axios from 'axios';

let dataLogin = {
  username: '',
  password: ''
}


function Login({ setToken }) {
  const [isError, setError] = useState(false)

  const checkUser = (e) => {
    e.preventDefault()

    axios.post(
      'http://localhost:9000/api/v1/auth/login',
      dataLogin
    ).then((result) => {
      let data = result.data;

      if (data.status != 200) {
        setError(true)
      }else {
        setError(false)

        setToken = data.token
      }
    }).catch(e => {
      console.log(e)
    })
  }

  // onchange value
  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    dataLogin[name] = value
  }

  return (
    <>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 justify-content-center align-items-center">
          {
            isError && (
                <div className="alert alert-danger mt-3 alert-dismissible " role="alert">
                  <strong className="mr-2">Warning !</strong>
                  Username / password is not valid !
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
            )
          }
        
          <center className="mt-3">
            <h1>LOGIN</h1>
          </center>
          <form onSubmit={checkUser}>
            <label htmlFor="username">Username</label>
            <input 
              name="username"
              type="text"
              onChange={handleChange}
              id="username"
              placeholder="Enter Username"
            />
            <label htmlFor="password">Password</label>
            <input 
              name="password"
              type="password"
              onChange={handleChange}
              id="password"
              placeholder="Enter Password"
            />
            <input 
              type="submit"
              value="Submit"
              className="pull-right"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login 