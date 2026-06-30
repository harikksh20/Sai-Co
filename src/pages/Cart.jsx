import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) =>
      sum +
      Number(
        item.price.replace("₹", "")
      ),
    0
  );

  // Empty Cart
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

        <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full">

          <div className="text-7xl mb-5">
            🛒
          </div>

          <h2 className="text-4xl font-bold text-gray-800">
            Cart is Empty
          </h2>

          <p className="text-gray-500 mt-4">
            Looks like you haven't added any products yet.
          </p>

          <button
            onClick={() => {
              navigate("/");

              setTimeout(() => {
                document
                  .getElementById("products")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }, 300);
            }}
            className="
              mt-8
              bg-amber-700
              text-white
              px-8
              py-4
              rounded-xl
              hover:bg-black
              hover:scale-105
              transition
            "
          >
            Continue Shopping
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="
            flex
            flex-col
            md:flex-row
            items-center
            gap-5
            bg-white
            p-5
            rounded-3xl
            shadow-lg
            mb-6
            hover:shadow-2xl
            transition
          "
        >
          <img
            src={item.image}
            alt={item.name}
            className="
              w-32
              h-32
              object-cover
              rounded-2xl
            "
          />

          <div className="flex-1">
            <h2 className="text-2xl font-bold">
              {item.name}
            </h2>

            <p className="text-amber-700 text-xl mt-2">
              {item.price}
            </p>
          </div>

          <button
            onClick={() =>
              removeFromCart(item.id)
            }
            className="
              bg-red-500
              text-white
              px-5
              py-3
              rounded-xl
              hover:bg-red-600
              transition
            "
          >
            Remove
          </button>
        </div>
      ))}

      {/* Total */}

      <div className="bg-white p-8 rounded-3xl shadow-xl mt-10">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold">
            Total
          </h2>

          <h2 className="text-3xl font-bold text-amber-700">
            ₹{total}
          </h2>

        </div>

        <Link to="/checkout">
          <button
            className="
              w-full
              bg-amber-700
              text-white
              py-4
              rounded-xl
              text-xl
              hover:bg-black
              transition
            "
          >
            Proceed To Checkout
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Cart;