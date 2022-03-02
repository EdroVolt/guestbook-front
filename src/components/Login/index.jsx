import React from "react";
import "./style.css";

export default function Login() {
  return (
    <div className="container">
      <h1>Log in</h1>
      <form className="content">
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" placeholder="email" />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit" className="login">
          Login
        </button>
      </form>
    </div>
  );
}
