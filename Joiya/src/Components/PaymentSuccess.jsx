import React from "react";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] text-center">
      <h2 className="text-2xl font-bold text-green-600">Payment Successful ✅</h2>
      <p className="text-gray-600 mt-2">Thank you for your order!</p>
      <button
        onClick={() => navigate("/orders")}
        className="mt-6 bg-black text-white px-6 py-2 rounded"
      >
        View Orders
      </button>
    </div>
  );
}

export default PaymentSuccess;
