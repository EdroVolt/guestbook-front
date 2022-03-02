import React, { useEffect, useState } from "react";
import MessageCard from "../MessageCard";
import "./style.css";

export default function MessageList() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8080/messages", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setMessages(data.messages);
    })();
  }, []);

  return (
    <div className="container">
      {messages.map(({ name, content, replys }) => {
        return <MessageCard name={name} content={content} replys={replys} />;
      })}
    </div>
  );
}
