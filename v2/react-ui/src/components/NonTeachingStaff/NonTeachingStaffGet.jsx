import { useState } from "react";
import axios from "axios";

function NonTeachingStaffGet() {
  const staffUrl = "https://localhost:7230/api/NonTeachingStaff";
  const [staffs, setStaffs] = useState([]);

  const getStaffs = async (e) => {
    e.preventDefault();
    const response = await axios.get(staffUrl);
    setStaffs(response.data);
  };

  return (
    <>
      <h2>Get Non-Teaching Staff</h2>
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
    </>
  );
}

export default NonTeachingStaffGet;
