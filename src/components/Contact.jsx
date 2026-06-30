import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Contact Us
          </h2>

          <p className="text-gray-500 mt-4">
            Let's Build Your Dream Interior
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left */}

          <div className="bg-white p-10 rounded-3xl shadow-2xl hover:-translate-y-2 transition duration-500">

            <h3 className="text-3xl font-bold mb-8 text-amber-700">
              Sai & Co
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <div className="bg-amber-100 p-4 rounded-full">
                  <FaPhoneAlt className="text-amber-700" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Phone
                  </h4>
                  <p>+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-amber-100 p-4 rounded-full">
                  <FaWhatsapp className="text-green-600" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    WhatsApp
                  </h4>
                  <p>+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-amber-100 p-4 rounded-full">
                  <FaEnvelope className="text-red-500" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Email
                  </h4>
                  <p>saiandco@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-amber-100 p-4 rounded-full">
                  <FaMapMarkerAlt className="text-red-600" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Address
                  </h4>
                  <p>Gobichettipalayam</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right */}

          <div className="bg-white p-10 rounded-3xl shadow-2xl">

            <h3 className="text-3xl font-bold mb-8">
              Send Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-4 rounded-xl mb-5"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-4 rounded-xl mb-5"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border p-4 rounded-xl mb-5"
            />

            <button
              className="
                w-full
                bg-amber-700
                text-white
                py-4
                rounded-xl
                hover:bg-black
                transition
              "
            >
              Send Message
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;