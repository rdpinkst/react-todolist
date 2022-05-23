import React, { useState, useEffect } from "react";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Icon from "@mdi/react";
import { mdiPencil, mdiDelete } from "@mdi/js";
import "../styles/todoCard.css";

function TodoCard({ todo, date, urgency, id, setEdit, setShowEditInput }) {
  const [delID, setDelID] = useState("");
  const [editID, setEditID] = useState("");

  function deleteId(e) {
    setDelID(e.currentTarget.parentNode.id);
  }

  function idToEdit(e) {
    setEditID(e.currentTarget.parentNode.id);
    setShowEditInput(prevState => !prevState);
  }

  async function deleteItem(item) {
    const docDelete = doc(db, "tasks", item);
    await deleteDoc(docDelete);
  }

  async function getEditInfo(item) {
    const docRef = doc(db, "tasks", item);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
      setEdit(docSnap.data())
    } else {
      console.log("No doc exist")
    }
  }

  useEffect(() => {
    console.log("DELETE")
    if (delID) {
      deleteItem(delID);
      setDelID("");
    }
  }, [delID]);

  useEffect(() => {
    console.log("AHHHH")
    if (editID) {
      getEditInfo(editID);
      setEditID("");
    }
  }, [editID])

  return (
    <div className="card">
      <p className="title">{todo}</p>
      <div className={`urgency-${urgency}`}>
        <p>{urgency}</p>
      </div>
      <p>{date}</p>
      <div className="edit">
        <p id={id} className="edit-icon">
          <Icon path={mdiPencil} size={1} onClick={idToEdit} />
        </p>
        <p id={id} className="edit-icon">
          <Icon path={mdiDelete} size={1} onClick={deleteId} />
        </p>
      </div>
    </div>
  );
}

export default TodoCard;
