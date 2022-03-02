import React from "react";
import "./style.css";

export default function ReplySection({ name, date, content }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="reply-info">
            <span className="name">{name}</span>
            <span className="date">{date}</span>
          </div>
        </div>
        <hr />
        <div className="card-body">
          <p className="content">{content}</p>
        </div>
      </div>
    </>
  );
}
