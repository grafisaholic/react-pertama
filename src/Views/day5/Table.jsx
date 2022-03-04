import React from 'react';

function TableTask(props) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {props.task.map((r, i) => (
            <tr key={i}>
              <td>
                <b>{r.title}</b>
              </td>
              <td>{r.description}</td>
              <td>
                <button 
                  className="btn btn-xs btn-danger"
                  onClick={() => props.remove(r.title)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TableTask;