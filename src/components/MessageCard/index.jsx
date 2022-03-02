import React from "react";
import "./style.css";

export default function MessageCard() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="contols">
          <span>edit</span>
          <span>X</span>
        </div>
        <div className="message-info">
          <span className="name">Ahmed</span>
          <span className="date">2/3/2022</span>
        </div>
      </div>
      <hr />
      <div className="card-body">
        <p className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          quas aut reprehenderit cumque non. Aperiam aliquam ea explicabo minima
          quasi voluptatum harum nam sit amet dignissimos, animi debitis quos
          quod.
        </p>
      </div>
      <hr />
      <div className="card-reply-section">
        <input type="text" name="reply" id="reply" placeholder="reply" />
        <div className="replays">{/* TODO: */}</div>
      </div>
    </div>
  );
}
