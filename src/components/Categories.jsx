import plywood from "../assets/categories/plywood.jpg";
import hardware from "../assets/categories/hardware.jpg";
import laminate from "../assets/categories/laminate.jpg";
import door from "../assets/categories/doors.jpg";
import interior from "../assets/categories/interior.jpg";
import adhesive from "../assets/categories/adhesive.jpg";

function Categories() {
  const categories = [
    {
      name: "Plywood",
      image: plywood,
      link: "#plywood",
    },
    {
      name: "Hardware",
      image: hardware,
      link: "#hardware",
    },
    {
      name: "Laminate",
      image: laminate,
      link: "#laminate",
    },
    {
      name: "Door",
      image: door,
      link: "#door",
    },
    {
      name: "Interior",
      image: interior,
      link: "#interior",
    },
    {
      name: "Adhesive",
      image: adhesive,
      link: "#adhesive",
    },
  ];

  return (
    <section
      id="categories"
      className="py-20 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-amber-600 tracking-[4px] font-semibold">
          SAI & CO
        </p>

        <h2 className="text-5xl font-bold text-center mt-3">
          Shop By Category
        </h2>

        <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mt-4 mb-5"></div>

        <p className="text-center text-gray-500 mb-14">
          Explore Our Premium Products
        </p>

        <div className="flex flex-wrap justify-center gap-10">

          {categories.map((category) => (
            <a
              key={category.name}
              href={category.link}
              className="text-center group"
            >
              <div
                className="
                  w-40
                  h-40
                  rounded-full
                  border-4
                  border-amber-600
                  overflow-hidden
                  shadow-xl
                  hover:shadow-2xl
                  hover:scale-110
                  transition-all
                  duration-500
                "
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-125
                    transition
                    duration-700
                  "
                />
              </div>

              <h3
                className="
                  mt-5
                  text-xl
                  font-bold
                  group-hover:text-amber-700
                  transition
                "
              >
                {category.name}
              </h3>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;