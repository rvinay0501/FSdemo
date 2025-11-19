import  { useState } from 'react'
import './App.css';
import StudentGet from './components/student/StudentGet';
import StudentUpdate from './components/student/StudentUpdate';
import StudentSave from './components/student/StudentSave';
import StudentDelete from './components/student/StudentDelete';
import TeachingStaffGet from './components/TeachingStaff/TeachingStaffGet';
import TeachingStaffSave from './components/TeachingStaff/TeachingStaffSave';
import TeachingStaffUpdate from './components/TeachingStaff/TeachingStaffUpdate';
import TeachingStaffDelete from './components/TeachingStaff/TeachingStaffDelete';
import NonTeachingStaffGet from './components/NonTeachingStaff/NonTeachingStaffGet';
import NonTeachingStaffSave from './components/NonTeachingStaff/NonTeachingStaffSave';
import NonTeachingStaffUpdate from './components/NonTeachingStaff/NonTeachingStaffUpdate';
import NonTeachingStaffDelete from './components/NonTeachingStaff/NonTeachingStaffDelete';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>school management system</h1>
      <StudentGet/>
      <StudentSave/>
      <StudentUpdate/>
      <StudentDelete/>
      <TeachingStaffGet/>
      <TeachingStaffSave/>
      <TeachingStaffUpdate/>
      <TeachingStaffDelete/>
      <NonTeachingStaffGet/>
      <NonTeachingStaffSave/>
      <NonTeachingStaffUpdate/>
      <NonTeachingStaffDelete/>
    </>
  )
}

export default App;
