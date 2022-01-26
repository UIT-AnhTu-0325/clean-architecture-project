import React from "react";
import { Navigate } from "react-router-dom";

/**
 * @author
 * @function Nav
 **/

export const Nav = (props) => {
  const signOut = async (e) => {
    await fetch("https://localhost:44304/api/SignOut", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    localStorage.removeItem("jwt");
    return <Navigate to="/signin" />;
  };
  const genNav = () => {
    if (localStorage.getItem("jwt") !== null) {
      return (
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="page"
              href="/Signin"
              onClick={signOut}
            >
              Sign out
            </a>
          </li>
        </ul>
      );
    }
    return (
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/Signin">
            Sign in
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/Signup">
            Sign up
          </a>
        </li>
      </ul>
    );
  };

  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Home
        </a>
        <div>{genNav()}</div>
      </div>
    </nav>
  );
};
