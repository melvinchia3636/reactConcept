import React from 'react';

function FlatArrayMapping() {
  const array = [
    'apple',
    'banana',
    'orange',
    'pear',
    'grape',
    'strawberry',
    'kiwi',
    'mango',
    'watermelon',
    'pineapple',
    'peach',
    'coconut',
    'avocado',
    'cherry',
    'papaya',
  ];

  return (
    <ol>
      {array.map((fruit) => <li key={fruit}>{fruit}</li>)}
    </ol>
  );
}

export default FlatArrayMapping;
