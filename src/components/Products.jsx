import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";
import toast from "react-hot-toast";

function Products() {
  const { addToCart } = useContext(CartContext);

  const categories = [
    "Plywood",
    "Hardware",
    "Laminate",
    "Door",
    "Interior",
    "Adhesive",
  ];

  return (
    <section
      id="products"
      className="py-20 bg-gray-100"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}

        <p className="text-center text-amber-600 tracking-[5px] font-semibold">
          SAI & CO
        </p>

        <h2 className="text-5xl font-bold text-center mt-3">
          Our Products
        </h2>

        <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mt-4 mb-10"></div>

        {/* Category Bar */}

        

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
              className="mb-24 scroll-mt-40"
            >

              {/* Category Heading */}

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
                        bg-white/90
                        backdrop-blur-lg
                        border
                        border-gray-100
                        rounded-3xl
                        overflow-hidden
                        shadow-xl
                        hover:-translate-y-4
                        hover:shadow-2xl
                        transition-all
                        duration-500
                      "
                    >

                      {/* Product Image */}

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

                        <span className="text-sm text-amber-700 font-medium">
                          {product.category}
                        </span>

                        <h3
                          className="
                            text-xl
                            font-bold
                            mt-3
                            min-h-[60px]
                          "
                        >
                          {product.name}
                        </h3>

                        <div className="text-yellow-500 mt-2 text-lg">
                          ⭐⭐⭐⭐⭐
                        </div>

                        <div className="
                          inline-block
                          bg-green-100
                          text-green-700
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          mt-3
                        ">
                          In Stock
                        </div>

                        <p className="text-2xl font-bold text-amber-700 mt-4">
                          {product.price}
                        </p>

                        <div className="flex gap-3 mt-5">

                          <button
                            onClick={() => {
                              addToCart(product);

                              toast.success(
                                `🛒 ${product.name} added to cart`
                              );
                            }}
                            className="
                              flex-1
                              bg-black
                              text-white
                              py-3
                              rounded-xl
                              hover:bg-gray-800
                              hover:scale-105
                              transition
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
                                hover:scale-105
                                transition
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