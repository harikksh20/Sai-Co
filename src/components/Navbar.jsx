import { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background
      setScrolled(window.scrollY > 100);

      // Show navbar near top
      if (window.scrollY < 100) {
        setShowNavbar(true);
      }
      // Hide while scrolling down
      else if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      }
      // Show while scrolling up
      else {
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        ${
          showNavbar
            ? "translate-y-0"
            : "-translate-y-full"
        }
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-xl"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link to="/">
          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="Sai & Co"
              className="
                w-12
                h-12
                rounded-full
                object-cover
                border-2
                border-amber-500
                hover:rotate-12
                hover:scale-110
                transition
                duration-300
              "
            />

            <h1
              className={`
                text-3xl
                font-bold
                transition
                duration-300
                ${
                  scrolled
                    ? "text-amber-700"
                    : "text-white"
                }
              `}
              style={{
                fontFamily: "Cinzel",
              }}
            >
              SAI & CO
            </h1>

          </div>
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 font-medium">

          <li>
            <a
              href="#home"
              className={`
                transition
                hover:text-amber-500
                ${
                  scrolled
                    ? "text-gray-700"
                    : "text-white"
                }
              `}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={`
                transition
                hover:text-amber-500
                ${
                  scrolled
                    ? "text-gray-700"
                    : "text-white"
                }
              `}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#categories"
              className={`
                transition
                hover:text-amber-500
                ${
                  scrolled
                    ? "text-gray-700"
                    : "text-white"
                }
              `}
            >
              Categories
            </a>
          </li>

          <li>
            <a
              href="#products"
              className={`
                transition
                hover:text-amber-500
                ${
                  scrolled
                    ? "text-gray-700"
                    : "text-white"
                }
              `}
            >
              Products
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className={`
                transition
                hover:text-amber-500
                ${
                  scrolled
                    ? "text-gray-700"
                    : "text-white"
                }
              `}
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={`
                transition
                hover:text-amber-500
                ${
                  scrolled
                    ? "text-gray-700"
                    : "text-white"
                }
              `}
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          <Link to="/cart">
            <FaShoppingCart
              size={22}
              className={`
                transition
                hover:text-amber-500
                ${
                  scrolled
                    ? "text-gray-700"
                    : "text-white"
                }
              `}
            />
          </Link>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? (
              <FaTimes
                size={24}
                className={
                  scrolled
                    ? "text-gray-700"
                    : "text-white"
                }
              />
            ) : (
              <FaBars
                size={24}
                className={
                  scrolled
                    ? "text-gray-700"
                    : "text-white"
                }
              />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl py-5">

          <ul className="flex flex-col items-center gap-5 text-gray-700">

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#categories">
                Categories
              </a>
            </li>

            <li>
              <a href="#products">
                Products
              </a>
            </li>

            <li>
              <a href="#gallery">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact">
                Contact
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;