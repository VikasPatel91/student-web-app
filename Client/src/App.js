import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavigationBar from "./component/Navbar.js";
import Home from "./component/Home";
import Insert from "./component/InsertStudent.js";
import StudentData from "./component/StudentData.js";
import Login from "./component/Login.js";
import SignUp from "./component/Signup.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/Insert-Student" element={<Insert></Insert>}></Route>
          <Route
            path="/Student-Data"
            element={<StudentData></StudentData>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
