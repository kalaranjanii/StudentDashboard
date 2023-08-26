import React, { useState } from 'react';

const EmployeeForm4 = ({ onEmployeeSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeDetails = { name, age, position };
    onEmployeeSubmit(employeeDetails);

    // Clear form inputs
    setName('');
    setAge('');
    setPosition('');
    setPhoto(null);
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
        <label>
          Photo: 
        <input
        type="file"
        accept="image/*"
        onChange={(e) => setPhoto(e.target.files[0])}
      /></label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm4;
