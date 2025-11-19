import { useState } from "react";
import axios from "axios";

function StudentUpdate() {

  const studentUrl = "https://localhost:7230/api/Student";

  const [studentId, setstudentId] = useState(0);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [standard, setstandard] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [address, setaddress] = useState('');

  const updateStudent = async (e) => {
    e.preventDefault();

    const student = {
      studentId: studentId,
      firstName: firstname,
      lastName: lastname,
      standard: standard,
      phoneNumber: phonenumber,
      address: address
    };

    const response = await axios.put(studentUrl, student);

    alert(
      response.status === 200
        ? "Student updated successfully!"
        : "Error updating student"
    );
  };

  return (
    <>
      <h2>Update Student</h2>

      <form onSubmit={updateStudent}>

        <label>Student Id:</label><br />
        <input type="number"value={studentId} onChange={(e) => setstudentId(e.target.value)} /><br /><br />

        <label>First Name:</label><br />
        <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} /><br /><br />

        <label>Last Name:</label><br />
        <input type="text" value={lastname} onChange={(e) => setlastname(e.target.value)} /><br /><br />

        <label>Standard:</label><br />
        <input type="text" value={standard}  onChange={(e) => setstandard(e.target.value)} /><br /><br />

        <label>Phone Number:</label><br />
        <input type="text" value={phonenumber}  onChange={(e) => setphonenumber(e.target.value)}  /><br /><br />

        <label>Address:</label><br />
        <input  type="text"  value={address}  onChange={(e) => setaddress(e.target.value)} /><br /><br />

        <button type="submit">Update(Put)</button>
      </form>
    </>
  );
}

export default StudentUpdate;
