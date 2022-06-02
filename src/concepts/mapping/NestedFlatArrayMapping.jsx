/* eslint-disable react/no-array-index-key */
import React from 'react';

function NestedFlatArrayMapping() {
  const arrayOfArray = [
    ['apple', 'banana', 'orange'],
    ['pear', 'grape', 'strawberry'],
    ['kiwi', 'mango', 'watermelon'],
    ['pineapple', 'peach', 'coconut'],
    ['avocado', 'cherry', 'papaya'],
  ];

  return (
    <ol>
      {arrayOfArray.map((row, index) => (
        <li
          key={`row-${index}`}
          style={{
            marginBottom: '1rem',
          }}
        >
          <ul>
            {row.map((fruit) => <li key={fruit}>{fruit}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export default NestedFlatArrayMapping;
