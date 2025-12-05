import React from "react";
import { useNavigate } from "react-router-dom";

function PaymentFailed() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] text-center">
      <h2 className="text-2xl font-bold text-red-600">Payment Failed ❌</h2>
      <p className="text-gray-600 mt-2">Something went wrong, please try again.</p>
      <button
        onClick={() => navigate("/checkout")}
        className="mt-6 bg-black text-white px-6 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
}

export default PaymentFailed;
