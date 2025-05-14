import React from "react";

const WishListProduct = ({
  imageSrc,
  productName,
  productPrice,
  productStatus,
  productAction,
}) => {
  const isInStock =
    typeof productStatus === "string" &&
    productStatus.toLowerCase().includes("in stock");

  return (
    <tr className="border-t-2 border-black">
      <td className="text-center ">
        <img
          src={imageSrc}
          alt={productName || "Product"}
          style={{ width: "100px", height: "100px" }}
          className="mx-auto"
        />
      </td>
      <td className="text-center">{productName || "No Name"}</td>
      <td className="text-center">${productPrice || "0.00"}</td>
      <td>
        <p
          className={` border-black hover:bg-gray-100 text-center m-auto w-fit px-1 rounded-2xl ${
            isInStock ? "bg-green-400" : "bg-red-500"
          }`}
        >
          {productStatus || "Stock"}
        </p>
      </td>
      <td className="text-center">{productAction || "Add to Cart"}</td>
      <td className="text-center">
        <i className="fa-solid fa-trash cursor-pointer"></i>
      </td>
    </tr>
  );
};

export default WishListProduct;
