import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const [para, setPara] = useState(" ");

  const handleClick = () =>{
    setPara(
      <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    );
  };

  
  return (
    <div id="main">
      <p id="para">{para}</p>
      <button id="click" onClick={handleClick}>Click</button>
    </div>
  );
  
}


export default App;
