import React from 'react';

const EmployeeDetails = ({ employees }) => {
  return (
    <div>
      <h2>Employee Details</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            Name: {employee.name}, Age: {employee.age}, Position: {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeDetails;
