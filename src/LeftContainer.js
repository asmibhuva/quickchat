import React from "react";
import "./App.css";
import { DpCard } from "./DpCard";
import { PeopleList } from "./PeopleList";

export const LeftContainer = () => {
  return (
    <div className="left-container">
      <div className="title-logo">
        <h2>
          <i
            className="bi bi-chat-dots-fill"
            style={{ color: "DodgerBlue", fontSize: "2rem" }}
          ></i>
          &nbsp;QuickChat
        </h2>
      </div>
      <DpCard />
      <PeopleList />
    </div>
  );
};
