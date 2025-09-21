import React from "react";
import ProductItems from "./ProductItems";
const Products = () => {
  return (
    <div className="px-20">
      <div className="productCard flex gap-5">
        <div className="side1 w-20 mx-10">
          <h3>Price</h3>
          <input type="range" />
        </div>
        <div className="side2">
          <h1 className="bg-gray-500  mx-20 px-10 py-6 rounded-2xl">
            Product Page
          </h1>

          <ProductItems />
        </div>
      </div>
    </div>
  );
};

export default Products;
