import React, { useState } from 'react';

const EmployeeForm = ({ onEmployeeSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeDetails = { name, age, position };
    onEmployeeSubmit(employeeDetails);

    // Clear form inputs
    setName('');
    setAge('');
    setPosition('');
  };

  return (
    <div>
      <h2>Add Employee Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          Position:
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
