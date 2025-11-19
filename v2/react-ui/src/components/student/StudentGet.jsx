import React,{ useEffect, useState } from "react";
import axios from "axios";

function StudentGet(){

    const studentUrl = "https://localhost:7230/api/Student";
    const [students, setStudents] = useState([]);


    useEffect(() =>{
            
        getStudents();
        },[]);
    
    const getStudents = async () => {
        //e.preventDefault();  
        const response = await axios.get(studentUrl);
        setStudents(response.data);
    };
  

    return (<>
          <h3>Student List</h3>
          <table 
            style={{ borderCollapse: "collapse", width: "100%", border: "1px solid black" }}>
            <thead>
                <tr>
                <th style={{ border: "1px " }}>Id</th>
                <th style={{ border: "1px solid black" }}>First Name</th>
                <th style={{ border: "1px solid black" }}>Last Name</th>
                <th style={{ border: "1px solid black"}}>Standard</th>
                <th style={{ border: "1px solid black"}}>Phone Number</th>
                <th style={{ border: "1px solid black" }}>Address</th>
                </tr>
            </thead> 
            <tbody>         
            {
                students.map((s) => (
                <tr key={s.studentId} >
                    <td style={{ border: "1px solid black" }}>{s.studentId} </td> 
                    <td style={{ border: "1px solid black" }}>{s.firstName} </td>
                    <td style={{ border: "1px solid black" }}>{s.lastName}</td>
                    <td style={{ border: "1px solid black"}}>{s.standard}</td> 
                    <td style={{ border: "1px solid black"}} >{s.phoneNumber}</td> 
                    <td style={{ border: "1px solid black" }}>{s.address}</td>   
                </tr>))
            }
            </tbody>  
        </table>
    </>);
}

export default StudentGet;