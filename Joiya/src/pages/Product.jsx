import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import ReloadProduct from "../Components/ReloadProduct";
function Product() {
  const { productId } = useParams();
  const { products, currency, AddToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const FatchProducts = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        console.log(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };
  useEffect(() => {
    FatchProducts();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-20 transform-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto " src={image} />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center  gap-1 mt-2">
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_dull_icon} className="w-3 5" alt="" />
            <p className="pl-2">(133)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-3 text-gray-500 md-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.size.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={` py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500  border " : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="">
            <button
              onClick={() => AddToCart(productData._id, size)}
              className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            >
              ADD TO CART
            </button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% original product.</p>
              <p>Cash on delivery is available on this product. </p>
              <p>Easy return and exchange policy on this product for 7 days</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-300 px-5 py-3 text-sm">
            Description
          </b>
          <p className="border border-gray-300 px-5 py-3 text-sm">
            Reveiws (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-700">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum ipsa
            soluta expedita accusamus animi iure veritatis earum ipsam, quo esse
            veniam, commodi aut blanditiis atque illum incidunt! Quam nihil
            laboriosam consequuntur, fugit adipisci, quo, architecto recusandae
            tempora quaerat aliquam porro similique fugiat totam ipsa veniam
            inventore? Praesentium possimus, consequatur accusantium provident
            alias tempore numquam voluptates illo facilis amet. Nostrum, totam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            culpa magnam aperiam possimus ducimus sint non cum repudiandae,
            consequuntur minima eius voluptas porro eos tempora quidem molestiae
            quisquam, tempore facilis. Dolorum consequuntur natus veniam quam
            accusamus cupiditate ipsam repellat! Distinctio, omnis? Magni,
            labore enim repellendus eius tenetur sint consequatur eligendi
            officiis similique minus facilis impedit minima odit recusandae eos
            voluptates?
          </p>
        </div>
      </div>
      <ReloadProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
