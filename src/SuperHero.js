import React from 'react';

class SuperHero extends React.Component {
  state = {
    username: 'Ayush',
  };
  render() {
    return <h4>{this.props.children}</h4>;
  }
}

export default SuperHero;
