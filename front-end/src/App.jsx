import './App.css'
import Footer from './layouts/Footer'
import Home from './Pages/Home/Home'
import NavBar from './layouts/Navbar'
import Employments from './Pages/Employments/Employments'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Register from './Pages/Register/Register'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />    
        {/* <Route exact path='/register' element={<Register/>} /> */}    
        <Route exact path='/employments' element={<Employments/>} />    
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App