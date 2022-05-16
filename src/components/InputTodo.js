import React, { useState, useEffect } from "react";
import { doc, collection, addDoc, updateDoc } from "firebase/firestore";
import "../styles/inputTodo.css";

function InputTodo({ show, setShow }) {
  const [todo, setTodo] = useState(true);
  const [project, setProject] = useState(false);
  const [todoName, setTodoName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [urgency, setUrgency] = useState("");
  const [projName, setProjName] = useState("");

  const styleTodo = {
    textDecoration: todo ? "underline" : "",
    fontWeight: todo ? "700" : "",
    color: todo ? "#ef9273" : "",
  };
  const styleProject = {
    textDecoration: project ? "underline" : "",
    fontWeight: project ? "700" : "",
    color: project ? "#ef9273" : "",
  };

  function clickProject() {
    if (todo) {
      setTodo((prevState) => !prevState);
      setProject((prevState) => !prevState);
    }
  }

  function clickTodo() {
    if (project) {
      setProject((prevState) => !prevState);
      setTodo((prevState) => !prevState);
    }
  }

  function clickClose() {
    setShow((prevState) => !prevState);
  }

  async function addFirestoreData(e) {
    e.preventDefault();
  }

  return (
    <form className="input-card">
      <div className="input-selection">
        <p className="selection-input" style={styleTodo} onClick={clickTodo}>
          New Todo
        </p>
        <p
          className="selection-input"
          style={styleProject}
          onClick={clickProject}
        >
          New Project
        </p>
      </div>
      <p className="close" onClick={clickClose}>
        x
      </p>
      {todo && (
        <div>
          <div className="input">
            <label htmlFor="todo-name">Task to Complete:</label>
            <input
              type="text"
              id="todo-name"
              name="todoTitle"
              value={todoName}
              onChange={(e) => setTodoName(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="todo-description">Task Description:</label>
            <textarea
              type="text"
              id="todo-description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="todo-date">Date:</label>
            <input
              type="date"
              id="todo-date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="todo-urgency">Urgency:</label>
            <select
              name="urgency"
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="input">
            <button>Submit Todo</button>
          </div>
        </div>
      )}
      {project && (
        <div>
          <div className="input">
            <label htmlFor="project-input">Project Name:</label>
            <input
              type="text"
              id="project-input"
              name="project"
              value={projName}
              onChange={(e) => setProjName(e.target.value)}
            />
          </div>
          <div className="input">
            <button>Submit Project</button>
          </div>
        </div>
      )}
    </form>
  );
}

export default InputTodo;
