import React from "react";
import "./App.css";
import { MsgImage } from "./MsgImage";
import image2 from "../src/Images/image2.jpg";

export const ChatMessages = (props) => {
  return (
    <>
      {props.chat === "right" ? (
        <div className="MsgRight">
          <div className="con-Right">
            <div className="chatRight">{props.text}</div>
            <div className="timeRight">
              <small>{props.time}</small>
            </div>
          </div>
          <MsgImage />
        </div>
      ) : (
        <div className="MsgLeft">
          <img
            src={image2}
            className="img"
            alt="user2"
            style={{
              position: "relative",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          />
          <div className="con-Left">
            <div className="chatLeft">{props.text}</div>
            <div className="timeLeft">
              <small>{props.time}</small>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
