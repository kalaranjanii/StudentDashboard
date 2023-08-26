import React from "react";
import { Link } from "react-router-dom";

const EmployeeDashboard4 = ({ employees }) => {
  return (
    <div>
      <h2>Employee Dashboard</h2>
      <p>Total Employees: {employees.length}</p>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <Link to={`/employee/${index}`}>{employee.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeDashboard4;
