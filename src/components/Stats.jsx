function Stats() {
  const stats = [
    { number: "15+", title: "Years Experience" },
    { number: "5000+", title: "Happy Customers" },
    { number: "250+", title: "Products" },
    { number: "100%", title: "Quality" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="text-center p-8 shadow-lg rounded-2xl hover:-translate-y-2 transition"
          >
            <h2 className="text-4xl font-bold text-amber-700">
              {item.number}
            </h2>
            <p className="mt-2 text-gray-600">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;