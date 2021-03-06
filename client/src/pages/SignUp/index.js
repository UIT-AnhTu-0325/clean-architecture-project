import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * @author
 * @function SignUp
 **/

export const SignUp = (props) => {
  return (
    <main class="form-signin">
      <form>
        <h1 class="h3 mb-3 fw-normal">Sign up</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
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
