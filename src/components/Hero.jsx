import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  EffectFade,
} from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg";

const titleAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const subtitleAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
};

const textAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const buttonAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8,
      duration: 0.8,
    },
  },
};

function Hero() {
  return (
    <section id="home">
      <Swiper
        modules={[
          Autoplay,
          Pagination,
          EffectFade,
        ]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="hero-bg h-screen bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${hero1})`,
            }}
          >
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">

              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={titleAnimation}
                className="text-5xl md:text-8xl text-white font-bold tracking-widest"
                style={{ fontFamily: "Cinzel" }}
              >
                SAI & CO
              </motion.h1>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={subtitleAnimation}
                className="text-3xl md:text-5xl text-amber-300 mt-5"
                style={{
                  fontFamily:
                    "Playfair Display",
                }}
              >
                Premium Plywood
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={textAnimation}
                className="text-white text-lg md:text-2xl mt-6 max-w-3xl"
              >
                Quality plywood solutions for
                modern interiors.
              </motion.p>

              <motion.button
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={buttonAnimation}
                whileHover={{
                  scale: 1.1,
                }}
                className="mt-8 bg-amber-600 px-8 py-4 rounded-full text-white shadow-2xl"
              >
                Explore Products
              </motion.button>

            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="hero-bg h-screen bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${hero2})`,
            }}
          >
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">

              <motion.h1
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView="visible"
                viewport={{ once: false }}
                variants={titleAnimation}
                className="text-5xl md:text-8xl text-white font-bold"
                style={{ fontFamily: "Cinzel" }}
              >
                SAI & CO
              </motion.h1>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={subtitleAnimation}
                className="text-3xl md:text-5xl text-amber-300 mt-5"
                style={{
                  fontFamily:
                    "Playfair Display",
                }}
              >
                Hardware Solutions
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={textAnimation}
                className="text-white text-lg md:text-2xl mt-6 max-w-3xl"
              >
                Handles, locks, hinges and
                premium hardware products.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                }}
                whileHover={{
                  scale: 1.08,
                  boxShadow:
                    "0px 0px 30px rgba(245,158,11,0.7)",
                }}
                 whileTap={{ scale: 0.95 }}
                className="
                  mt-8
                  px-10
                  py-4
                  rounded-full
                  text-lg
                  font-semibold
                text-white
                  bg-gradient-to-r
                from-amber-500
                to-yellow-600
                shadow-2xl
                transition-all
                duration-500
              "
            >
              Shop Now
            </motion.button>

            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="hero-bg h-screen bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${hero3})`,
            }}
          >
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">

              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={titleAnimation}
                className="text-5xl md:text-8xl text-white font-bold"
                style={{ fontFamily: "Cinzel" }}
              >
                SAI & CO
              </motion.h1>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={subtitleAnimation}
                className="text-3xl md:text-5xl text-amber-300 mt-5"
                style={{
                  fontFamily:
                    "Playfair Display",
                }}
              >
                Modern Interiors
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={textAnimation}
                className="text-white text-lg md:text-2xl mt-6 max-w-3xl"
              >
                Build elegant and beautiful
                spaces with us.
              </motion.p>

              <motion.button
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={buttonAnimation}
                whileHover={{
                  scale: 1.1,
                }}
                className="mt-8 bg-amber-600 px-8 py-4 rounded-full text-white shadow-2xl"
              >
                Contact Us
              </motion.button>

            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}

export default Hero;