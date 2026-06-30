import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { cart } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/">
          <h1
            className={`text-3xl font-bold ${
              scrolled ? "text-amber-700" : "text-white"
            }`}
          >
            Sai & Co
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a
              href="#home"
              className={`hover:text-amber-700 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#categories"
              className={`hover:text-amber-700 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Categories
            </a>
          </li>

          <li>
            <a
              href="#products"
              className={`hover:text-amber-700 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Products
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={`hover:text-amber-700 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Contact
            </a>
          </li>

          {/* Cart */}
          <Link to="/cart">
            <div className="relative">
              <FaShoppingCart
                className={`text-2xl ${
                  scrolled ? "text-black" : "text-white"
                }`}
              />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6">

            <a href="#home">Home</a>

            <a href="#categories">Categories</a>

            <a href="#products">Products</a>

            <a href="#contact">Contact</a>

            <Link to="/cart">
              🛒 Cart ({cart.length})
            </Link>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;