import React, { useState } from "react";
import "../Dashboard/Main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Sidebar from "../Sidebar/sidebar";
import Dashboard from "../Pages/Dashboard.js";
// import About from "../Pages/About.js";
import Analytics from "../Pages/Analytics";
// import Comment from "../Pages/Comment.js";
import Product from "../Pages/Product.js";
import ProductList from "../Pages/ProductList.js";

import EmployeeForm1 from "../Employee/empform1.js";
import EmployeeList1 from "../Employee/emplist.js";

import Dropdown from "../Dropdown/Dropdown";
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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <BrowserRouter>
      <Dropdown>
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
                onPageChange={handlePageChange}
                onDeleteEmployee={handleDeleteEmployee}
              />
            }
          />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
        
      </Dropdown>
    </BrowserRouter>
  );
};

export default Main;
