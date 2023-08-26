import React, { useState } from 'react';
import EmployeeForm from './empform';
import EmployeeDetails from './empdetails';


const App1 = () => {
  const [employees, setEmployees] = useState([]);

  const handleEmployeeSubmit = (employeeDetails) => {
    setEmployees([...employees, employeeDetails]);
  };

  return (
    <div>
      <EmployeeForm onEmployeeSubmit={handleEmployeeSubmit} />
      <EmployeeDetails employees={employees} />
    </div>
  );
};

export default App1;
