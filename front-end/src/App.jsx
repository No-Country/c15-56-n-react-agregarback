import './App.css'
import Footer from './layouts/Footer'
import Home from './Pages/Home/Home'
import NavBar from './layouts/Navbar'
// import Register from './Pages/Register/Register'

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      {/* <Register/> */}
      <Footer/>
    </>
  )
}

export default App