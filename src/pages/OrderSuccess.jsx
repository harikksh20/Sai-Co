import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-lg">

        <div className="text-7xl mb-6">
          ✅
        </div>

        <h1 className="text-5xl font-bold text-green-600">
          Order Placed!
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Thank you for choosing Sai & Co.
          Your order has been successfully placed.
        </p>

        <Link to="/">
          <button className="mt-8 bg-amber-700 text-white px-8 py-4 rounded-xl hover:bg-black transition">
            Continue Shopping
          </button>
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;