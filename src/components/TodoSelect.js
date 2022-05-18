import React, { useState, useEffect } from "react";
import { doc, collection, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Icon from "@mdi/react";
import { mdiHome, mdiCalendarToday, mdiFolder, mdiCloseThick } from "@mdi/js";
import "../styles/todoSelect.css";

function TodoSelect({ clickBtn, show }) {
  const [proj, setProj] = useState([]);
  const [projId, setProjId] = useState("");

  async function deleteProject(item) {
    const docDelete = doc(db, "projects", item);
    await deleteDoc(docDelete);
  }

  function getProjId(e) {
    setProjId(e.currentTarget.parentNode.id);
  }

  useEffect(() => {
    if (projId) {
      deleteProject(projId);
      setProjId("");
    }
  }, [projId]);

  useEffect(() => {
    console.log("running");
    const unsub = onSnapshot(collection(db, "projects"), (querySnapshot) => {
      const arrayData = [];
      querySnapshot.forEach((doc) => {
        arrayData.push(doc.data());
      });
      setProj(arrayData);
    });
    return () => unsub();
  }, []);

  const projDisplay = proj.map((data) => {
    return (
      <div key={data.id} className="name-proj">
        <p>
          ---{data.project}{" "}
          <span className="delete-proj" id={data.id}>
            <Icon
              path={mdiCloseThick}
              size={1}
              color="red"
              onClick={getProjId}
            />
          </span>
        </p>
      </div>
    );
  });

  return (
    <div className="select-todo">
      <h3 className="selection">
        <span>
          <Icon path={mdiHome} size={1} />
        </span>{" "}
        HOME
      </h3>
      <h3 className="selection">
        <span>
          <Icon path={mdiCalendarToday} size={1} />
        </span>{" "}
        TODAY
      </h3>
      <h3 className="selection">
        <span>
          <Icon path={mdiFolder} size={1} />
        </span>{" "}
        PROJECTS
      </h3>
      {projDisplay}
      <div className="position-button">
        <button className="add" onClick={clickBtn} disabled={show}>
          ADD TODO/PROJECT
        </button>
      </div>
    </div>
  );
}

export default TodoSelect;
