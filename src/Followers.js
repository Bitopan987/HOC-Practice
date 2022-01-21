import React from 'react';
import Spinner from './Spinner';
import withData from './withData';
import Card from './Card';
import A from './A';
import C from './C';

function Followers(props) {
  if (!props.data) {
    return <Spinner />;
  }
  return (
    <>
      <h3
        style={{
          fontSize: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        List of Followers
      </h3>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          flexWrap: 'wrap',
        }}
      >
        {props.data.map((follower) => {
          return <Card {...follower} />;
        })}
      </ul>
      <A />
      <C />
    </>
  );
}
export default withData(
  Followers,
  'https://api.github.com/users/getify/followers'
);
