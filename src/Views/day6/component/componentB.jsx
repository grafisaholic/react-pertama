import React, { useContext, Fragment } from 'react'
import { CountContext } from "../index";

function ComponentB() {
  const { countDispatch } = useContext(CountContext)
  
  return (
    <Fragment>
      <button onClick={() => countDispatch({ type: 'increment', value: 1 }) } className="btn btn-info mr-2">Increment From Component B</button>
        <button onClick={() => countDispatch({ type: 'decrement', value: 1 }) } className="btn btn-info mr-2">Decrement From Component B</button>
        <button onClick={() => countDispatch({ type: 'reset', value: 0 }) } className="btn btn-info mr-2">Reset</button>
    </Fragment>
  )
}

export default ComponentB