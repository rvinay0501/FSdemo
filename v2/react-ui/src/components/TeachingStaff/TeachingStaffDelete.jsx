import { useState } from "react";
import axios from "axios";

function TeachingStaffDelete() {
  const staffUrl = "https://localhost:7230/api/TeachingStaff";

  const [staffId, setStaffId] = useState(0);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [qualification, setqualification] = useState("");
  const [designation, setdesignation] = useState("");

  const handlestaffIdchange = (e) => setStaffId(e.target.value);
  const handlefirstnamechange = (e) => setfirstname(e.target.value);
  const handlelastnamechange = (e) => setlastname(e.target.value);
  const handlequalificationchange = (e) => setqualification(e.target.value);
  const handledesignationchange = (e) => setdesignation(e.target.value);

  const deleteStaff = async (e) => {
    e.preventDefault();
    
      const response = await axios.delete(`${staffUrl}/${staffId}`);
      alert(
        response.status === 200
          ? "Staff deleted successfully!"
          : "Error deleting staff"
      );
    
  };

  return (
    <>
      <h2>Delete Teaching Staff</h2>
      <form>
        <label>Staff Id (for Delete):</label><br />
        <input type="text" value={staffId} onChange={handlestaffIdchange} /><br /><br />

        <label>First Name:</label><br />
        <input type="text" value={firstname} onChange={handlefirstnamechange} /><br /><br />

        <label>Last Name:</label><br />
        <input type="text" value={lastname} onChange={handlelastnamechange} /><br /><br />

        <label>Qualification:</label><br />
        <input type="text" value={qualification} onChange={handlequalificationchange} /><br /><br />

        <label>Designation:</label><br />
        <input type="text" value={designation} onChange={handledesignationchange} /><br /><br />

        <button type="button" onClick={deleteStaff}>Delete (DELETE)</button>
      </form>
    </>
  );
}

export default TeachingStaffDelete;
