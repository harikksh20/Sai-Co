import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const { cart } = useContext(CartContext);

  const [payment, setPayment] = useState("COD");

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price.replace(/[₹,]/g, "")),
    0
  );
  const navigate = useNavigate();
  const whatsappNumber = "919876543210";

const placeWhatsappOrder = () => {
  window.open(
    `https://wa.me/${whatsappNumber}?text=I want to place an order.`,
    "_blank"
  );
};

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        {/* Customer Details */}
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">
            Customer Details
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-4 rounded-xl mb-4"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border p-4 rounded-xl mb-4"
          />

          <textarea
            placeholder="Address"
            rows="4"
            className="w-full border p-4 rounded-xl mb-4"
          />

          <input
            type="text"
            placeholder="Pincode"
            className="w-full border p-4 rounded-xl mb-4"
          />

          <h3 className="text-2xl font-bold mt-6 mb-4">
            Payment Method
          </h3>

          <label className="block mb-3">
            <input
              type="radio"
              checked={payment === "COD"}
              onChange={() => setPayment("COD")}
            />
            <span className="ml-2">
              Cash On Delivery
            </span>
          </label>

          <label className="block mb-3">
            <input
              type="radio"
              checked={payment === "UPI"}
              onChange={() => setPayment("UPI")}
            />
            <span className="ml-2">
              UPI Payment
            </span>
          </label>

          <label className="block">
            <input
              type="radio"
              checked={payment === "Card"}
              onChange={() => setPayment("Card")}
            />
            <span className="ml-2">
              Debit / Credit Card
            </span>
          </label>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">
            Order Summary
          </h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mb-4"
            >
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}

          <hr className="my-6" />

          <div className="flex justify-between text-2xl font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button onClick={() => navigate("/success")} className="w-full mt-8 bg-amber-700 text-white py-4 rounded-xl hover:bg-amber-800">
            Place Order
          </button>

          <button
            onClick={placeWhatsappOrder}
            className="w-full mt-4 bg-green-500 text-white py-4 rounded-xl"
          >
            Order via WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
}

export default Checkout;