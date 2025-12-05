import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import {Link} from 'react-router-dom'
function ProductItems({ id, price, name, image }) {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-400 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition  ease-in-out"
          src={image[0]}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-gray-700 text-sm font-medium">
        {currency} {price}
      </p>
    </Link>
  );
}

export default ProductItems;
