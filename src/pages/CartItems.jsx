import React from "react";

const CartItems = ({
  imageSrc,
  productName,
  qty,
  numberOfProducts,
  productPrice,
}) => {
  const totalPrice = numberOfProducts * productPrice;

  return (
    <tr className="w-full border border-black text-center">
      <td className="p-2">
        <div className="flex justify-center items-center">
          <img src={imageSrc} alt={productName} className="w-16 h-auto" />
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center justify-center">
          <p>{productName}</p>
          <p>{qty || " "}</p>
          <button className="px-2">
            <i className="fa-solid fa-trash"></i> Remove
          </button>
        </div>
      </td>
      <td className="p-5">
        <div className="flex items-center justify-center">
          <button className="border-2 px-2 font-bold m-1">-</button>
          <span>{numberOfProducts}</span>
          <button className="border-2 px-2 font-bold m-1">+</button>
        </div>
      </td>
      <td>
        <div className="flex justify-center items-center">
          ${totalPrice || 0}
        </div>
      </td>
    </tr>
  );
};

export default CartItems;
