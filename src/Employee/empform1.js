import React, { useState} from "react";
import { Link } from "react-router-dom";
import "../Style/empform1.css";

const EmployeeForm1 = ({ onEmployeeSubmit}) => {
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
        <h1>Student Data Entry Form</h1>
        <div className="box">
          <Link className="one" to="/addemp">
            <i class="fa-solid fa-users"></i>
            <h2>Add Student</h2>
          </Link>
          <Link className="two" to="/emplist">
            <i class="fa-solid fa-users"></i>
            <h2>View Student</h2>
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <h2 className="h2">Student Entry Form</h2>

          <div>
            <label>First Name:</label>
            <input
              type="text"
              value={Firstname}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              value={Lastname}
              placeholder="Last Name"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div>
            <label>Father Name:</label>
            <input
              type="text"
              value={Fathername}
              placeholder="Father Name"
              onChange={(e) => setFathername(e.target.value)}
            />
          </div>
          <div>
            <label>Mather Name:</label>
            <input
              type="text"
              value={Mathername}
              placeholder="Mather Name"
              onChange={(e) => setMathername(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={Email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              value={Address}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label>DOB:</label>
            <input
              type="date"
              value={Dob}
              placeholder="DOB"
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <label>Blood Group:</label>
            {/* <input
              type="text"
              value={Bloodgroup}
              placeholder="Blood Group"
              onChange={(e) => setBloodgroup(e.target.value)}
              
            /> */}
            <select
              className="input"
              value={Bloodgroup}
              required
              onChange={(e) => setBloodgroup(e.target.value)}
            >
              <option value="" disabled selected>
                Blood Group
              </option>
              <option>A Positive</option>
              <option>A Negative</option>
              <option>B Positive</option>
              <option>B Negative</option>
              <option>AB Positive</option>
              <option>AB Negative</option>
              <option>O Positive</option>
              <option>O Negative</option>
            </select>
          </div>
          <div>
            <label>Contact:</label>
            <input
              type="tel"
              value={Contact}
              placeholder="Contact"
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div>
            <label>Father Number:</label>
            <input
              type="tel"
              value={FatherNumber}
              placeholder="Father Number"
              onChange={(e) => setFatherNumber(e.target.value)}
            />
          </div>
          <div>
            <label>Mather Number:</label>
            <input
              type="tel"
              value={MatherNumber}
              placeholder="Mather Number"
              onChange={(e) => setMatherNumber(e.target.value)}
            />
          </div>
          <div>
            <label>Marital Status:</label>
            <input
              type="text"
              value={MaritalStatus}
              placeholder="Marital Status"
              onChange={(e) => setMaritalStatus(e.target.value)}
            />
          </div>
          <div>
            <label>Gender:</label>
            <input
              type="text"
              value={Gender}
              placeholder="Gender"
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div>
            <label>SSLC Mark:</label>
            <input
              type="text"
              value={SSLCMark}
              placeholder="SSLC Mark"
              onChange={(e) => setSSLCMark(e.target.value)}
            />
          </div>
          <div>
            <label>SSLC School Name:</label>
            <input
              type="text"
              value={SSLCSchoolname}
              placeholder="SSLC School Name"
              onChange={(e) => setSSLCSchoolname(e.target.value)}
            />
          </div>
          <div>
            <label>SSLC Percentage:</label>
            <input
              type="number"
              value={SSLCPercentage}
              placeholder="SSLC Percentage"
              onChange={(e) => setSSLCPercentage(e.target.value)}
            />
          </div>
          <div>
            <label>Photo:</label>
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EmployeeForm1;
