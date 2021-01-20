import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import Api from './Api'
import Navbar from './Navbar'
class App extends Component {
  state = {
    jobs : [
      {
        job: 'Progammer',
        salary: '50.000.000'
      },
      {
        job: 'Bakul Bakso',
        salary: '1.000.000'
      },
      {
        job: 'Bartender',
        salary: '25.000.000'
      },
      {
        job: 'Atlet',
        salary: '20.000.000'
      }
    ]
  }

  removeJob = (index) => {
    const {jobs} = this.state

    this.setState({
      jobs: jobs.filter((r, i) => {
        return i !== index
      })
    })
  }

  // HANDLER SUBMIT FORM
  handleSubmit = (jobs) => {
    const jobState = this.state.jobs
    this.setState({jobs: [...jobState, jobs] })
  }

  render () {
    const {jobs} = this.state

    return (
      <div className="container">
        <Navbar />
        <Table jobData={jobs} removeJob={this.removeJob} />
        <Form handleSubmit={this.handleSubmit} />
        <Api />
      </div>
    )
  }
}

export default App