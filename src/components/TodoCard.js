import React from "react";
import Icon from "@mdi/react";
import { mdiPencil, mdiDelete } from "@mdi/js";
import "../styles/todoCard.css";

function TodoCard() {
  return (
    <div className="card">
      <p className="title">Title of TODO</p>
      <div className="urgency">
        <p>IMPORTANCE</p>
      </div>
      <p>DATE TODO</p>
      <div className="edit">
        <p className="edit-icon">
          <Icon path={mdiPencil} size={1} />
        </p>
        <p className="edit-icon">
          <Icon path={mdiDelete} size={1} />
        </p>
      </div>
    </div>
  );
}

export default TodoCard;
