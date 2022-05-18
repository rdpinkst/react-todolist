import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import TodoCard from "./TodoCard";
import "../styles/todoDisplay.css";

function TodoDisplay() {
  const [todoList, setTodoList] = useState([]);

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
