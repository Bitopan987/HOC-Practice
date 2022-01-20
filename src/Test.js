import React from 'react';
import withLog from './withLog';

function Test(props) {
  return <h2>Hello {props.count}</h2>;
}

export default withLog(Test);
