import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  Link,
  useNavigate,
} from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) =>
      sum +
      parseInt(
        item.price
          .replace("₹", "")
          .replace(",", "")
      ) *
        item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <div className="bg-white p-10 rounded-3xl shadow-2xl text-center">

          <div className="text-7xl">
            🛒
          </div>

          <h2 className="text-4xl font-bold mt-5">
            Cart is Empty
          </h2>

          <p className="text-gray-500 mt-3">
            Add products to your cart.
          </p>

          <button
            onClick={() => {
              navigate("/");

              setTimeout(() => {
                document
                  .getElementById(
                    "products"
                  )
                  ?.scrollIntoView({
                    behavior:
                      "smooth",
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
            bg-white
            rounded-3xl
            shadow-xl
            p-8
            mb-8
            flex
            flex-col
            md:flex-row
            items-center
            gap-8
          "
        >
          <img
            src={item.image}
            alt={item.name}
            className="
              w-40
              h-40
              object-cover
              rounded-2xl
            "
          />

          <div className="flex-1">

            <h2 className="text-3xl font-bold">
              {item.name}
            </h2>

            <p className="text-amber-700 text-2xl mt-4">
              {item.price}
            </p>

            <div className="flex items-center gap-4 mt-6">

              <button
                onClick={() =>
                  decreaseQuantity(
                    item.id
                  )
                }
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-gray-200
                  text-xl
                "
              >
                -
              </button>

              <span className="text-2xl font-bold">
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  increaseQuantity(
                    item.id
                  )
                }
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-amber-700
                  text-white
                  text-xl
                "
              >
                +
              </button>

            </div>

          </div>

          <button
            onClick={() =>
              removeFromCart(item.id)
            }
            className="
              bg-red-500
              text-white
              px-6
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

      <div className="bg-white p-10 rounded-3xl shadow-xl">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-4xl font-bold">
            Total
          </h2>

          <h2 className="text-4xl font-bold text-amber-700">
            ₹{total.toLocaleString()}
          </h2>

        </div>

        <Link to="/checkout">
          <button
            className="
              w-full
              bg-amber-700
              text-white
              py-5
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