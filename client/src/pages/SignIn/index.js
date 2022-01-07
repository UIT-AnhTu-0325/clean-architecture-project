import React, { useEffect, useState, SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

/**
 * @author
 * @function SignIn
 **/

export const SignIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://localhost:44304/api/SignIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const content = await response.json();
    if (content.hasOwnProperty("jwtString")) {
      localStorage.setItem("jwt", content["jwtString"]);
      window.location.reload();
      setRedirect(true);
    }
  };
  if (redirect) {
    return <Navigate to="/" />;
  }
  if (localStorage.getItem("jwt") !== null) {
    return <Navigate to="/" />;
  }
  return (
    <main class="form-signin">
      <form onSubmit={submit}>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </main>
  );
};
