import React from "react";
import "../styles/editTodo.css";

function EditTodo(){

    return (
        <div className="edit-todo">
            <div className="input">
            <label htmlFor="todo-name">Task to Complete:</label>
            <input
              type="text"
              id="todo-name"
              name="todoTitle"
            //   value={todoName}
            //   onChange={(e) => setTodoName(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="todo-description">Task Description:</label>
            <textarea
              type="text"
              id="todo-description"
              name="description"
            //   value={description}
            //   onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="project-input">Project Name:</label>
            <input
              type="text"
              id="project-input"
              name="project"
            //   value={projName}
            //   onChange={(e) => setProjName(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="todo-date">Date:</label>
            <input
              type="date"
              id="todo-date"
              name="date"
            //   value={date}
            //   onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="todo-urgency">Urgency:</label>
            <select
              name="urgency"
            //   value={urgency}
            //   onChange={(e) => setUrgency(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="input">
            <button type="submit">Submit Edit</button>
          </div>
        </div>
        
    )
}

export default EditTodo;