import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white pt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 pb-10">

        {/* Logo */}

        <div>
          <h2
            className="text-4xl font-bold text-amber-500"
            style={{
              fontFamily: "Cinzel",
            }}
          >
            SAI & CO
          </h2>

          <p className="mt-5 text-gray-400">
            Premium Plywood & Hardware
            Solutions for Modern Interiors.
          </p>
        </div>

        {/* Links */}

        <div>
          <h3 className="text-xl font-bold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-amber-500 cursor-pointer">
              Home
            </li>
            <li className="hover:text-amber-500 cursor-pointer">
              About
            </li>
            <li className="hover:text-amber-500 cursor-pointer">
              Products
            </li>
            <li className="hover:text-amber-500 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Products */}

        <div>
          <h3 className="text-xl font-bold mb-5">
            Products
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Plywood</li>
            <li>Hardware</li>
            <li>Doors</li>
            <li>Laminates</li>
          </ul>
        </div>

        {/* Social */}

        <div>
          <h3 className="text-xl font-bold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <div className="bg-gray-800 p-4 rounded-full hover:bg-amber-600 hover:scale-110 transition cursor-pointer">
              <FaFacebook />
            </div>

            <div className="bg-gray-800 p-4 rounded-full hover:bg-pink-600 hover:scale-110 transition cursor-pointer">
              <FaInstagram />
            </div>

            <div className="bg-gray-800 p-4 rounded-full hover:bg-green-600 hover:scale-110 transition cursor-pointer">
              <FaWhatsapp />
            </div>

            <div className="bg-gray-800 p-4 rounded-full hover:bg-blue-600 hover:scale-110 transition cursor-pointer">
              <FaPhoneAlt />
            </div>

          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-gray-500">
        © 2026 Sai & Co. All Rights Reserved.
      </div>

      <div>
        <h3 className="text-xl font-bold mb-5">
          Our Location
        </h3>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1629.3751406561205!2d77.4335690587219!3d11.4437674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d9a0d0f0afb%3A0xe17b20c1278a7aba!2sSAI%20HARDWARES%20%26PLYWOODS!5e1!3m2!1sen!2sin!4v1782789342384!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          >
          </iframe>
        </div>
      </div>

    </footer>
  );
}

export default Footer;