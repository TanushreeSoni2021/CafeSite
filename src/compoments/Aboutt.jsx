import React from 'react'
import "./Aboutt.css"
import { GiCoffeeCup } from "react-icons/gi"
// import bg from "../assests/images/bg_2.jpg";

function Aboutt() {
    // let imgStyle= {
    //     backgroundImage: `url("${bg}")`,
    //     innerWidth : "50%"
    // }
    return (
        <>
            <section className="imgs" id="section-counter"> {/* style={imgStyle}*/}
                <div className="overlay"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <div className="icons"><span><GiCoffeeCup /></span></div>
                                            <strong className="number" data-number="100">100</strong>
                                            <p>Coffee Branches</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <div className="icons"><span><GiCoffeeCup /></span></div>
                                            <strong className="number" data-number="85">85</strong>
                                            <p>Number of Awards</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <div className="icons"><span><GiCoffeeCup /></span></div>
                                            <strong className="number" data-number="10567">10567</strong>
                                            <p>Happy Customer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <div className="icons"><span><GiCoffeeCup /></span></div>
                                            <strong className="number" data-number="900">900</strong>
                                            <p>Staff</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutt