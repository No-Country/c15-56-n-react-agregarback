import "./App.css";
import Footer from "./layouts/Footer";
import Home from "./Pages/Home/Home";
import NavBar from "./layouts/Navbar";
import Login from "./Pages/Login/Login";
import Employments from "./Pages/Employments/Employments";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register/Register";
import EmploymentsDetails from "./Pages/EmploymentDetails/EmploymentDetails";
import Devs from "./Pages/Devs/Devs";
import { AuthProvider } from "./context/AuthContext";
import UserProfile from "./Pages/UserProfile/UserProfile";

function App() {
  return (

    <AuthProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/employments" element={<Employments />} />
        <Route exact path="/devs" element={<Devs />} />
        <Route exact path="/employments-details" element={<EmploymentsDetails />} />
        <Route exact path="/dev-profile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>

    </AuthProvider>
  );
}

export default App
