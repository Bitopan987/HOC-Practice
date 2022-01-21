import React from 'react';
import { UserContext } from './context/UserContext';

class C extends React.Component {
  static contextType = UserContext;
  render() {
    // return <h3>Hello {this.context.username}</h3>;
    return (
      <UserContext.Consumer>
        {(props) => (
          <h5
            onClick={() => {
              props.updateState('Onkar');
            }}
          >
            Helloo {props.data.username}
          </h5>
        )}
      </UserContext.Consumer>
    );
  }
}

export default C;
