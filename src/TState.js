import React, { useState } from "react";
import ToggleContext from "./ToggleContext";

export const TState = (props) => {
  const [active, isActive] = useState(false);

  return (
    <ToggleContext.Provider value={{ active, isActive }}>
      {props.children}
    </ToggleContext.Provider>
  );
};
