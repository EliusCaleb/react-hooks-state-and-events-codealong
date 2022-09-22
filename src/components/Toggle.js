import React, { useState } from "react";


//decide whether we need state 
//Is it passed in from a parent via props? If so, it probably isn’t state.
//Can you compute it based on any other state or props in your component? If so, it isn’t state.
//Does it remain unchanged over time? If so, it probably isn’t state



function Toggle() {

  const [isOn, setIsOn]= useState(false);

  function handleClick(){
    setIsOn((isOn) => !isOn);

  }

  const color = isOn ? "red" : "white"
   
  return <button  style={{background: color }} onClick={handleClick}>{isOn? "ON" : "OFF" }</button>;
}

export default Toggle;
