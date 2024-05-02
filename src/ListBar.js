import { React, useState } from "react";
import "./App.css";
import { List } from "./List";
import TextField from "@mui/material/TextField";

export const ListBar = (props) => {
  const [showResults, setShowResults] = useState(false);
  const [inputText, setInputText] = useState("");

  const showList = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  return (
    <>
      <div className="title" onClick={() => setShowResults(!showResults)}>
        <p>{props.heading}</p>
        {showResults ? (
          <i className="bi bi-caret-up-fill"></i>
        ) : (
          <i className="bi bi-caret-down-fill"></i>
        )}
      </div>

      {showResults && (
        <>
          <div className="search">
            <TextField
              id="outlined-basic"
              className="search-bar"
              variant="outlined"
              fullWidth
              label="Search People"
              onChange={showList}
              value={inputText}
            />
          </div>

          <div className="people-list">
            <ul>
              {props.data
                .filter((el) => {
                  if (inputText === "") {
                    return el;
                  } else if (
                    el.text.toLowerCase().includes(inputText.toLowerCase())
                  ) {
                    return el;
                  }
                })
                .map((text) => (
                  <List key={text.id} text={text.text} />
                ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
