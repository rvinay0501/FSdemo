import { useState } from "react";
import axios from "axios";

function TeachingStaffUpdate() {
  const staffUrl = "https://localhost:7230/api/TeachingStaff";

  const [staffId, setstaffId] = useState(0);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [qualification, setqualification] = useState("");
  const [designation, setdesignation] = useState("");

  const handlestaffIdchange = (e) => setstaffId(e.target.value);
  const handlefirstnamechange = (e) => setfirstname(e.target.value);
  const handlelastnamechange = (e) => setlastname(e.target.value);
  const handlequalificationchange = (e) => setqualification(e.target.value);
  const handledesignationchange = (e) => setdesignation(e.target.value);

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
      <h2>Update Teaching Staff</h2>
      <form>
        <label>Staff Id:</label><br />
        <input type="text" value={staffId} onChange={handlestaffIdchange} /><br /><br />

        <label>First Name:</label><br />
        <input type="text" value={firstname} onChange={handlefirstnamechange} /><br /><br />

        <label>Last Name:</label><br />
        <input type="text" value={lastname} onChange={handlelastnamechange} /><br /><br />

        <label>Qualification:</label><br />
        <input type="text" value={qualification} onChange={handlequalificationchange} /><br /><br />

        <label>Designation:</label><br />
        <input type="text" value={designation} onChange={handledesignationchange} /><br /><br />

        <button type="button" onClick={updateStaff}>Update (PUT)</button>
      </form>
    </>
  );
}

export default TeachingStaffUpdate;
