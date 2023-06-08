import React from 'react'
import "./Slider.css";
import Forms from './Forms';
import { Link } from 'react-router-dom';

function Sliders() {

    return (
        <>
            <section className="home-slider owl-carousel">

                    <div className="slider-item" > {/*style={{ backgroundImage: `url(${bg1})` }}*/}
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

                                <div className="col-md-8 col-sm-12 text-center ftco-animate">
                                    <span className="subheading">Welcome</span>
                                    <h1 className="mb-4">The Best Coffee Testing Experience</h1>
                                    <p className="mb-4 mb-md-5">Amazing Taste &amp; Beautiful Place, Creamy Hot and Ready to Serve</p>
                                    <p><a href='#' className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> 
                                    <Link to="/menu" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</Link></p>
                                </div>

                            </div>
                        </div>
                    </div>
            </section>
            <Forms />
        </>
    )
}

export default Sliders