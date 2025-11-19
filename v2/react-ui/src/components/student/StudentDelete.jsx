

import  {useState} from "react";
import axios from "axios";


function StudentDelete(){
 const studentUrl = "https://localhost:7230/api/Student";

    const [studentId, setstudentId] = useState(0);
    const [firstname, setfirstname] = useState('');
     const [lastname, setlastname] = useState('');
     const [standard, setstandard]= useState('');
     const [phonenumber, setphonenumber]= useState('');
     const [address, setaddress]= useState('');
   
    const handlestudentIdchange = (event) =>{
        setstudentId(event.target.value);
    }
    const handlefirstnamechange = (event)=> {
        setfirstname(event.target.value);
    }
    const handlelastnamechange = (event)=> {
        setlastname(event.target.value);
    }
    const handlestandardchange = (event)=> {
        setstandard(event.target.value);
    }
    const handlephonenumberchange = (event)=> {
        setphonenumber(event.target.value);
    } 
    const handleaddresschange = (event)=>{
        setaddress(event.target.value);
    }
    
     const deleteStudent = async (e) => {
      if (e) e.preventDefault();  
    const response = await axios.delete(studentUrl + "/" + studentId);
    alert(response.status === 200 
    ? "Student deleted successfully!" 
    : "Error delete student");
  };

    return (<>
       <h2>Delete Student</h2>
    <form >
      <label >student Id (for Delete):</label><br />
      <input type="text" id="studentId" value={studentId} onChange={handlestudentIdchange} /><br /><br />

      <label>First Name:</label><br />
      <input type="text" id="firstName" value={firstname}onChange={handlefirstnamechange}/><br /><br />

      <label>Last Name:</label><br />
      <input type="text" id="lastName"value={lastname} onChange={handlelastnamechange}/><br /><br />

      <label>Standard:</label><br />
      <input type="text" id="standard" value={standard}onChange={handlestandardchange}/><br /><br />

      <label>Phone Number:</label><br />
      <input type="text" id="phoneNumber"value={phonenumber}onChange={handlephonenumberchange} /><br /><br />

      <label>Address:</label><br />
      <textarea id="address" value={address}onChange={handleaddresschange} ></textarea><br /><br />

         <button type="button" onClick={deleteStudent}>Delete (DELETE)</button>
          
        

    </form>
    </>);
}
export default StudentDelete;