import React, { useEffect, useState } from "react";
import "./App.css";
import { ChatContainer } from "./ChatContainer";
import { ChatFooter } from "./ChatFooter";

const chatData = [
  { chat: "right", text: "Hii Asmi..!!", time: "04:00" },
  { chat: "left", text: "Hii Dude..!!", time: "04:00" },
  { chat: "right", text: "Hii Asmi..!!", time: "04:00" },
  { chat: "left", text: "Hii Dude..!!", time: "04:00 " },
  { chat: "right", text: "Hii Asmi..!!", time: "04:00 " },
  { chat: "left", text: "Hii Dude..!!", time: "04:00 " },
];

export const RightContainer = () => {
  const [Right, setRight] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("chat");
    if (data) {
      setRight(JSON.parse(data));
    } else {
      localStorage.setItem("chat", JSON.stringify(chatData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(Right));
  }, [Right]);

  return (
    <div className="right-container">
      <ChatContainer newMsgs={Right} />
      <ChatFooter
        newMsg={(textMsg) => {
          setRight((demo) => [...demo, textMsg]);
        }}
      />
    </div>
  );
};
