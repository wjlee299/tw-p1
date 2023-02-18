import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar></Navbar>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
    </Routes>
    
    </>
  )
}
