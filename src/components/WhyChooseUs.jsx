import { FaAward, FaTruck, FaShieldAlt } from "react-icons/fa";

function WhyChooseUs() {
  const items = [
    {
      icon: <FaAward size={40} />,
      title: "Premium Quality"
    },
    {
      icon: <FaTruck size={40} />,
      title: "Fast Delivery"
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Warranty"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-3xl text-center shadow-lg"
          >
            <div className="text-amber-700 flex justify-center mb-4">
              {item.icon}
            </div>

            <h3 className="text-2xl font-semibold">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;