import plywood from "../assets/categories/plywood.jpg";
import hardware from "../assets/categories/hardware.jpg";
import laminate from "../assets/categories/laminate.jpg";
import doors from "../assets/categories/doors.jpg";

function Categories() {
  const categories = [
    {
      image: plywood,
      name: "Plywood",
    },
    {
      image: hardware,
      name: "Hardware",
    },
    {
      image: laminate,
      name: "Laminate",
    },
    {
      image: doors,
      name: "Door",
    },
  ];

  const scrollToCategory = (category) => {
    document
      .getElementById(category.toLowerCase())
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="categories"
      data-aos="zoom-in"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-5">
          Shop By Category
        </h2>

        <p className="text-center text-gray-500 mb-14">
          Explore Our Products
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">

          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() =>
                scrollToCategory(
                  category.name
                )
              }
              className="
                flex flex-col items-center
                cursor-pointer
                group
              "
            >
              <div
                className="
                  w-28 h-28
                  rounded-full
                  border-4 border-amber-500
                  object-cover
                  shadow-lg
            
                  hover:shadow-110
                  transition
                  duration-500
                  // group-hover:scale-110
                "
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="
                    w-full
                    h-full
                    rounded-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {category.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Categories;