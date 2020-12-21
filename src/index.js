import React from "react";
import ReactDOM from "react-dom";

const fName = "Orin";
const lName = "Fletcher";
const num = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {num}. Good luck!</p>
  </div>,
  document.getElementById("root")
);
