import React from "react";

export default function ReplySection({ name, date, content }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="name">{name}</span>
        <span className="date">{date}</span>
      </div>
      <div className="card-body">
        <p className="content">{content}</p>
      </div>
    </div>
  );
}
