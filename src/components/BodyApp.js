import React from "react";
import TodoSelect from "./TodoSelect";
import TodoDisplay from "./TodoDisplay";
import "../styles/bodyApp.css";

function BodyApp({clickBtn, style, show}){
    return (
        <div className="app-body" style ={style}>
            <TodoSelect clickBtn = {clickBtn} show = {show} />
            <TodoDisplay />
        </div>
    )
}

export default BodyApp;