import React from 'react'
import "../routes/Menu.css";

function Product({ name, id, price, handler, imgSrc }) {
  return (
    <>
      <div className="pricing-entry d-flex ftco-animate">
        <div className="img"><img src={imgSrc} /></div>
        <div className="desc pl-3">
          <div className="d-flex text align-items-center">
            <h3><span>{name}</span></h3>
            <span className="price">${price}
            </span>
          </div>
          <div className="d-block">
            <p>A small river named Duden flows by their place and supplies</p>
          </div>
          <div className='add-btn'>
            <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
              Add to cart</button></div>

        </div>
      </div>
    </>
  )
}

export default Product;