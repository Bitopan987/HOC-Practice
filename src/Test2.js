import React from 'react';
import withLog from './withLog';

function Test2(props) {
  return <h2>Hello {props.count}</h2>;
}

export default withLog(Test2);
