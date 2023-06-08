import React from 'react'
import "./Slide.css";

function Slide(props) {
  return (
    <>
        <div className="slide" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row headline justify-content-center align-items-center">
              <div className="col-md-7 col-sm-12 text-center ftco-animate">
                <h1 >{props.heading}</h1>
              </div>

            </div>
          </div>
        </div>
  
      
    </>
  )
}

export default Slide