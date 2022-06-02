/* eslint-disable react/prop-types */
import React from 'react';

export default function FunctionalComponent({ name }) {
  return (
    <nav>
      <p>
        {name}
        {' '}
        is cool AF!
      </p>
    </nav>
  );
}
