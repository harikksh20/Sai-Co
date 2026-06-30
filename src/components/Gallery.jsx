import g1 from "../assets/gallery/g1.jpg";
import g2 from "../assets/gallery/g2.jpg";
import g3 from "../assets/gallery/g3.jpg";

function Gallery() {
  const images = [g1, g2, g3];

  return (
    <section  data-aos="fade-right" id="gallery" className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        Gallery
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="rounded-3xl shadow-lg hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;