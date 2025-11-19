import React, { useState } from "react";
import axios from "axios";

function TeachingStaffForm() {
  const staffUrl = "https://localhost:7230/api/TeachingStaff";

  const [staffId, setstaffId] = useState(0);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [qualification, setqualification] = useState("");
  const [designation, setdesignation] = useState("");
  const [staffs, setStaffs] = useState([]);

  const handlestaffIdchange = (e) => setstaffId(e.target.value);
  const handlefirstnamechange = (e) => setfirstname(e.target.value);
  const handlelastnamechange = (e) => setlastname(e.target.value);
  const handlequalificationchange = (e) => setqualification(e.target.value);
  const handledesignationchange = (e) => setdesignation(e.target.value);

  const saveStaff = async (e) => {
    e.preventDefault();
    const staff = {
         FirstName: firstname,
         LastName: lastname,
          Qualification: qualification,
           Designation: designation };
    const response = await axios.post(staffUrl, staff);
    alert(response.status === 200 ? "Staff posted successfully!" : "Error post staff");
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
    alert(response.status === 200 ? "Staff deleted successfully!" : "Error delete staff");
  };

  const getStaffs = async (e) => {
    e.preventDefault();
    const response = await axios.get(staffUrl);
    setStaffs(response.data);
  };

  return (
    <>
      <h2>Teaching Staff Form</h2>
      <form>
        <label>Staff Id (for Update/Delete):</label><br />
        <input type="text" value={staffId} onChange={handlestaffIdchange} /><br /><br />

        <label>First Name:</label><br />
        <input type="text" value={firstname} onChange={handlefirstnamechange} /><br /><br />

        <label>Last Name:</label><br />
        <input type="text" value={lastname} onChange={handlelastnamechange} /><br /><br />

        <label>Qualification:</label><br />
        <input type="text" value={qualification} onChange={handlequalificationchange} /><br /><br />

        <label>Designation:</label><br />
        <input type="text" value={designation} onChange={handledesignationchange} /><br /><br />

        <button type="button" onClick={saveStaff}>Save (POST)</button>
        <button type="button" onClick={updateStaff}>Update (PUT)</button>
        <button type="button" onClick={deleteStaff}>Delete (DELETE)</button>
        <button type="button" onClick={getStaffs}>Get Staffs (GET)</button>

        <h3>Teaching Staff List</h3>
        <table style={{ borderCollapse: "collapse", width: "100%", border: "1px" }}>
          <thead >
            <tr>
              <th style={{ border: "1px "}}>Id</th>
              <th style={{ border: "1px " }}>First Name</th>
              <th style={{ border: "1px" }}>Last Name</th>
              <th style={{ border: "1px "}}>Qualification</th>
              <th style={{ border: "1px " }}>Designation</th>
            </tr>
          </thead>
          <tbody>
            {staffs.map((s) => (
              <tr key={s.staffId}>
                <td style={{ border: "1px " }}>{s.staffId}</td>
                <td style={{ border: "1px " }}>{s.firstName}</td>
                <td style={{ border: "1px " }}>{s.lastName}</td>
                <td style={{ border: "1px " }}>{s.qualification}</td>
                <td style={{ border: "1px " }}>{s.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </>
  );
}

export default TeachingStaffForm;
