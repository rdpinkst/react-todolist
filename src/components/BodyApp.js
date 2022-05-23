import React from "react";
import TodoSelect from "./TodoSelect";
import TodoDisplay from "./TodoDisplay";
import "../styles/bodyApp.css";

function BodyApp({
  clickBtn,
  style,
  show,
  getNameProj,
  projectOn,
  setProjectOn,
  setEdit,
  setShowEditInput,
}) {
  return (
    <div className="app-body" style={style}>
      <TodoSelect
        clickBtn={clickBtn}
        show={show}
        clickProj={getNameProj}
        setProjectOn={setProjectOn}
        projectOn={projectOn}
      />
      <TodoDisplay
        projectOn={projectOn}
        setEdit={setEdit}
        setShowEditInput={setShowEditInput}
      />
    </div>
  );
}

export default BodyApp;
