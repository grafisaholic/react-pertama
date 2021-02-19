import React from 'react';
import styled from '@emotion/styled';
import { add } from './action';
import './style.css';

const StyledTextInput = styled('input')({
  minHeight: 30,
  fontSize: 13,
  paddingLeft: 6,
  marginBottom: 30,
  borderRadius: 3,
  minWidth: 300,
  border: '1px solid #ccc'
});


function App() {
  return (
    <>
      <div className="app">
        <h1>TodoMvc - React Hook</h1>
        <StyledTextInput 
          placeholder="Add an item and hit 'enter'"
        />
      </div>
    </>
  )
};

export default App;