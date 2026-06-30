function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Customer Reviews
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        <div className="shadow-lg p-8 rounded-3xl">
          ⭐⭐⭐⭐⭐
          <p className="mt-4 text-gray-600">
            Excellent plywood quality and service.
          </p>
          <h4 className="mt-4 font-bold">Rajesh</h4>
        </div>

        <div className="shadow-lg p-8 rounded-3xl">
          ⭐⭐⭐⭐⭐
          <p className="mt-4 text-gray-600">
            Highly recommended for interiors.
          </p>
          <h4 className="mt-4 font-bold">Kumar</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;