/*
LEARN COMPONENT STATE
*/

import React, {useState, useEffect} from 'react';
import useCounter from './useCounter';

function Day2() {
  // declare state
  const [state, setState] = useState({
    subscribe: false,
  });
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);

  // use custom hook
  const [like, handleLike, handleTripleLike] = useCounter(0);
  const [dislike, handleDislike] = useCounter(0);

  // handle subscribed
  const handleSubscribe = () => {
    setState({
      ...state,
      subscribe: !state.subscribe
    })
  };
  const handleCount = () => 
    setCount( prevCount => {
      return prevCount + 1
    });
  const handleToggle = () => setToggle(currentToggle => !currentToggle);

  /*
  INITIAL EFFECT DEPENDENCY
  */
    useEffect(() => {
      if (count > 0) {
        console.log('=> componentDidUpdate equivalent')
      }
    }, [count]);

    useEffect(() => {
      return (
        () => {
          console.log('ComponentWillUnmont Equivalent !')
        }
      )
    }, []);

  return (
    <div className="container">
      <div className="container" >
        <p>
          <button onClick={handleSubscribe }>Subscribe</button>
          <span>{JSON.stringify(state.subscribe)}</span>
        </p>

        <p>
          <button onClick={handleLike}>Like</button>
          <span>{like}</span>
        </p>

        <p>
          <button onClick={handleDislike}>Dislike</button>
          <span>{dislike}</span>
        </p>

        <p>
          <button onClick={handleTripleLike}>Tripple Like</button>
          <span>{like}</span>
        </p>
        <hr />

        <div className="layout">
          <h4>- Simple Use Effect</h4>

          <button onClick={handleToggle}> Toggle</button>
          {toggle &&
            <div className="container">
              <button onClick={handleCount}> Count</button>
              <span>{count}</span>
            </div>
          }
          
        </div>
      </div>
    </div>
  )
};

export default Day2;