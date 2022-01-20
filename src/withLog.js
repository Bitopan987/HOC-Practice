import React from 'react';
function withLog(Comp) {
  return class EnhancedComponent extends React.Component {
    state = {
      count: 9999,
    };
    componentDidMount() {
      console.log('Hey Component You are Mounted');
    }
    render() {
      return <Comp count={this.state.count} />;
    }
  };
}

export default withLog;
