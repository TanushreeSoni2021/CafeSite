import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './routes/Home';
import Header from './compoments/Header';
import About from './routes/About';
import Menu from './routes/Menu';
import Serviceees from './routes/Serviceees';
import Contact from './routes/Contact';
import AddProduct from './routes/AddProduct';
import {Toaster} from "react-hot-toast"

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Serviceees />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/add' element={<AddProduct />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;


/*
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props){
    const {Compt} = props
    const navigate =useNavigate();
    useEffect(()=>{
        let email =localStorage.getItem('email');
        if(!email){
            navigate('/register')
        }
    }); 
    return(
        <div>
            <Compt />
        </div>
    )
}

export default Protected;


calling ---
          <Route path="/" element={<Protected Compt={Home} />} />

*/