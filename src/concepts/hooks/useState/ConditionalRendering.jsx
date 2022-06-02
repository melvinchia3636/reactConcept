import React, { useState } from 'react';

function ConditionalRendering() {
  const [show, setShow] = useState(true);

  return (
    <div style={{
      marginTop: '1rem',
    }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}
      >
        <button type="button" onClick={() => setShow(!show)}>Toggle</button>
        <p>
          Current state:
          {String(show)}
        </p>
      </div>

      <div style={{
        marginTop: '1rem',
      }}
      >
        {show ? <p>I&apos;M HERE NOW LMAO</p> : <p>I&apos;M NOT HERE NOW LMAO</p>}
        {show ? <p>Show when state is true</p> : <p>Not it is false</p>}
        {show && <p>Only show when state is true</p>}
      </div>
    </div>
  );
}

export default ConditionalRendering;
