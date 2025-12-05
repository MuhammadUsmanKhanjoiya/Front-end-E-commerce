import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItems";
function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [ShowFilters, setShowFilters] = useState(false);
  const [FilterProducts, setFilterProducts] = useState([]);
  const [Category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [sortType, setsortType] = useState("relavent");
  const toggleCategory = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (SubCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const ApplyFilter = () => {
    let ProductsCopy = products.slice();
    if (showSearch && search) {
      ProductsCopy = ProductsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (Category.length > 0) {
      ProductsCopy = ProductsCopy.filter((item) =>
        Category.includes(item.category)
      );
    }
    if (SubCategory.length > 0) {
      ProductsCopy = ProductsCopy.filter((item) =>
        SubCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(ProductsCopy);
  };

  const SortProducts = () => {
    let STProducts = FilterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(STProducts.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(STProducts.sort((a, b) => b.price - a.price));
        break;
      default:
        ApplyFilter();
        break;
    }
  };

  useEffect(() => {
    ApplyFilter();
  }, [SubCategory, Category, search, showSearch, products]);
  useEffect(() => {
    SortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS{" "}
          <img
            onClick={() => setShowFilters(!ShowFilters)}
            src={assets.dropdown_icon}
            className={`w-2 sm:hidden block ${ShowFilters ? "rotate-90" : ""}`}
          />
        </p>
        <div
          className={`border border-gray-300 pl-3 py-3  my-5 ${
            ShowFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3  text-sm  font-medium">Category</p>
          <div className="flex flex-col gap-2 text-sm font-light  text-gray-700">
            <p className="flex gap-2 ">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleCategory}
                value={"Men"}
              />
              Men
            </p>
            <p className="flex gap-2 ">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleCategory}
                value={"Women"}
              />
              Women
            </p>
            <p className="flex gap-2 ">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleCategory}
                value={"Kids"}
              />
              kids
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-3 py-3  mt-6 ${
            ShowFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3  text-sm  font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light  text-gray-700">
            <p className="flex gap-2 ">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleSubCategory}
                value={"Topwear"}
              />
              Topwear
            </p>
            <p className="flex gap-2 ">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleSubCategory}
                value={"bottomwear"}
              />
              Bottomwear
            </p>
            <p className="flex gap-2 ">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleSubCategory}
                value={"Winterwear"}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"All"} text2={"Collection"} />
          <select
            onChange={(e) => setsortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2 "
          >
            <option value={"relavent"}>Sort by : Relavent</option>
            <option value={"low-high"}>Sort by : Low to High</option>
            <option value={"high-low"}>Sort by : High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-4">
          {FilterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
