import React from "react";
import "../../styles/featuresProducts.css";
import { useNavigate } from "react-router-dom";

const FeaturedProduct = ({ productName, imageSrc }) => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(name);
  };

  return (
    <div className="products-box">
      <button onClick={() => handleClick("products")}>
        <div className="image">
          <img src={imageSrc} alt={productName} className="w-full h-auto" />
        </div>
        <p className="font-semibold mt-2 text-center">{productName}</p>
      </button>
    </div>
  );
};

export default FeaturedProduct;
