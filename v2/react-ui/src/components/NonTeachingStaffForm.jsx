import React, { useState } from "react";
import axios from "axios";

function NonTeachingStaffForm() {
  const staffUrl = "https://localhost:7230/api/NonTeachingStaff";

  const [staffId, setStaffId] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [qualification, setQualification] = useState("");
  const [designation, setDesignation] = useState("");
  const [staffs, setStaffs] = useState([]);

  const handleStaffIdChange = (e) => setStaffId(e.target.value);
  const handleFirstnameChange = (e) => setFirstname(e.target.value);
  const handleLastnameChange = (e) => setLastname(e.target.value);
  const handleQualificationChange = (e) => setQualification(e.target.value);
  const handleDesignationChange = (e) => setDesignation(e.target.value);

  const saveStaff = async (e) => {
    e.preventDefault();
    const staff = { 
        FirstName: firstname, 
        LastName: lastname,
        Qualification: qualification,
        Designation: designation };
    const response = await axios.post(staffUrl, staff);
    alert(response.status === 200 ? "Staff posted successfully!" : "Error posting staff");
  };

  const updateStaff = async (e) => {
    e.preventDefault();
    const staff = { 
        StaffId: staffId, 
        FirstName: firstname, 
        LastName: lastname, 
        Qualification: qualification, 
        Designation: designation };
    const response = await axios.put(staffUrl, staff);
    alert(response.status === 200 ? "Staff updated successfully!" : "Error updating staff");
  };

  const deleteStaff = async (e) => {
    e.preventDefault();
    const response = await axios.delete(staffUrl + "/" + staffId);
    alert(response.status === 200 ? "Staff deleted successfully!" : "Error deleting staff");
  };

  const getStaffs = async (e) => {
    e.preventDefault();
    const response = await axios.get(staffUrl);
    setStaffs(response.data);
  };

  return (
    <>
      <h2>Non-Teaching Staff Form</h2>
      <form>
        <label>Staff Id (for Update/Delete):</label><br />
        <input type="text" value={staffId} onChange={handleStaffIdChange} /><br /><br />
        <label>First Name:</label><br />
        <input type="text" value={firstname} onChange={handleFirstnameChange} /><br /><br />
        <label>Last Name:</label><br />
        <input type="text" value={lastname} onChange={handleLastnameChange} /><br /><br />
        <label>Qualification:</label><br />
        <input type="text" value={qualification} onChange={handleQualificationChange} /><br /><br />
        <label>Designation:</label><br />
        <input type="text" value={designation} onChange={handleDesignationChange} /><br /><br />

        <button type="button" onClick={saveStaff}>Save (POST)</button>
        <button type="button" onClick={updateStaff}>Update (PUT)</button>
        <button type="button" onClick={deleteStaff}>Delete (DELETE)</button>
        <button type="button" onClick={getStaffs}>Get Staffs (GET)</button>

        <h3>Staff List</h3>
        <table style={{ borderCollapse: "collapse", width: "100%", border: "1px solid black" }}>
  <thead>
    <tr>
      <th style={{ border: "1px solid black" }}>Id</th>
      <th style={{ border: "1px solid black" }}>First Name</th>
      <th style={{ border: "1px solid black" }}>Last Name</th>
      <th style={{ border: "1px solid black" }}>Qualification</th>
      <th style={{ border: "1px solid black" }}>Designation</th>
    </tr>
  </thead>
  <tbody>
    {staffs.map((s) => (
      <tr key={s.staffId}>
        <td style={{ border: "1px solid black" }}>{s.staffId}</td>
        <td style={{ border: "1px solid black" }}>{s.firstName}</td>
        <td style={{ border: "1px solid black" }}>{s.lastName}</td>
        <td style={{ border: "1px solid black" }}>{s.qualification}</td>
        <td style={{ border: "1px solid black" }}>{s.designation}</td>
      </tr>
    ))}
  </tbody>
</table>

      </form>
    </>
  );
}

export default NonTeachingStaffForm;
