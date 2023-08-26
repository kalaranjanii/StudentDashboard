import React from "react";
import "../Style/Dashboard.css";
// import EmployeeList1 from "../Employee/emplist";
// import Product from "./Product";
// import EmployeeList1 from "../Employee/emplist";
// import EmployeeList1 from "../Employee/emplist";

const Dashboard = ({ employees }) => {


  // const Nextpage=()=>{
  //   return(<>
  //   <p>haii</p>
  //   {/* <EmployeeList1/> */}
  //   </>)

  // }
  return (
    <>
      <div>
        <h1>dashboard page</h1>
      </div>
      <div className="boxes">
        <div className="box1">
          <h1>{employees.length}</h1>
        </div>
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        {/* <button >click</button> */}

        {/* <EmployeeList1/> */}
      </div>
    </>
  );
};

export default Dashboard;
