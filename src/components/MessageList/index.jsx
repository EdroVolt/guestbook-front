import React, { useState } from "react";
import MessageCard from "../MessageCard";
import "./style.css";

export default function MessageList() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="container">
      {messages.map(({ name, date, content, replys }) => {
        return (
          <MessageCard
            name={name}
            date={date}
            content={content}
            replys={replys}
          />
        );
      })}
    </div>
  );
}
