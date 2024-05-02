import React, { useContext } from "react";
import image1 from "../src/Images/image1.jpg";
import ToggleContext from "./ToggleContext";

export const MsgImage = () => {
  const b = useContext(ToggleContext);

  return (
    <div>
      <img src={image1} className="img" alt="user" />
      {b.active ? <span className="online-user">●</span> : null}
    </div>
  );
};
