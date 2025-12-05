import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import CardTotle from "../Components/CardTotle";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

function Place_Order() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  console.log("🟠 Token on order page:", token);

  const [method, setMethod] = useState("cod");

  const {
    navigate,
    backendUrl,
    cartItems,
    getCartAmount,
    setCartItems,
    products,
    delivery_fee,
  } = useContext(ShopContext);

  const [fromData, setFromData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFromData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: fromData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod":
          const response = await axios.post(
            "http://localhost:8000/api/order/place",
            orderData,
            { headers: { token } }
          );
          console.log(response.data);
          toast(response.data.message)
          setCartItems({});
          navigate("/login");
          break;

        case "payfast":
          try {
            const payfastResponse = await axios.post(
              "https://unethnological-nonapportionable-mia.ngrok-free.dev/api/order/place/payfast",
              { ...orderData, email: fromData.email || "test@example.com" },
              { headers: { token } }
            );
            console.log("🔹 PayFast order data:", {
              ...orderData,
              email: fromData.email,
            });
            console.log("🔵 PayFast full response:", payfastResponse);
            console.log("🟢 PayFast data:", payfastResponse.data);
            if (payfastResponse.data.success) {
              console.log(
                "Redirecting to PayFast:",
                payfastResponse.data.paymentUrl
              );
              window.open(payfastResponse.data.paymentUrl, "_self");
            } else {
              console.error("PayFast failed:", payfastResponse.data);
              alert("Failed to start PayFast payment");
            }
          } catch (error) {
            console.error("🚨 PayFast Axios error:", err);
            alert("Error connecting to PayFast endpoint");
          }
          break;

        default:
          break;
      }

      console.log(orderItems);
    } catch (error) {}
  };

  return (
    <form
      onSubmit={onSubmitHandle}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t-2 "
    >
      {}
      <div className="flex flex-col gap-4  w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandle}
            name="firstName"
            value={fromData.firstName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            required
            onChange={onChangeHandle}
            name="lastName"
            value={fromData.lastName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          required
          onChange={onChangeHandle}
          name="email"
          value={fromData.email}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Email address"
        />
        <input
          required
          onChange={onChangeHandle}
          name="street"
          value={fromData.street}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="street"
        />
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandle}
            name="city"
            value={fromData.city}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            required
            onChange={onChangeHandle}
            name="state"
            value={fromData.state}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandle}
            name="zipcode"
            value={fromData.zipcode}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            required
            onChange={onChangeHandle}
            name="country"
            value={fromData.country}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          onChange={onChangeHandle}
          name="phone"
          value={fromData.phone}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>
      {}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CardTotle />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row ">
            <div
              onClick={() => setMethod("payfast")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "payfast" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" alt="" src={assets.stripe_logo} />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" alt="" src={assets.razorpay_logo} />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end  mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Place_Order;
