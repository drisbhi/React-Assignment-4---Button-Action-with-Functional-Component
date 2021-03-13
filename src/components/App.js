import React, {Component, useState} from "react";

function App() {
  
  const [set,Csettime] = useState("");
  const handleClick = () =>{
    Csettime(1);
  }
  return (
    <div id="main">
      
    {set && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      <button id="click" onClick={handleClick} >open</button>
    </div>
  );
}


export default App;