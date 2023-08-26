import React from 'react';
import EmployeeCard from './empcards';
// import EmployeeCard from './EmployeeCard';

const EmployeeDashboard = ({ employees }) => {
  return (
    <div>
      <h2>Employee Dashboard</h2>
      <div className="employee-card-container">
        {employees.map((employee, index) => (
          <EmployeeCard key={index} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
