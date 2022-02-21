import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signinAction } from "../../actions/auth.action";

/**
 * @author
 * @function Nav
 **/

export const Nav = (props) => {
  const state_isLogin = useSelector((state) => state.Auth.isLogin);

  const dispatch = useDispatch();

  const signOut = async (e) => {
    dispatch(signinAction());
    return <Navigate to="/signin" />;
  };
  const genNav = () => {
    if (state_isLogin) {
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
