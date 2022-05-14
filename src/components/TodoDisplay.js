import React from "react";
import TodoCard from "./TodoCard";
import "../styles/todoDisplay.css"

function TodoDisplay(){
    return (
        <div className="display-todos">
            <h3>Display the todo's for selected category</h3>
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
        </div>
    )
}

export default TodoDisplay;