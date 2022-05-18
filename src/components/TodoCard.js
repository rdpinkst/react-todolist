import React, { useState, useEffect } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase"
import Icon from "@mdi/react";
import { mdiPencil, mdiDelete } from "@mdi/js";
import "../styles/todoCard.css";


function TodoCard({ todo, date, urgency, id }) {

  const [delID, setDelID] = useState("");

  function deleteId(e){
    setDelID(e.currentTarget.parentNode.id); 
  }

  async function deleteItem(item) {
    const docDelete = doc(db, "tasks", item)
      await deleteDoc(docDelete)
  }

  useEffect(() => {
    if(delID){
      deleteItem(delID);
      setDelID("");
    }
  }, [delID])

  return (
    <div className="card">
      <p className="title">{todo}</p>
      <div className="urgency">
        <p>{urgency}</p>
      </div>
      <p>{date}</p>
      <div className="edit">
        <p className="edit-icon">
          <Icon path={mdiPencil} size={1} />
        </p>
        <p id={id} className="edit-icon">
          <Icon path={mdiDelete} size={1} onClick={deleteId} />
        </p>
      </div>
    </div>
  );
}

export default TodoCard;
