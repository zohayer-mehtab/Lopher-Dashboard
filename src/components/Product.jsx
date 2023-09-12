import React from "react";
import sneaker from "../assets/images/sneaker.png";

const Product = () => {
  return (
    <div className="block rounded w-32 h-36 ml-2.5 bg-gray-100 shadow-md my-2.5">
      <img src={sneaker} className="w-16 h-18 ml-2.5" />
      <p className="font-semibold text-sm ml-2.5">Nike Air Max</p>
      <p className="ml-2.5 mb-3 text-sm text-gray-600">$99.99</p>
    </div>
  );
};
export default Product;
