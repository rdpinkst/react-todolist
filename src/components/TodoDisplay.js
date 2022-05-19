import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import TodoCard from "./TodoCard";
import "../styles/todoDisplay.css";

function TodoDisplay({ projectOn }) {
  const [todoList, setTodoList] = useState([]);
  const [projList, setProjList] = useState([]);

  useEffect(() => {
    console.log("running");

    const unsub = onSnapshot(collection(db, "tasks"), (querySnapshot) => {
      const arrayData = [];
      querySnapshot.forEach((doc) => {
        arrayData.push(doc.data());
      });
      setTodoList(arrayData);
    });
    return () => unsub();
  }, []);

  function filterProj(arr){
    const result = arr.filter(data => data.project === projectOn)
    setProjList(result);
    console.log(result)
  }

  useEffect(() => {
    if(projectOn === ""){
      setProjList(todoList);
    } else{
      filterProj(todoList);
    }
  }, [projectOn])

  const todos = todoList.map((task) => {
    return (
      <TodoCard
        key={task.id}
        id={task.id}
        todo={task.todo}
        date={task.date}
        urgency={task.urgency}
      />
    );
  });

  return <div className="display-todos">{todos}</div>;
}

export default TodoDisplay;
