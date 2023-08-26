import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/empform1.css";

const EmployeeForm1 = ({ onEmployeeSubmit }) => {
  const [Firstname, setFirstName] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Fathername, setFathername] = useState("");
  const [Mathername, setMathername] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Dob, setDob] = useState("");
  const [Bloodgroup, setBloodgroup] = useState("");
  const [Contact, setContact] = useState("");
  const [FatherNumber, setFatherNumber] = useState("");
  const [MatherNumber, setMatherNumber] = useState("");
  const [MaritalStatus, setMaritalStatus] = useState("");
  const [Gender, setGender] = useState("");
  const [SSLCMark, setSSLCMark] = useState("");
  const [SSLCSchoolname, setSSLCSchoolname] = useState("");
  const [SSLCPercentage, setSSLCPercentage] = useState("");
  const [Photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeDetails = {
      Firstname,
      Lastname,
      Fathername,
      Mathername,
      Email,
      Address,
      Dob,
      Bloodgroup,
      Contact,
      FatherNumber,
      MatherNumber,
      MaritalStatus,
      Gender,
      SSLCMark,
      SSLCSchoolname,
      SSLCPercentage,
      Photo,
    };

    onEmployeeSubmit(employeeDetails);

    setFirstName("");
    setLastname("");
    setFathername("");
    setMathername("");
    setEmail("");
    setEmail("");
    setAddress("");
    setDob("");
    setBloodgroup("");
    setContact("");
    setFatherNumber("");
    setMatherNumber("");
    setMaritalStatus("");
    setGender("");
    setSSLCMark("");
    setSSLCSchoolname("");
    setSSLCPercentage("");
    setPhoto("");
  };

  return (
    <>
      <div className="main">
        <h2>Add Employee Details</h2>
        <div className="box">
          <Link className="one" to="/addemp">
            Add Employee
          </Link>
          <Link className="two" to="/emplist">
            Employee List
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Firstname:</label>
            <input
              type="text"
              value={Firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Lastname:</label>
            <input
              type="text"
              value={Lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div>
            <label>Fathername:</label>
            <input
              type="text"
              value={Fathername}
              onChange={(e) => setFathername(e.target.value)}
            />
          </div>
          <div>
            <label>Mathername:</label>
            <input
              type="text"
              value={Mathername}
              onChange={(e) => setMathername(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label>Dob:</label>
            <input
              type="text"
              value={Dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <label>Bloodgroup:</label>
            <input
              type="text"
              value={Bloodgroup}
              onChange={(e) => setBloodgroup(e.target.value)}
            />
          </div>
          <div>
            <label>Contact:</label>
            <input
              type="text"
              value={Contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div>
            <label>FatherNumber:</label>
            <input
              type="text"
              value={FatherNumber}
              onChange={(e) => setFatherNumber(e.target.value)}
            />
          </div>
          <div>
            <label>MatherNumber:</label>
            <input
              type="text"
              value={MatherNumber}
              onChange={(e) => setMatherNumber(e.target.value)}
            />
          </div>
          <div>
            <label>MaritalStatus:</label>
            <input
              type="text"
              value={MaritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
            />
          </div>
          <div>
            <label>Gender:</label>
            <input
              type="text"
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div>
            <label>SSLCMark:</label>
            <input
              type="text"
              value={SSLCMark}
              onChange={(e) => setSSLCMark(e.target.value)}
            />
          </div>
          <div>
            <label>SSLCSchoolname:</label>
            <input
              type="text"
              value={SSLCSchoolname}
              onChange={(e) => setSSLCSchoolname(e.target.value)}
            />
          </div>
          <div>
            <label>SSLCPercentage:</label>
            <input
              type="text"
              value={SSLCPercentage}
              onChange={(e) => setSSLCPercentage(e.target.value)}
            />
          </div>
          <div>
            <label>Photo:</label>
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EmployeeForm1;
