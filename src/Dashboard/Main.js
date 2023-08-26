import React, { useState } from "react";
import "../Dashboard/Main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import Dashboard from "../Pages/Dashboard.js";
// import About from "../Pages/About.js";
import Analytics from "../Pages/Analytics";
// import Comment from "../Pages/Comment.js";
import Product from "../Pages/Product.js";
import ProductList from "../Pages/ProductList.js";

import EmployeeForm1 from "../Employee/empform1";
import EmployeeList1 from "../Employee/emplist";

const Main = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

 
  const handleEmployeeSubmit = (employeeDetails) => {
    setEmployees([...employees, employeeDetails]);
  };

 
  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard employees={employees} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="addemp"
            element={
              <EmployeeForm1
                onEmployeeSubmit={handleEmployeeSubmit}
                
              />
            }
          />
          <Route
            path="/emplist"
            element={
              <EmployeeList1
                employees={employees}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                onDeleteEmployee={handleDeleteEmployee}
                
              />
            }
          />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
        <div>
          {currentPage > 1 && (
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </button>
          )}
          {employees.length > currentPage * itemsPerPage && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </button>
          )}
        </div>
      </Sidebar>
    </BrowserRouter>
  );
};

export default Main;
