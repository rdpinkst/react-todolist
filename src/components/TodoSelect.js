import React from "react";
import Icon from "@mdi/react";
import { mdiHome, mdiCalendarToday, mdiFolder } from "@mdi/js";
import "../styles/todoSelect.css";

function TodoSelect() {
  return (
    <div className="select-todo">
      <h3 className="selection">
        <span>
          <Icon path={mdiHome} size={1} />
        </span>{" "}
        HOME
      </h3>
      <h3 className="selection">
        <span>
          <Icon path={mdiCalendarToday} size={1} />
        </span>{" "}
        TODAY
      </h3>
      <h3 className="selection">
        <span>
          <Icon path={mdiFolder} size={1} />
        </span>{" "}
        PROJECTS
      </h3>
      <div className="position-button">
        <button className="add">ADD TODO/PROJECT</button>
      </div>
    </div>
  );
}

export default TodoSelect;
