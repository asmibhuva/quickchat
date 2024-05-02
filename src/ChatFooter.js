import React, { useState } from "react";

const UserMsg = (textMsg) => {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();

  return {
    chat: "right",
    text: textMsg,
    time: time,
  };
};
export const ChatFooter = ({ newMsg }) => {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    newMsg(UserMsg(message));
    setMessage("");
  };

  return (
    <>
      <div className="mainFooter">
        <div className="chat-footer">
          <i className="bi bi-paperclip"></i>
          <div className="text-field">
            <input
              type="text"
              className="text_input"
              placeholder="Enter your message here"
              onChange={(en) => {
                const { value } = en.target;
                setMessage(value);
              }}
              value={message}
            />

            <i
              className="bi bi-emoji-smile-fill"
              style={{
                position: "absolute",
                top: "30px",
                right: "130px",
              }}
            ></i>
          </div>

          <button className="btn" onClick={handleClick}>
            Send
            <i className="bi bi-send-fill"></i>
          </button>
        </div>
      </div>
    </>
  );
};
