import React, { useEffect } from "react";
import "../styles/inputTodo.css";

function InputTodo({ show, setShow }) {
  useEffect(() => {
    function clickClose(e) {
      if (e.target.className === "close") {
        setShow((prevState) => !prevState);
      }
    }

    document.addEventListener("click", clickClose);

    return () => document.removeEventListener("click", clickClose);
  });

  return (
    <form className="input-card">
      <p className="close">x</p>  
      <div>
        <label htmlFor="todo-name">Task to Complete</label>
        <input type="text" id="todo-name" name="todoTitle" />
      </div>
      <div>
        <label htmlFor="todo-description">Task Description</label>
        <textarea
          type="text"
          id="todo-description"
          name="description"
        ></textarea>
      </div>
      <div>
        <label htmlFor="todo-date">Date</label>
        <input type="date" id="todo-date" name="date" />
      </div>
      <div>
        <label htmlFor="todo-urgency">Urgency</label>
        <select>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <button>Submit Todo</button>
      </div>
    </form>
  );
}

export default InputTodo;
