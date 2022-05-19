import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BodyApp from "./components/BodyApp";
import FooterApp from "./components/FooterApp";
import InputTodo from "./components/InputTodo";

function App() {
  const [showInput, setShowInput] = useState(false);
  const [projectOn, setProjectOn] = useState("");

  function getNameProj(e) {
    const projId = e.currentTarget.id;
    if (projId) {
      setProjectOn(e.currentTarget.id);
    } else {
      setProjectOn("");
    }
  }

  function clickButton() {
    setShowInput((prevState) => !prevState);
  }

  const styleOpacity = {
    opacity: showInput ? "0.5" : "1",
  };

  return (
    <div className="App">
      <Header />
      <BodyApp
        clickBtn={clickButton}
        style={styleOpacity}
        show={showInput}
        getNameProj={getNameProj}
        setProjectOn = {setProjectOn}
        projectOn = {projectOn}
      />
      <FooterApp />
      {showInput && (
        <InputTodo
          show={showInput}
          setShow={setShowInput}
          projectOn={projectOn}
        />
      )}
    </div>
  );
}

export default App;
