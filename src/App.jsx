import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import AboutComponent from './components/AboutComponent'
import ContactComponent from './components/ContectComponent'
import { FooterComponent } from './components/FooterComponent'
import MainComponent from './components/MainComponent'
import { NavbarComponent } from './components/NavbarComponent'
import ProductComponent from './components/ProductComponent'
import HomeComponent from "./components/HomeCOmponent";
import LoginFormComponent from "./components/LoginFormComponent";
import RegisterComponent from "./components/RegisterComponent";
import ProductDetail from "./components/ProductDetail";

function App() {
  

  return (
    <>
      <NavbarComponent/>
      
    <Router>
      {/* <MainComponet/> */}
      <Routes>
      <Route path="/" element={<MainComponent/>} />
        <Route path="/home" element={<HomeComponent/>} />
        <Route path="/about" element={<AboutComponent/>} />
        <Route path="/product" element={<ProductComponent/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/contact" element={<ContactComponent/>} />
        <Route path="/login" element={<LoginFormComponent/>} />
        <Route path="/register" element={<RegisterComponent/>} />
       

      </Routes>
    </Router>
      <FooterComponent/>
    </>
  )
}

export default App
