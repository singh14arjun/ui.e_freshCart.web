import React from "react";
import "../../styles/productCard.css";

const ProductCard = ({
  imageSrc,
  category,
  name,
  rating,
  reviews,
  price,
  originalPrice,
  offer,
  tag,
}) => {
  return (
    <div className="products">
      <div className="cardd border rounded-lg p-4 ">
        <div className="tag-offer w-100 h-4">
          {tag && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {tag}
            </span>
          )}

          {offer && (
            <span className="ml-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {offer}
            </span>
          )}
        </div>

        <img
          src={imageSrc}
          alt={name}
          className="w-full h-40 object-contain my-3"
        />

        <div className="content-menu">
          <p className="text-sm text-gray-500">{category}</p>

          <p className="font-semibold text-md text-gray-800">{name}</p>

          <div className="flex items-center text-sm text-yellow-500">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
            <span className="text-gray-600 ml-1">
              ({rating} ({reviews}))
            </span>
          </div>

          <div className="price_add flex justify-between">
            <div className="mt-2 flex items-center gap-2">
              <span className="font-bold text-lg">${price}</span>
              {originalPrice && (
                <span className="text-gray-500 line-through">
                  ${originalPrice}
                </span>
              )}
            </div>

            <button className="mt-3 bg-green-800 text-white px-2 py-1 rounded hover:bg-green-600 text-sm">
              + Add
            </button>
          </div>
        </div>

        <div className="hidden-btn flex gap-2">
          <button>
            <i className="fa-solid fa-eye"></i>
          </button>
          <button>
            <i className="fa-solid fa-heart"></i>
          </button>
          <button>
            <i className="fa-solid fa-code-compare"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
