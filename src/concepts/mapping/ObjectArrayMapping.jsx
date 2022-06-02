import React from 'react';

function ObjectArrayMapping() {
  const arrayOfObject = [
    {
      name: 'apple',
      color: 'red',
    },
    {
      name: 'banana',
      color: 'yellow',
    },
    {
      name: 'orange',
      color: 'orange',
    },
    {
      name: 'pear',
      color: 'green',
    },
    {
      name: 'grape',
      color: 'purple',
    },
    {
      name: 'strawberry',
      color: 'red',
    },
    {
      name: 'kiwi',
      color: 'green',
    },
    {
      name: 'mango',
      color: 'yellow',
    },
    {
      name: 'watermelon',
      color: 'green',
    },
    {
      name: 'pineapple',
      color: 'yellow',
    },
    {
      name: 'peach',
      color: 'orange',
    },
    {
      name: 'coconut',
      color: 'yellow',
    },
    {
      name: 'avocado',
      color: 'green',
    },
    {
      name: 'cherry',
      color: 'red',
    },
    {
      name: 'papaya',
      color: 'green',
    },
  ];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
    }}
    >
      {arrayOfObject.map(({ name, color }) => (
        <div
          key={name}
          style={{
            border: '1px solid black',
            width: '10rem',
            padding: '1rem',
          }}
        >
          <h3>{name}</h3>
          <p>{color}</p>
        </div>
      ))}
    </div>
  );
}

export default ObjectArrayMapping;
