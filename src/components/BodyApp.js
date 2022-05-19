import React, { useState } from "react";
import TodoSelect from "./TodoSelect";
import TodoDisplay from "./TodoDisplay";
import "../styles/bodyApp.css";

function BodyApp({ clickBtn, style, show, getNameProj, projectOn }) {
  
  return (
    <div className="app-body" style={style}>
      <TodoSelect clickBtn={clickBtn} show={show} clickProj={getNameProj} />
      <TodoDisplay projectOn={projectOn}  />
    </div>
  );
}

export default BodyApp;
