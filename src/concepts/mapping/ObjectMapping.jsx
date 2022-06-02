import React from 'react';

function ObjectMapping() {
  const objectOfMembers = {
    'Melvin Chia': {
      age: '16',
      lovedColor: 'yellow',
    },
    Jiahuiiiii: {
      age: '15',
      lovedColor: 'green',
    },
    Henry: {
      age: '15',
      lovedColor: 'blue',
    },
    YiChang: {
      age: '15',
      lovedColor: 'red',
    },
    ZhaoDong: {
      age: '15',
      lovedColor: 'purple',
    },
  };

  return (
    <table style={{
      borderCollapse: 'collapse',
      borderSpacing: '0',
      marginTop: '1rem',
    }}
    >
      <thead style={{
        border: '1px solid black',
      }}
      >
        <tr>
          <th>Name</th>
          <th style={{
            padding: '0.5rem',
          }}
          >
            Age

          </th>
          <th>Loved Color</th>
        </tr>
      </thead>
      {Object.entries(objectOfMembers).map(([name, { age, lovedColor }]) => (
        <tr
          key={name}
          style={{
            border: '1px solid black',
            width: '10rem',
            padding: '1rem',
          }}
        >
          {[name, age, lovedColor].map((item, index) => (
            <td
              key={item}
              width="20%"
              style={{
                padding: '0.5rem',
                textAlign: index === 0 ? 'left' : 'center',
                color: index === 2 ? lovedColor : 'black',
              }}
            >
              {item}

            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}

export default ObjectMapping;
