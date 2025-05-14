import React from "react";
import WishListProduct from "./WishListProduct";

const Wishlist = () => {
  return (
    <div className="mx-20">
      <h1>My WishList</h1>
      <p>There are 4 products in this wishlist</p>

      <table className="w-full ">
        <thead>
          <tr className="bg-gray-400 h-10 text-center">
            <th></th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <WishListProduct
            imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-18.jpg"
            productName="Apple"
            productPrice="299.99"
            productStatus="In Stock"
            productAction="Add to Cart"
          />
          <WishListProduct
            imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-19.jpg"
            productName="Onion"
            productPrice="149.99"
            productStatus="Out of Stock"
            productAction="Notify Me"
          />
          <WishListProduct
            imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-13.jpg"
            productName="Golden Pineapple"
            productPrice="149.99"
            productStatus="In Stock"
            productAction="Notify Me"
          />
          <WishListProduct
            imageSrc="https://freshcart-next-js.vercel.app/images/products/product-img-17.jpg"
            productName="Fresh Kiwi"
            productPrice="149.99"
            productStatus="Out of Stock"
            productAction="Notify Me"
          />
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
