import React from "react";
import "./style.css";

export default function MessageCard({ name, date, content, replys }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="contols">
          <span>edit</span>
          <span>X</span>
        </div>
        <div className="message-info">
          <span className="name">{name}</span>
          <span className="date">{date}</span>
        </div>
      </div>
      <hr />
      <div className="card-body">
        <p className="content">{content}</p>
      </div>
      <hr />
      <div className="card-reply-section">
        <input type="text" name="reply" id="reply" placeholder="reply" />
        <div className="replays">{/* TODO: */}</div>
      </div>
    </div>
  );
}
