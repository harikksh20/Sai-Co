import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

        <div className="text-7xl mb-5">
          ✅
        </div>

        <h1 className="text-4xl font-bold text-green-600">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-500 mt-4">
          Thank you for your order.
        </p>

        <Link to="/">
          <button className="mt-8 bg-amber-700 text-white px-8 py-4 rounded-xl">
            Continue Shopping
          </button>
        </Link>

      </div>
    </div>
  );
}

export default OrderSuccess;