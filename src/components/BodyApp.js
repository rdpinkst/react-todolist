import React from "react";
import TodoSelect from "./TodoSelect";
import TodoDisplay from "./TodoDisplay";
import "../styles/bodyApp.css";

function BodyApp(){
    return (
        <div className="app-body">
            <TodoSelect />
            <TodoDisplay />
        </div>
    )
}

export default BodyApp;