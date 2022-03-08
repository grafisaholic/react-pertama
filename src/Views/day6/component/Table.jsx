import React from 'react'
import { Table } from 'reactstrap'

function TableDifferent() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Scenario</th>
          <th>useState</th>
          <th>useReducer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>Type of state</b>
          </td>
          <td>Number, String, Boolean</td>
          <td>Object or Array</td>
        </tr>
        <tr>
          <td>
            <b>Number of state transition</b>
          </td>
          <td>One or Two</td>
          <td>To Many</td>
        </tr>
        <tr>
          <td>
            <b>Related state transition ?</b>
          </td>
          <td>No</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>
            <b>Bussines Logic</b>
          </td>
          <td>No bussines logic</td>
          <td>Complex bussines logic</td>
        </tr>
        <tr>
          <td>
            <b>Local vs Global</b>
          </td>
          <td>Local</td>
          <td>Global</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableDifferent