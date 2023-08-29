import React from "react";
import "../Style/emplist.css";

const EmployeeList1 = ({
  employees,
  currentPage,
  itemsPerPage,
  onPageChange,
  onDeleteEmployee,
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleEmployees = employees.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      <h2 className="h2">Student List</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Father Name</th>
            <th>Mather Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Dob</th>
            <th>Blood Group</th>
            <th>Contact</th>
            <th>Father Number</th>
            <th>Mather Number</th>
            <th>Marital Status</th>
            <th>Gender</th>
            <th>SSLC Mark</th>
            <th>SSLC School Name</th>
            <th>SSLC Percentage</th>
            <th>Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {visibleEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.Firstname}</td>
              <td>{employee.Lastname}</td>
              <td>{employee.Fathername}</td>
              <td>{employee.Mathername}</td>
              <td>{employee.Email}</td>
              <td>{employee.Address}</td>
              <td>{employee.Dob}</td>
              <td>{employee.Bloodgroup}</td>
              <td>{employee.Contact}</td>
              <td>{employee.FatherNumber}</td>
              <td>{employee.MatherNumber}</td>
              <td>{employee.MaritalStatus}</td>
              <td>{employee.Gender}</td>
              <td>{employee.SSLCMark}</td>
              <td>{employee.SSLCSchoolname}</td>
              <td>{employee.SSLCPercentage}</td>
              <td>
                {employee.Photo && (
                  <img
                    src={URL.createObjectURL(employee.Photo)}
                    alt={employee.Gender}
                  />
                )}
              </td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => onDeleteEmployee(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= employees.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeeList1;
