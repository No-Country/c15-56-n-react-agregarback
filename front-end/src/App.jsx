import "./App.css";
import Footer from "./layouts/Footer";
import Home from "./Pages/Home/Home";
import NavBar from "./layouts/Navbar";
//import EmployementDetails from "./Pages/EmploymentDetails/EmploymentDetails";
// import Register from './Pages/Register/Register'

function App() {
  return (
    <div className="h-screen">
      <NavBar />
      <Home />
      {/* <Register/> */}
      {/*<EmployementDetails />*/}
      <Footer />
    </div>
  );
}

export default App;
