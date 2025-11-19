import { useState } from "react";
import axios from "axios";

function TeachingStaffGet() {
  const staffUrl = "https://localhost:7230/api/TeachingStaff";
  const [staffs, setStaffs] = useState([]);

  const getStaffs = async () => {
  const response = await axios.get(staffUrl);
  setStaffs(response.data);
  };

  return (
    <>
      <h2>Teaching Staff List</h2>

      <button type="button" onClick={getStaffs}>Get Staffs (GET)</button>

      <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "20px" }}>
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

export default TeachingStaffGet;
