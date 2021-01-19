import React, {Component} from 'react'

class Form extends Component {
  /*
  DECLARE CONTRUCT 
  */
  constructor(props) {
    super(props)

    this.initialState = {
      job: '',
      salary: ''
    }
  
    this.state = this.initialState
    this.state.error = {}
  }

  handleValidation() {
    let isValid = true
    let error = {}
    let state = this.state

    if (!state['job']) {
      isValid = false
      error['job'] = 'Field job is required !'
    }

    if (!state['salary']) {
      isValid = false
      error['salary'] = 'Field salary is required !'
    }

    this.setState({error: error})
    return isValid
  }

  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  // ACTION SUBMIT
  submitForm = () => {
    if (this.handleValidation()) {
      this.props.handleSubmit(this.state)
      this.setState(this.initialState)
    }
  }

  render() {
    const {job, salary} = this.state

    return (
      <form>
        <h4>- Form Simple Component</h4>
        <label htmlFor="name">Job</label>
        <input 
          name="job"
          type="text"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <small className="error">{this.state.error['job']}</small>
        <label htmlFor="salary">Salary</label>
        <input 
          name="salary"
          type="text"
          id="salary"
          value={salary}
          onChange={this.handleChange}
        />
        <small className="error">{this.state.error['salary']}</small>
        <br />
        <input 
          type="button"
          value="Save"
          onClick={this.submitForm}
        />
      </form>
    )
  }
}

export default Form