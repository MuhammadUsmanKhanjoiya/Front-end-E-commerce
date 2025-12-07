import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

function List() {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/product/list`);
      if (response.data.success) {
        setList(response.data.product);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const RemoveList = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`${backendUrl}/api/product/remove`, {
        headers: { token },
        data: { id },
      });

      toast.success(response.data.message);
      await fetchList();
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2 font-semibold text-lg">All Product List</p>

      <div className="flex flex-col gap-2">
        {/* Header row (visible only on md and up) */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 bg-gray-200 text-gray-800 text-sm font-medium rounded">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* Product list */}
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 bg-gray-100 rounded text-gray-700 text-sm"
          >
            <img
              className="w-12 "
              src={item.image?.[0] || ""}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p
              onClick={() => RemoveList(item._id)}
              className="text-right md:text-center cursor-pointer text-lg"
            >
              ×
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
