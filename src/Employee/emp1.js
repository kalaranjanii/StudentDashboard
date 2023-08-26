import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import EmployeeForm1 from "./empform1";
import EmployeeList1 from "./emplist";


const App2 = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of employees to display per page

  const handleEmployeeSubmit = (employeeDetails) => {
    setEmployees([...employees, employeeDetails]);
  };

  return (
    <Router>
      <div>
        <h1>Employee Management App</h1>
        <Link to="/">Add Employee</Link> | <Link to="/list">Employee List</Link>
        <Routes>
          <Route
            exact
            path="/"
            element={<EmployeeForm1 onEmployeeSubmit={handleEmployeeSubmit} />}
          />
          <Route
            path="/list"
            element={
              <EmployeeList1
                employees={employees}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
              />
            }
          />
          
        </Routes>
        <div>
          {currentPage > 1 && (
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </button>
          )}
          {employees.length > currentPage * itemsPerPage && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </button>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App2;
