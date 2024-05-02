import React from "react";
import image2 from "./Images/image2.jpg";
import "./App.css";

export const List = (props) => {
  return (
    <li className="list">
      <div className="users">
        <div className="users_img">
          <div className="logo_img">
            <img src={image2} alt="userImg" className="userImage" />
          </div>
          <div className="name">{props.text}</div>
        </div>
      </div>
    </li>
  );
};
