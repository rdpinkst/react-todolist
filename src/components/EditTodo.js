import React, { useEffect, useState } from "react";
import {doc, setDoc} from "firebase/firestore"
import { db } from "../firebase";
import "../styles/editTodo.css";

function EditTodo({ inputEdit, setInputEdit, setShowEditInput }) {
  const [submitEdit, setSubmitEdit] = useState(false);

  function editsSubmitted(e) {
    e.preventDefault();
    setSubmitEdit(prevState => !prevState);
  }

  function clickClose(){
    setShowEditInput(prevState => !prevState);
  }

  async function saveChanges(obj){
    const refUpdate = doc(db, "tasks", obj.id)
    await setDoc(refUpdate, {
      ...obj,
    })
  }

  useEffect(() => {
    if(submitEdit){
      setShowEditInput(prevState => !prevState);
      setSubmitEdit(prevState => !prevState);
      saveChanges(inputEdit)
    }
  }, [submitEdit])

  return (
    <form className="edit-todo" onSubmit={editsSubmitted}>
      <p className="close" onClick={clickClose}>
        x
      </p>
      <div className="input">
        <label htmlFor="todo-name">Task to Complete:</label>
        <input
          type="text"
          id="todo-name"
          name="todoTitle"
          value={inputEdit.todo ?? ""}
          onChange={(e) =>
            setInputEdit((prevState) => ({
              ...prevState,
              todo: e.target.value,
            }))
          }
        />
      </div>
      <div className="input">
        <label htmlFor="todo-description">Task Description:</label>
        <textarea
          type="text"
          id="todo-description"
          name="description"
          value={inputEdit.description ?? ""}
          onChange={(e) =>
            setInputEdit((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
        />
      </div>
      <div className="input">
        <label htmlFor="project-input">Project Name:</label>
        <input
          type="text"
          id="project-input"
          name="project"
          value={inputEdit.project ?? ""}
          onChange={(e) =>
            setInputEdit((prevState) => ({
              ...prevState,
              project: e.target.value,
            }))
          }
        />
      </div>
      <div className="input">
        <label htmlFor="todo-date">Date:</label>
        <input
          type="date"
          id="todo-date"
          name="date"
          value={inputEdit.date ?? ""}
          onChange={(e) =>
            setInputEdit((prevState) => ({
              ...prevState,
              date: e.target.value,
            }))
          }
        />
      </div>
      <div className="input">
        <label htmlFor="todo-urgency">Urgency:</label>
        <select
          name="urgency"
          value={inputEdit.urgency ?? ""}
          onChange={(e) =>
            setInputEdit((prevState) => ({
              ...prevState,
              urgency: e.target.value,
            }))
          }
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="input">
        <button type="submit">Submit Edit</button>
      </div>
    </form>
  );
}

export default EditTodo;
