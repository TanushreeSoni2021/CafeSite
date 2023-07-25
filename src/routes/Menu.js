import React from 'react'
import "./Menu.css";
import "../compoments/Slide.css"
// import starter from "../assests/images/Starter.png"
// import mug from "../assests/images/mug3.png"
// import drink from "../assests/images/drinksss.png"
// import dessert from "../assests/images/dessertt.png"
import { Starters } from "../Data/MenuData"
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import Product from '../compoments/Product';

function Menu() {

  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success(("Added to cart"));
  }
  return (
    <>
      {/* <section className='ftco-menucard'>
        <div className="container">
          <div className='menu-heading'>
            <div className="col-md-7 heading-section ftco-animate text-center">
              <span className="subheading">Our Menu</span>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-3'>
              <div className='Startter'>
                <img src={mug} />
              </div>
            </div>
            <div className='col-lg-3 col-md-3'>
              <div className='Startter'>
                <img src={starter} />
              </div>
            </div>
            <div className='col-lg-3 col-md-3'>
              <div className='Startter'>
                <img src={drink} />
              </div>
            </div>
            <div className='col-lg-3 col-md-3'>
              <div className='Startter'>
                <img src={dessert} />
              </div>
            </div>

          </div>
          <div className='row'>

            {small.map((item, index) => {
              return (
                <>
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto img-fluid" key={index}>

                  <Product
                    key={item.id}
                    imgSrc={item.imgSrc}
                    name={item.name}
                    price={item.price}
                    id={item.id}
                    handler={addToCartHandler}
                  />
                  </div>
                </>
              )
            })}
          </div>



        </div>
      </section>
 */}







      <section className="ftco-menu">

        <div className="container">
          <div className='menu-heading'>
            <div className="col-md-7 heading-section ftco-animate text-center">
              <span className="subheading">Our Menu</span>

            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5 pb-3">
              <h3 className="mb-5  heading-pricing ftco-animate">Starter</h3>
              {Starters.slice(0, 12).map((item) => {
                return (
                  <Product
                    key={item.id}
                    imgSrc={item.imgSrc}
                    name={item.name}
                    price={item.price}
                    id={item.id}
                    handler={addToCartHandler}
                  />
                )
              })}
            </div>
            <div className="col-md-6">
              <h3 className="mb-5 heading-pricing ftco-animate">Desserts</h3>
              {Starters.slice(12).map((item) => {
                return (
                  <Product
                    key={item.id}
                    imgSrc={item.imgSrc}
                    name={item.name}
                    price={item.price}
                    id={item.id}
                    handler={addToCartHandler}
                  />
                )
              })

              }

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Menu