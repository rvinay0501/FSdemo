import { useState } from "react";
import axios from "axios";

function NonTeachingStaffUpdate() {
  const staffUrl = "https://localhost:7230/api/NonTeachingStaff";

  const [staffId, setStaffId] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [qualification, setQualification] = useState("");
  const [designation, setDesignation] = useState("");

  const updateStaff = async (e) => {
    e.preventDefault();
    const staff = {
      StaffId: staffId,
      FirstName: firstname,
      LastName: lastname,
      Qualification: qualification,
      Designation: designation,
    };
    const response = await axios.put(staffUrl, staff);
    alert(response.status === 200 ? "Staff updated successfully!" : "Error updating staff");
  };

  return (
    <>
      <h2>Update Non-Teaching Staff</h2>
      <form>
        <label>Staff Id:</label><br />
        <input type="text" value={staffId} onChange={(e) => setStaffId(e.target.value)} /><br /><br />

        <label>First Name:</label><br />
        <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} /><br /><br />

        <label>Last Name:</label><br />
        <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} /><br /><br />

        <label>Qualification:</label><br />
        <input type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} /><br /><br />

        <label>Designation:</label><br />
        <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} /><br /><br />

        <button type="button" onClick={updateStaff}>Update (PUT)</button>
      </form>
    </>
  );
}

export default NonTeachingStaffUpdate;
