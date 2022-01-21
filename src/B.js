import { useContext } from 'react';
import { UserContext } from './context/UserContext';

function B() {
  let user = useContext(UserContext);
  return <h1>Hello {user.data.username}</h1>;
}

export default B;
