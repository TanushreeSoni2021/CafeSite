import React from 'react'
import "./Menu.css";
import "../compoments/Slide.css"
import Slide from '../compoments/Slide';
import Forms from '../compoments/Forms';
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
      <section className="ftco-slide">
        <Slide heading="OUR MENU" />
      </section>
      <Forms />
      <section className="ftco-menu">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 pb-3">
              <h3 className="mb-5 mt-5 heading-pricing ftco-animate">Starter</h3>
              {Starters.slice(0,12).map((item) => {
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
              <h3 className="mb-5 mt-5 heading-pricing ftco-animate">Desserts</h3>
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