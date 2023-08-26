import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import EmployeeForm4 from "./empform4";
import EmployeeCard4 from "./empcard4";
import EmployeeDashboard4 from "./empdashboard4";
// import EmployeeForm from './EmployeeForm';
// import EmployeeCard from './EmployeeCard';
// import EmployeeDashboard from './EmployeeDashboard';

const App4 = () => {
  const [employees, setEmployees] = useState([]);

  const handleEmployeeSubmit = (employeeDetails) => {
    setEmployees([...employees, employeeDetails]);
  };

  return (
    <Router>
      <div>
        <h1>Employee Management App</h1>
        <Link to="/">Add Employee</Link> |{" "}
        <Link to="/dashboard">Employee Dashboard</Link>|
        <Routes>
          <Route
            exact
            path="/"
            // render={() => <EmployeeForm4 onEmployeeSubmit={handleEmployeeSubmit} />}
            element={<EmployeeForm4 onEmployeeSubmit={handleEmployeeSubmit} />}
          />
          <Route
            exact
            path="/dashboard"
            // render={() => <EmployeeDashboard4 employees={employees} />}
            element={<EmployeeDashboard4 employees={employees} />}
          />
          <Route
            path="/employee/:id"
            element={({ match }) => (
              <EmployeeCard4 employee={employees[match.params.id]} />
            )}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App4;
