import React, { useEffect, useRef } from "react";
import { ChatMessages } from "./ChatMessages";
import "./App.css";

export const ChatContainer = ({ newMsgs }) => {
  const messageEnd = useRef(null);
  const scrollToBottom = () => {
    messageEnd.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [newMsgs]);

  return (
    <div className="ChatMsg">
      <div className="messages">
        {newMsgs.map((chat, id) => (
          <ChatMessages
            key={id}
            chat={chat.chat}
            text={chat.text}
            time={chat.time}
          />
        ))}
        <div ref={messageEnd} />
      </div>
    </div>
  );
};
