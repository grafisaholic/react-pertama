import React, {useState} from 'react';

function useCounter() {
  const [state, setState] = useState(0);
  const handleState = () => {
    setState(currentState => currentState + 1);
  };

  // tripple like
  const handleTripleLike = () => {
    handleState();
    handleState();
    handleState();
  };

  return [
    state,
    handleState,
    handleTripleLike
  ];
};

export default useCounter;