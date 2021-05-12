import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

document.body.style.backgroundColor = "#343a40";
document.body.style.color = "white";
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
