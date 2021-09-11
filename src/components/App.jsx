import React, { useState } from "react";

function App() {
  const [textline, setNew] = useState("  ");
  const [isMouseOver, setvaleon] = useState(false);
  const [name, setname] = useState("");
  function Newhead(event) {
    setNew(name);
  }
  function onit() {
    setvaleon(true);
  }
  function offit() {
    setvaleon(false);
  }
  function onchange(event) {
    setname(event.target.value);
    //console.log(event.target.value);
  }
  return (
    <div className="container">
      <h1>
        hello
        {textline}
      </h1>
      <input onChange={onchange} type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={onit}
        onMouseOut={offit}
        onClick={Newhead}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
