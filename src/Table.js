import React from 'react'

/*
DECLARE SIMPLE COMPONENT
*/
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Job</th>
        <th>Salary</th>
        <th>#</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.jobData.map((r, index) => {
    return (
      <tr key={index}>
        <td>{r.job}</td>
        <td>{r.salary}</td>
        <td>
          <button onClick={() => props.removeJob(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return (
    <tbody>
      {rows}
    </tbody>
  )
}

const Table = (props) => {
  // GET ARRAY FROM APP COMPONENT
  const {jobData, removeJob} = props

  return (
    <div className="container">
      <h4>- Component Table</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jonathan</td>
            <td>Progammer</td>
          </tr>
          <tr>
            <td>Cristie</td>
            <td>Bakul Bakso</td>
          </tr>
          <tr>
            <td>Bambang</td>
            <td>Bantender</td>
          </tr>
        </tbody>
      </table>

      <h4>- Component Table With Simple Component</h4>
      <table>
        <TableHeader />
        <TableBody jobData={jobData} removeJob={removeJob} />
      </table>
    </div>
  )
}

export default Table