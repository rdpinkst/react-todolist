import React from "react";
import TodoCard from "./TodoCard";
import "../styles/todoDisplay.css"

function TodoDisplay(){
    return (
        <div className="display-todos">
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
        </div>
    )
}

export default TodoDisplay;