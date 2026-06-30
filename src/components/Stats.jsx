function Stats() {
  const stats = [
    {
      number: "15+",
      title: "Years Experience",
    },
    {
      number: "5000+",
      title: "Happy Customers",
    },
    {
      number: "250+",
      title: "Products",
    },
    {
      number: "100%",
      title: "Quality",
    },
  ];

  return (
    <section
      className="py-20 bg-gray-100"
      id="stats"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="
                stat-card
                bg-white
                p-8
                rounded-3xl
                shadow-lg
                text-center
              "
            >
              <h2 className="stat-number text-5xl font-bold text-amber-700">
                {stat.number}
              </h2>

              <p className="mt-4 text-gray-600">
                {stat.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;