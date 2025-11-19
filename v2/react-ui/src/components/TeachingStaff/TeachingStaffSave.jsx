import { useState } from "react";
import axios from "axios";

function TeachingStaffSave() {
  const staffUrl = "https://localhost:7230/api/TeachingStaff";

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [qualification, setqualification] = useState("");
  const [designation, setdesignation] = useState("");

  const handlefirstnamechange = (e) => setfirstname(e.target.value);
  const handlelastnamechange = (e) => setlastname(e.target.value);
  const handlequalificationchange = (e) => setqualification(e.target.value);
  const handledesignationchange = (e) => setdesignation(e.target.value);

  const saveStaff = async (e) => {
    e.preventDefault();
    const staff = { FirstName: firstname, LastName: lastname, Qualification: qualification, Designation: designation };
    const response = await axios.post(staffUrl, staff);
    alert(response.status === 200 ? "Staff posted successfully!" : "Error posting staff");
  };

  return (
    <>
      <h2>Save Teaching Staff</h2>
      <form>
        <label>First Name:</label><br />
        <input type="text" value={firstname} onChange={handlefirstnamechange} /><br /><br />

        <label>Last Name:</label><br />
        <input type="text" value={lastname} onChange={handlelastnamechange} /><br /><br />

        <label>Qualification:</label><br />
        <input type="text" value={qualification} onChange={handlequalificationchange} /><br /><br />

        <label>Designation:</label><br />
        <input type="text" value={designation} onChange={handledesignationchange} /><br /><br />

        <button type="button" onClick={saveStaff}>Save Staff (POST)</button>
      </form>
    </>
  );
}

export default TeachingStaffSave;
