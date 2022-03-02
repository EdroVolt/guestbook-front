import React from "react";
import ReplySection from "./ReplySection";
import "./style.css";

export default function MessageCard({ name, content, replys = [] }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="contols">
          <span>edit</span>
          <span>X</span>
        </div>
        <div className="message-info">
          <span className="name">{name}</span>
        </div>
      </div>
      <hr />
      <div className="card-body">
        <p className="content">{content}</p>
      </div>
      <div className="card-reply-section">
        <div className="controls">
          <input type="text" name="reply" id="reply" placeholder="reply" />
        </div>
        <div className="replays">
          {replys.map(({ name, date, content }) => {
            return <ReplySection name={name} content={content} />;
          })}
        </div>
      </div>
    </div>
  );
}
