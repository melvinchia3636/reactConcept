/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class ClassComponent extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        Eww...
        {' '}
        {name}
        {' '}
        is disgusting!
      </div>
    );
  }
}
