import React, { Fragment, useContext } from 'react'
import { CountContext } from '../index'

export default function ComponentA() {
  const { countDispatch } = useContext(CountContext)
  
  return (
    <Fragment>
      <button onClick={() => countDispatch({ type: 'increment', value: 1 }) } className="btn btn-info mr-2">Increment From Component A</button>
        <button onClick={() => countDispatch({ type: 'decrement', value: 1 }) } className="btn btn-info mr-2">Decrement From Component A</button>
        <button onClick={() => countDispatch({ type: 'reset', value: 0 }) } className="btn btn-info mr-2">Reset</button>
    </Fragment>
  )
}
