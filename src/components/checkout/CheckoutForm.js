
/* checkout was register*/
/* cart was login */ 

import React, { useState } from "react";

function CheckoutForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div>
        <button type="submit">Cart</button>
      </div>
    </form>
  );
}

export default CheckoutForm;
