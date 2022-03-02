import React from "react";
import "./style.css";

export default function Register() {
  return (
    <div className="container">
      <h1>Register</h1>
      <form className="content">
        <label htmlFor="name">name</label>
        <input type="text" name="name" id="name" placeholder="name" />
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" placeholder="email" />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit" className="Register">
          Register
        </button>
      </form>
    </div>
  );
}
