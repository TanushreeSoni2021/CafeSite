import React from 'react'
import "./Gallery.css";
import g1 from "../assests/images/gallery-1.jpg";
import g2 from "../assests/images/gallery-2.jpg";
import g3 from "../assests/images/gallery-3.jpg";
import g4 from "../assests/images/gallery-4.jpg";

function Gallery() {
    return (
        <>

            <section className="ftco-gallery">
                <div className="container-wrap row justify-content-center mb-5 pb-3 ">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                        <span className="subheading">Discover</span>
                        <h2 className="mb-4">Our Gallery</h2>

                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-3 ftco-animate">
                            <a href="gallery.html" className="gallery d-flex align-items-center">
                                <img src={g1} />
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href="gallery.html" className="gallery d-flex align-items-center">
                                <img src={g2} />
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href="gallery.html" className="gallery d-flex align-items-center">
                                <img src={g3} />
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href="gallery.html" className="gallery d-flex align-items-center">
                                <img src={g4} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery