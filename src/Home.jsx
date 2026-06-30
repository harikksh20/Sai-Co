import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats";
import Categories from "./components/Categories";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />

      <Categories
        setSelectedCategory={setSelectedCategory}
      />

      <Products
        selectedCategory={selectedCategory}
      />

      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;