import React from "react";
import "../Style/Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = ({ employees }) => {
  return (
    <>
      <div>
        <h1>Dashboard</h1>
      </div>
      <div className="boxes">
        <Link to="/emplist">
          <div className="box1">
            <h2>{employees.length}</h2>
            <h3>Employee</h3>
            <i class="fa-solid fa-users"></i>
          </div>
        </Link>
        <Link to="/emplist">
          <div className="box2">
            <h2>34</h2>
            <h3>Internship</h3>
            <i class="fa-solid fa-users"></i>
          </div>
        </Link>
        <Link to="/emplist">
          <div className="box3">
            <h2>64</h2>
            <h3>Present</h3>
            <i class="fa-solid fa-users"></i>
          </div>
        </Link>
        <Link to="/emplist">
          <div className="box4">
            <h2>9</h2>
            <h3>Clients</h3>
            <i class="fa-solid fa-users"></i>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
