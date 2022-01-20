import React from 'react';

class SuperHero extends React.Component {
  state = {
    username: 'Ayush',
  };
  render() {
    return <>{this.props.children(this.state.username)}</>;
  }
}

export default SuperHero;
