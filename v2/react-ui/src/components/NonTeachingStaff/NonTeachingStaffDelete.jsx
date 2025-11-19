import { useState } from "react";
import axios from "axios";

function NonTeachingStaffDelete() {
  const staffUrl = "https://localhost:7230/api/NonTeachingStaff";

  const [staffId, setStaffId] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [qualification, setQualification] = useState("");
  const [designation, setDesignation] = useState("");

  const deleteStaff = async (e) => {
    e.preventDefault();
    const response = await axios.delete(staffUrl + "/" + staffId);
    alert(response.status === 200 ? "Staff deleted successfully!" : "Error deleting staff");
  };

  return (
    <>
      <h2>Delete Non-Teaching Staff</h2>
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

        <button type="button" onClick={deleteStaff}>Delete (DELETE)</button>
      </form>
    </>
  );
}

export default NonTeachingStaffDelete;
