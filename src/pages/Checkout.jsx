import {
  FaCreditCard,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1
          className="text-5xl font-bold text-center mb-14"
          style={{
            fontFamily: "Cinzel",
          }}
        >
          Secure Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Customer Details
            </h2>

            <div className="space-y-5">

              <div className="flex items-center border rounded-xl p-4">
                <FaUser className="text-amber-700 mr-4" />

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full outline-none"
                />
              </div>

              <div className="flex items-center border rounded-xl p-4">
                <FaPhone className="text-amber-700 mr-4" />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full outline-none"
                />
              </div>

              <div className="flex items-start border rounded-xl p-4">
                <FaMapMarkerAlt className="text-amber-700 mr-4 mt-1" />

                <textarea
                  rows="4"
                  placeholder="Delivery Address"
                  className="w-full outline-none"
                />
              </div>

            </div>

            <h3 className="text-2xl font-bold mt-10 mb-6">
              Payment Method
            </h3>

            <div className="space-y-4">

              <label className="flex items-center border rounded-xl p-5 cursor-pointer hover:border-amber-600 transition">
                <input
                  type="radio"
                  name="payment"
                  className="mr-4"
                />

                <FaCreditCard className="text-amber-700 mr-3" />

                Credit / Debit Card
              </label>

              <label className="flex items-center border rounded-xl p-5 cursor-pointer hover:border-amber-600 transition">
                <input
                  type="radio"
                  name="payment"
                  className="mr-4"
                />

                <FaMoneyBillWave className="text-green-600 mr-3" />

                Cash On Delivery
              </label>

            </div>

          </div>

          {/* Right */}

          <div className="bg-black text-white rounded-3xl shadow-2xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Order Summary
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span>Commercial Plywood</span>
                <span>₹1,100</span>
              </div>

              <div className="flex justify-between">
                <span>Hardware Items</span>
                <span>₹800</span>
              </div>

              <div className="border-t border-gray-700 pt-5 mt-5">

                <div className="flex justify-between text-xl">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between text-3xl font-bold mt-6 text-amber-400">
                  <span>Total</span>
                  <span>₹1,900</span>
                </div>

              </div>

            </div>

            <button 
              onClick={() =>
                navigate("/order-success")
              }
              className="
                mt-10
                w-full
                bg-amber-600
                text-white
                py-5
                rounded-2xl
                text-xl
                font-semibold
                hover:bg-amber-700
                hover:scale-105
                transition
              "
            >
              Place Order
            </button>

            <p className="text-gray-400 text-center mt-6">
              Secure payment protected by SSL
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;