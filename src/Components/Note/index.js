import React from "react";

import "./style.css";

function Note(props) {
  return (
    <div onClick={props.onClick} className="Note">
      <h3>{props.content.title}</h3>
      <p>{props.content.content}</p>
    </div>
  );
}

export default Note;
