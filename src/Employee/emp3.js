import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import EmployeeForm3 from './empform3';
import EmployeeDashboard from './empdashboard';


const App3 = () => {
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
        <Link to="/">Add Employee</Link> | <Link to="/dashboard">Employee Dashboard</Link>
<Routes>
        <Route
          exact
          path="/"
        //   render={() => <EmployeeForm3 onEmployeeSubmit={handleEmployeeSubmit} />}
        element={<EmployeeForm3 onEmployeeSubmit={handleEmployeeSubmit} />}
        />

        <Route
          path="/dashboard"
        //   render={() => (
        //     <EmployeeDashboard employees={employees} />
        //   )}
        element={<EmployeeDashboard employees={employees} />}
        />
</Routes>
        {/* Pagination controls here */}
      </div>
    </Router>
  );
};

export default App3;
