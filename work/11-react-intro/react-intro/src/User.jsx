function User({ username, onLogout }) {
  return (
    <div className="user-info">
      <p>User: {username}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default User;

