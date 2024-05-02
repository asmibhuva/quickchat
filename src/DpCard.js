import React, { useContext } from "react";
import ToggleContext from "./ToggleContext";
import image1 from "../src/Images/image1.jpg";

export const DpCard = () => {
  const a = useContext(ToggleContext);
  const handleClick = () => {
    a.isActive(!a.active);
  };

  return (
    <div className="dp">
      <div className="dpImage">
        <img src={image1} alt="user" />
      </div>
      <div className="profile">
        <h2 className="profileName">
          Jiya Patel <i class="bi bi-gear" style={{ fontSize: "20px" }}></i>
        </h2>
        <h5 className="profileDescription">Lead UI/UX Designer</h5>
        <div className="toggle">
          <label className="switch">
            <input type="checkbox" checked={a.online} onChange={handleClick} />
            <span className="slider round"></span>
          </label>
          Active
        </div>
      </div>
    </div>
  );
};
