import React, { useCallback, useState, useMemo, useRef, useEffect } from 'react'
import { NavLink } from 'reactstrap';
import Button from './component/Button';
import Count from './component/Count'
import Title from './component/Title'

function ParentComponent() {
  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(5000)

  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0)

  const [timer, setTimer] = useState(0);
  const intervalRef = useRef()

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 100)
  }, [salary])

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  }

  const isEven = useMemo(() => {
    let i = 0;
    while( i < 4000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  }

  // interval using ref
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className='container'>
      <Title title="useCallback Hook" description="Render only component that need to rerender after action."/>
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
      <br />
      <small>But, using callback in the all time is not good idea. For information <NavLink href="https://kentcdodds.com/blog/usememo-and-usecallback">When to useMemo and useCallback</NavLink></small>

      <hr />
      <Title title="useMemo Hook" description="Rendering but not related to other components."/>
      <span className='text-danger'>{isEven ? 'Event' : 'Odd'}</span>
      <Count text="Increment One" count={counterOne} />
      <Button handleClick={incrementOne}>Increment One</Button>
      <Count text="Increment Two" count={counterTwo} />
      <Button handleClick={incrementTwo}>Increment Two</Button>

      <hr />
      <Title title="useRef Hook" description="Clearing in interval timer from an event handler. This function use to can hold mutable value similar to instancec properties"/>
      <Count text="Hook Interval" count={timer} />
      <Button handleClick={() => clearInterval(intervalRef.current)}>Clear Hook Interval</Button>
    </div>
  )
}

export default ParentComponent