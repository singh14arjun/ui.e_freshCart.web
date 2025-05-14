import React from "react";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";

import "../styles/cart.css";

const Cart = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const handleClick = (name) => {
    navigate(name);
  };
  return (
    <div className="cartDisplay">
      <div className="cartOverLayperDisplay">
        <div className="top-heading flex justify-between  my-2 ">
          <h1>Shop Cart</h1>
          <button
            onClick={() => {
              handleClick("/");
            }}
          >
            <i className="fa-solid fa-xmark text-red-600 text-2xl border-black border-2  p-1 "></i>
          </button>
        </div>
        <table className="w-full  ">
          <CartItems
            imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-1.jpg"
            productName="Haldiram Sev Bhujia"
            qty=""
            numberOfProducts={2}
            productPrice={23}
          />
          <CartItems
            imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-2.jpg"
            productName="NutriChoice Digestive"
            qty="200gm"
            numberOfProducts={1}
            productPrice={27}
          />
          <CartItems
            imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-3.jpg"
            productName="Cadbury 5 Star Chocolate"
            qty=".98lb"
            numberOfProducts={2}
            productPrice={23}
          />
          <CartItems
            imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-3.jpg"
            productName="Cadbury 5 Star Chocolate"
            qty=".98lb"
            numberOfProducts={2}
            productPrice={23}
          />
          <CartItems
            imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-3.jpg"
            productName="Cadbury 5 Star Chocolate"
            qty=".98lb"
            numberOfProducts={2}
            productPrice={23}
          />
          <CartItems
            imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-3.jpg"
            productName="Cadbury 5 Star Chocolate"
            qty=".98lb"
            numberOfProducts={2}
            productPrice={23}
          />
        </table>
      </div>
    </div>
  );
};

export default Cart;
