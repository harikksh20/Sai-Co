import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";
import toast from "react-hot-toast";

function Products() {
  const { addToCart } =
    useContext(CartContext);

  const categories = [
    "Plywood",
    "Hardware",
    "Laminate",
    "Door",
  ];

  return (
    <section
      id="products"
      className="py-20 bg-gray-100"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Products
        </h2>

        {categories.map((category) => {
          const categoryProducts =
            products.filter(
              (product) =>
                product.category === category
            );

          return (
            <div
              key={category}
              id={category.toLowerCase()}
              className="mb-20"
            >
              <div className="flex items-center mb-10">

                <div className="flex-1 h-1 bg-amber-700 rounded"></div>

                <h3 className="px-6 text-3xl font-bold text-amber-700">
                  {category}
                </h3>

                <div className="flex-1 h-1 bg-amber-700 rounded"></div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {categoryProducts.map(
                  (product) => (
                    <div
                      key={product.id}
                      className="
                        bg-white
                        rounded-3xl
                        overflow-hidden
                        shadow-lg
                        hover:-translate-y-3
                        hover:shadow-2xl
                        transition
                        duration-500
                      "
                    >
                      <div className="overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="
                            w-full
                            h-64
                            object-cover
                            hover:scale-110
                            transition
                            duration-700
                          "
                        />
                      </div>

                      <div className="p-5">

                        <span className="text-sm text-amber-700">
                          {product.category}
                        </span>

                        <h3 className="text-xl font-bold mt-2">
                          {product.name}
                        </h3>

                        <div className="text-yellow-500 mt-2">
                          ⭐⭐⭐⭐⭐
                        </div>

                        <p className="text-2xl font-bold text-amber-700 mt-3">
                          {product.price}
                        </p>

                        <div className="flex gap-3 mt-5">

                          <button
                            onClick={() =>{
                              addToCart(product);
                              toast.success(
                                '${product.name}added to cart'
                              );
                              
                            }}
                            className="
                              flex-1
                              bg-black
                              text-white
                              py-3
                              rounded-xl
                              hover:bg-gray-800
                            "
                          >
                            Add Cart
                          </button>

                          <Link
                            to={`/product/${product.id}`}
                            className="flex-1"
                          >
                            <button
                              className="
                                w-full
                                bg-amber-700
                                text-white
                                py-3
                                rounded-xl
                                hover:bg-amber-800
                              "
                            >
                              Details
                            </button>
                          </Link>

                        </div>

                      </div>
                    </div>
                  )
                )}

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Products;