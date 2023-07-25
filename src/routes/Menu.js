import React from 'react'
import "./Menu.css";
import "../compoments/Slide.css"
import starter from "../assests/images/Starter.png"
import mug from "../assests/images/mug3.png"
import drink from "../assests/images/drinksss.png"
import dessert from "../assests/images/dessertt.png"
import { Starters } from "../Data/MenuData"
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import Product from '../compoments/Product';
import Footer from '../compoments/Footer';

function Menu() {

  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success(("Added to cart"));
  }
  return (
    <>
      <section className="ftco-menu">

        <div className="container">
          <div className='menu-heading'>
            <div className="col-md-7 heading-section ftco-animate text-center">
              <span className="subheading">Our Menu</span>

            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5 pb-3">
              <div className='Startter d-flex'>
                <img src={mug} />
                <h3 className="m-5 heading-pricing ftco-animate">coffee</h3>

              </div>
              {Starters.slice(8 ,16).map((item) => {
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
              <div className='Startter Startter_d d-flex'>
                <img src={drink} />
                <h3 className="m-5 heading-pricing ftco-animate">Drinks</h3>

              </div>              {Starters.slice(16, 22).map((item) => {
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
            <div className='Startter_s d-flex'>
                <img src={starter} />
                <h3 className="m-5 heading-pricing ftco-animate">Starter</h3>
                </div>
              {Starters.slice(0,8).map((item) => {
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
              <div className='Startter_s d-flex'>
                <img src={dessert} />
                <h3 className="m-5 heading-pricing ftco-animate">Dessert</h3>

              </div> 
              {Starters.slice(22).map((item) => {
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
      <Footer />
    </>
  )
}

export default Menu