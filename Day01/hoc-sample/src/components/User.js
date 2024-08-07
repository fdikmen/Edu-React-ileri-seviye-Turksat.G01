import React from "react";
import HocLoader from "./HocLoader";

function User({ users,counter,arttir}) {
  console.log(users);
  return (
    <div style={{ width: "40%", float: "left" }}>
      <h1>Users</h1>
      <p>
          Counter : {counter}
          <button onClick={arttir(3420)}>Arttır</button>
      </p>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default HocLoader(User,"users");
