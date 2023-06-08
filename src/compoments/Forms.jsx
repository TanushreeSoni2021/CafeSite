import React from 'react'
import "./Forms.css"
function Forms() {
    return (
        <>
  
            <section className="ftco-intro">
                <div className="container-fluid m-0 p-0">

                    <div className="row wrap d-md-flex align-items-xl-end">
                        <div className="col-xl-8 col-lg-8 col-md-8 info">
                            <div className="row no-gutters">
                                <div className="col-lg-4 col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
                                <div className="icon"><span><i className="fa-sharp fa-solid fa-phone"></i></span></div>
                                    <div className="text">
                                        <h3>000 (123) 456 7890</h3>
                                        <p>A small river named Duden flows by their place and supplies.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
                                <div className="icon"><span><i className="fa-sharp fa-solid fa-location-crosshairs"></i></span></div>
                                    <div className="text">
                                        <h3>198 West 21th Street</h3>
                                        <p> 203 Fake St. Mountain View, San Francisco, California, USA</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
                                <div className="icon"><span><i className="fa-sharp fa-regular fa-clock"></i></span></div>
                                    <div className="text">
                                        <h3>Open Monday-Friday</h3>
                                        <p>8:00am - 9:00pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 book p-4">
                            <h3>Book a Table</h3>
                            <form action="#" className="appointment-form">
                                <div className="d-md-flex">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="form-group ml-md-4">
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="d-md-flex">
                                    <div className="form-group">
                                        <div className="input-wrap">
                                            <div className="icon"><span className="ion-md-calendar"></span></div>
                                            <input type="text" className="form-control appointment_date" placeholder="Date" />
                                        </div>
                                    </div>
                                    <div className="form-group ml-md-4">
                                        <div className="input-wrap">
                                            <div className="icon"><span className="ion-ios-clock"></span></div>
                                            <input type="text" className="form-control appointment_time ui-timepicker-input" placeholder="Time" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group ml-md-4">
                                        <input type="text" className="form-control" placeholder="Phone" />
                                    </div>
                                </div>
                                <div className="d-md-flex">
                                    <div className="form-group">
                                        <textarea name="" id="" cols="30" rows="2" className="form-control" placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-group ml-md-4">
                                        <input type="submit" value="Appointment" className="btn btn-white py-3 px-4" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Forms