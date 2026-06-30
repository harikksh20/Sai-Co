import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 grid md:grid-cols-2 gap-10">

        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-3xl"
          />
        </div>

        {/* Product Details */}
        <div>
          <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full">
            {product.category}
          </span>

          <h1 className="text-5xl font-bold mt-5">
            {product.name}
          </h1>

          <div className="text-yellow-500 text-2xl mt-4">
            ⭐⭐⭐⭐⭐
          </div>

          <h2 className="text-4xl text-amber-700 font-bold mt-5">
            {product.price}
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            Premium quality product suitable for furniture,
            interior work, modular kitchen and modern homes.
          </p>

          <div className="flex gap-4 mt-8">
            <button  onClick={() => addToCart(product)} className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800">
              Add to Cart
            </button>

            <button onClick={() => navigate("/checkout")} className="bg-amber-700 text-white px-8 py-4 rounded-xl hover:bg-amber-800">
              Buy Now
            </button>
          </div>

          <div className="mt-10">
            <Link to="/">
              <button className="border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition">
                Back to Home
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;