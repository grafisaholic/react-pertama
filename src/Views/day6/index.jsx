import React, { useReducer, Fragment, createContext } from 'react'

import './style.css'
import ComponentA from './component/componentA';
import ComponentB from './component/componentB';

// declare useContext
export const CountContext = createContext()


const initialState = {
  firstCounter : 0
}

const CounterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter : state.firstCounter + action.value };
    case 'decrement':
      return { ...state, firstCounter : state.firstCounter - action.value }
    case 'reset':
      return { ...state, firstCounter : action.value }
    default:
      return state;
  }
}

export default function ConterOne() {
  const [count, dispatch]  = useReducer(CounterReducer, initialState)
  const [countTwo, dispatchTwo]  = useReducer(CounterReducer, initialState)
  const [countThree, dispatchThree]  = useReducer(CounterReducer, initialState)

  return (
    <CountContext.Provider 
      value={{ countState: countThree, countDispatch: dispatchThree }}
    >
      <div className='container'>
        <h3 className={`mb-3 title`}> Single useReducer</h3>

        <div> 
          <h5>
            Count  {count.firstCounter}
          </h5>
        </div>
        <button onClick={() => dispatch({ type: 'increment', value: 1 }) } className="btn btn-info mr-2">Increment</button>
        <button onClick={() => dispatch({ type: 'decrement', value: 1 }) } className="btn btn-info mr-2">Decrement</button>
        <button onClick={() => dispatch({ type: 'reset', value: initialState.firstCounter }) } className="btn btn-info mr-2">Reset</button>
        
        <div> 
          <h5>
            Count {countTwo.firstCounter}
          </h5>
        </div>
        <button onClick={() => dispatchTwo({ type: 'increment', value: 5 }) } className="btn btn-info mr-2">Increment 5</button>
        <button onClick={() => dispatchTwo({ type: 'decrement', value: 5 }) } className="btn btn-info mr-2">Decrement 5</button>
        <button onClick={() => dispatchTwo({ type: 'reset', value: initialState.firstCounter }) } className="btn btn-info mr-2">Reset</button>
      </div>

      <div className='container mt-5'>
        <h3 className={`mb-3 title`}>useReducer With useContext</h3>

        <div>
          <h5>Count {countThree.firstCounter}</h5>
        </div>


        <ComponentA />
        <br />
        <ComponentB />
      </div>
    </CountContext.Provider>
  )
}
