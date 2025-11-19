import { useState } from "react";
import axios from "axios";

function StudentSave() {
  const studentUrl = "https://localhost:7230/api/Student";

  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [standard, setstandard] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [address, setaddress] = useState('');

  const handlefirstnamechange = (event) => {
    setfirstname(event.target.value);
  };
  const handlelastnamechange = (event) => {
    setlastname(event.target.value);
  };
  const handlestandardchange = (event) => {
    setstandard(event.target.value);
  };
  const handlephonenumberchange = (event) => {
    setphonenumber(event.target.value);
  };
  const handleaddresschange = (event) => {
    setaddress(event.target.value);
  };

 
  const saveStudent = async (e) => {
    e.preventDefault();

    const student = {
      FirstName: firstname,
      LastName: lastname,
      Standard: standard,
      PhoneNumber: phonenumber,
      Address: address
    };

    const response = await axios.post(studentUrl, student);

    alert(
      response.status === 200
        ? "Student posted successfully!"
        : "Error posting student"
    );
  };

  return (
    <>
      <h2>Save Student</h2>

      <form>
        <label>First Name:</label><br />
        <input type="text" value={firstname} onChange={handlefirstnamechange} /><br /><br />

        <label>Last Name:</label><br />
        <input type="text" value={lastname} onChange={handlelastnamechange} /><br /><br />

        <label>Standard:</label><br />
        <input type="text" value={standard} onChange={handlestandardchange} /><br /><br />

        <label>Phone Number:</label><br />
        <input type="text" value={phonenumber} onChange={handlephonenumberchange} /><br /><br />

        <label>Address:</label><br />
        <textarea value={address} onChange={handleaddresschange}></textarea><br /><br />

        <button type="button" onClick={saveStudent}>Save (POST)</button>
      </form>
    </>
  );
}

export default StudentSave;
