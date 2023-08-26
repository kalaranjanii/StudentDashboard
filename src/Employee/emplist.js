import React from "react";

const EmployeeList1 = ({
  employees,
  currentPage,
  itemsPerPage,
  onDeleteEmployee,
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedEmployees = employees.slice(startIndex, endIndex);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {displayedEmployees.map((employee, index) => (
          <li key={index}>
            <div>
              <div>Firstname:{employee.Firstname}</div>
              <div>Lastname: {employee.Lastname}</div>
              <div>Fathername: {employee.Fathername}</div>
              <div>Mathername: {employee.Mathername}</div>
              <div>Email: {employee.Email}</div>
              <div>Address: {employee.Address}</div>
              <div>Dob: {employee.Dob}</div>
              <div>Contact: {employee.Contact}</div>
              <div>MaritalStatus: {employee.MaritalStatus}</div>
              <div>Gender: {employee.Gender}</div>
              <div>SSLCMark: {employee.SSLCMark}</div>
              <div>SSLCSchoolname: {employee.SSLCSchoolname}</div>
              <div>SSLCPercentage: {employee.SSLCPercentage}</div>
              <div>Photo: {employee.Photo}</div>


              {employee.photo && (
                <img
                  src={URL.createObjectURL(employee.photo)}
                  alt={employee.name}
                />
              )}
            </div>
            
            <button onClick={() => onDeleteEmployee(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList1;
