import aboutImage from "../assets/about.png";
function About() {
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        <div>
          <img
            src={aboutImage}
            alt="Sai & Co"
            className="
              rounded-3xl
              shadow-2xl
              hover:scale-105
              transition
              duration-500
            "
          />
        </div>

        <div>
          <span className="text-amber-700 font-semibold">
            ABOUT US
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Welcome to Sai & Co
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Sai & Co is a trusted plywood and hardware
            showroom providing premium plywood,
            laminates, doors, handles, locks, and
            interior solutions for homes and businesses.

            We focus on quality products, affordable
            pricing, and customer satisfaction.
          </p>

          <div className="mt-8 flex gap-4">
            <div className="bg-amber-100 px-5 py-4 rounded-xl">
              🪵 Premium Plywood
            </div>

            <div className="bg-amber-100 px-5 py-4 rounded-xl">
              🔩 Quality Hardware
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;