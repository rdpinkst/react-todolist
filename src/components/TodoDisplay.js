import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import TodoCard from "./TodoCard";
import "../styles/todoDisplay.css";

function TodoDisplay({ projectOn }) {
  const [projList, setProjList] = useState([]);

  useEffect(() => {
    console.log("running");

    const unsub = onSnapshot(collection(db, "tasks"), (querySnapshot) => {
      const arrayData = [];
      querySnapshot.forEach((doc) => {
        arrayData.push(doc.data());
      });
      
      if(projectOn === ""){
      setProjList(arrayData);
      } else{
        filterProj(arrayData);
      }
    });
    return () => unsub();
  }, [projectOn]);

  function filterProj(arr){
    const result = arr.filter(data => data.project === projectOn)
    setProjList(result);
    console.log(result)
  }

  const todos = projList.map((task) => {
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
