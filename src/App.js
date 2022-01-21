import Followers from './Followers';
import Following from './Following';
import Spinner from './Spinner';
import './style/loader.css';
import Test from './Test';
import Test2 from './Test2';
import SuperHero from './SuperHero';
import { UserContext } from './context/UserContext';
import React from 'react';

console.log(UserContext, 'context');

class App extends React.Component {
  state = {
    username: 'Bitopan321',
    name: 'Bitopan',
    token: 'cfghhgsfgjhkwaehtgajieesf',
  };

  updateState = (username) => {
    this.setState({ username });
  };

  render() {
    return (
      <UserContext.Provider
        value={{ data: this.state, updateState: this.updateState }}
      >
        <Followers />
        <Following />
        <SuperHero>
          {(res) => {
            return <h1>{res}</h1>;
          }}
        </SuperHero>
      </UserContext.Provider>
    );
  }
}

export default App;
