import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sliders from '../compoments/Sliders';
import Discover from '../compoments/Discover';
import Services from '../compoments/Services';
import Smallmenu from '../compoments/Smallmenu';
import Aboutt from '../compoments/Aboutt';
import Best from '../compoments/Best';
import Gallery from '../compoments/Gallery';
import Footer from '../compoments/Footer';

function Home() {
  return (
    <>
   <Sliders />
   <Discover />
   <Services />
   <Smallmenu />
   <Aboutt />
   <Best />
   <Gallery />
   <Footer />
    </>
  )
}

export default Home