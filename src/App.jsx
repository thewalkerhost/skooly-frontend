import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import StaffPage from "./pages/StaffPage.jsx";
import Navbar from "./components/Navbar.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import StudentList from "./pages/StudentList.jsx";
import StaffList from "./components/staff/StaffList.jsx";
import AddStaff from "./pages/AddStaff.jsx";
import TeacherList from "./pages/TeacherList.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import AddTeacher from "./pages/AddTeacher.jsx";

function App() {
  return (
    <>
      <Navbar>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/staff">Staff Management</Link></li>
          {/* Future modules like Teacher, Student can go here */}
        </ul>
      </Navbar>
      <Routes>
        {/* Root routes */}
        <Route path="/" element={<Home/>}/>
        <Route path="/staff/*" element={<StaffPage/>}/>
        
        {/* Authentication-related routes */}
        <Route path="/login" element={<AdminLogin/>}/>
        
        {/* Private routes */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path="/students" element={<PrivateRoute><StudentList/></PrivateRoute>}/>
        <Route path="/students/add" element={<PrivateRoute><AddStudent/></PrivateRoute>}/>
        <Route path="/teachers" element={<PrivateRoute><TeacherList/></PrivateRoute>}/>
        <Route path="/teachers/add" element={<PrivateRoute><AddTeacher/></PrivateRoute>}/>
        <Route path="/staff" element={<PrivateRoute><StaffList/></PrivateRoute>}/>
        <Route path="/staff/add" element={<PrivateRoute><AddStaff/></PrivateRoute>}/>
      </Routes>
    </>
  );
}

export default App;