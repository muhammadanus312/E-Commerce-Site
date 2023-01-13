import React, { useEffect } from "react";
import style from "./Cart.module.css";
import style1 from "../ProductCard/ProductCard.module.css";
import logo from "../../assets/images/icons/Icon-1.svg";
import trash from "../../assets/images/icons/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  IncreamentCartProduct,
  RemoveCartProduct,
  DecreamentCartProduct,
} from "../../redux/CartProducts/CartProductSlice";
const Cart = () => {
  const dispach = useDispatch();
  const cart = useSelector((state) => {
    return state.cartProducts.cartProducts;
  });
  const removeFromCart = (p_id) => {
    dispach(RemoveCartProduct(p_id));
  };

  return (
    <div className={`my-5`}>
      <div className={`${style.cart} d-flex flex-column`}>
        {cart.cartProducts.length > 0 ? (
          cart.cartProducts.map((element, index) => {
            return (
              <div className={`d-flex align-items-center ${style.cartProduct}`}>
                <img
                  className={`${style.productImg}`}
                  src={element.productImg}
                  alt=""
                />
                <div className={`d-flex flex-column mx-3`}>
                  <span className={`d-flex justify-content-between`}>
                    <p className={`text-wrap ${style.product}`}>
                      {element.productName}
                    </p>
                    <div>
                      <span>R$</span>
                      <span className={`${style1.price}`}>
                        {element.productPrice}
                      </span>
                    </div>
                  </span>
                  <div className={`d-flex `}>
                    <div className={`${style.counter}`}>
                      <button
                        className={`${style.counterBtn}`}
                        onClick={() => {
                          dispach(DecreamentCartProduct(element));
                        }}
                      >
                        -
                      </button>
                      <span className={`border-none p-2`}>
                        {element.quantity}
                      </span>
                      <button
                        className={`${style.counterBtn}`}
                        onClick={() => {
                          dispach(IncreamentCartProduct(element));
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        removeFromCart(element.productId);
                      }}
                      className={` mx-2 ${style.counter} d-flex`}
                    >
                      <img
                        className="m-auto"
                        height="15px"
                        width="15px"
                        src={trash}
                        alt=""
                      />
                      <p className={` ${style.remover}`}>REMOVE</p>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="d-flex justify-content-center align-items-center fw-bold">
            Cart Empty
          </h1>
        )}
        <div className={`d-flex justify-content-between mt-3`}>
          <div className={`mx-3 my-2`}>Total Item Price</div>
          <div className={`mx-3 my-2`}>
            <span className={`mx-1`}>R$</span>
            <span className={`mx-1`}>{cart.cartProducts.length>0?Number(cart.total).toFixed(2):0}</span>
          </div>
        </div>
        <div className={`d-flex justify-content-between`}>
          <div className={`mx-3 my-2`}>Discount</div>
          <div className={`mx-3 my-2`}>
            <span className={`mx-1`}>R$</span>
            <span className={`mx-1`}>-{cart.discount}</span>
          </div>
        </div>
        <div className={`d-flex justify-content-between`}>
          <div className={`mx-3 my-2`}>
            <h3 className="fw-bold">Total</h3>
          </div>
          <div className={`mx-3 my-2`}>
            <h3 className="fw-bold">
              <span className={`mx-1`}>R$</span>
              <span className={`mx-1`}>{cart.cartProducts.length>0?Number(cart.totalBill).toFixed(2):0}</span>
            </h3>
          </div>
        </div>
        <button className={`mx-4 my-3 ${style.confirm}`}>Confirm Order</button>
      </div>
    </div>
  );
};

export default Cart;
