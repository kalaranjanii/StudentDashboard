import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Appnew from "./edit/edit";
// import Dropdown from "./Dropdown/Dropdown";
// import App4 from "./Employee/emp4";
// import App3 from "./Employee/emp3";
// import App2 from "./Employee/emp1";
// import App1 from "./Employee/emp";
// import App from './App';
import Main from "../src/Dashboard/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App1/> */}
    {/* <App2/> */}
    {/* <App3/> */}
    {/* <App4/> */}
    <Main/>
    {/* <Appnew/> */}
  </React.StrictMode>
);
