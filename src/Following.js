import React from 'react';
import Spinner from './Spinner';
import withData from './withData';
import Card from './Card';
import B from './B';

function Following(props) {
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
        List of Following
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
      <B />
    </>
  );
}
export default withData(
  Following,
  'https://api.github.com/users/getify/following'
);
