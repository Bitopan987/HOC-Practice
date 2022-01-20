function Card(props) {
  return (
    <li key={props.login}>
      <img
        src={props.avatar_url}
        alt="avatar"
        width="100px"
        style={{
          borderRadius: '50%',
          margin: '.5rem',
        }}
      />
    </li>
  );
}

export default Card;
