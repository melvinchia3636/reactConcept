/* eslint-disable no-console */
import React, { useState } from 'react';

export default function UseState() {
  const [lovelyState, setLovelyState] = useState('LMAO');
  let lovelyVariable = 'LMAO';

  return (
    <div style={{
      marginTop: '1rem',
    }}
    >
      <p>
        This is a state:
        {' '}
        {lovelyState}
      </p>
      <button type="button" onClick={() => setLovelyState(Math.random())}>Change state</button>
      <p>
        This is a variable:
        {' '}
        {lovelyVariable}
      </p>
      <button
        type="button"
        onClick={() => {
          lovelyVariable = Math.random();
          console.log(lovelyVariable);
        }}
      >
        Change variable
      </button>
    </div>
  );
}
