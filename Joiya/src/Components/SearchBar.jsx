import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
   const [visible, setvisiable] = useState(false)
    const location = useLocation()

    useEffect(()=>{
      console.log(location.pathname);
      
         if (location.pathname.includes("collection")){
            setvisiable(true)
         }else{
            setvisiable(false)
         }
    },[location])


  return showSearch && visible ? (
    <div className="border-t boder-b border-gray-50 bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-3 my-5 mx-3 rounded-full ">
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className="flex-1 outline-none bg-inherit text-sm" type="text" placeholder="Search"/>
        <img src={assets.search_icon} className="w-4" />
      </div>
      <img onClick={()=>setShowSearch(false)} className="inline w-3 cursor-pointer" src={assets.cross_icon} />
    </div>
  ) : null;
}

export default SearchBar;
