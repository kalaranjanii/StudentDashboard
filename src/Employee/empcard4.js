import React from 'react';

const EmployeeCard4 = ({ employee }) => {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>Age: {employee.age}</p>
      <p>Position: {employee.position}</p>
    </div>
  );
};

export default EmployeeCard4;
