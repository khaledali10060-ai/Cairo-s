import { motion } from 'motion/react';

const galleryImages = [
  { src: "https://i.postimg.cc/WzKQ7h8N/ass.jpg", alt: "Cairo's Interior Design", span: "col-span-1 md:col-span-2 row-span-2" },
  { src: "https://i.postimg.cc/1RgwC85c/00.jpg", alt: "Signature Dish", span: "col-span-1 row-span-1" },
  { src: "https://i.postimg.cc/tCMf0ZhH/0000.jpg", alt: "Restaurant Exterior", span: "col-span-1 row-span-1" },
  { src: "https://i.postimg.cc/MpnCXbWQ/00000.jpg", alt: "Fresh Ingredients", span: "col-span-1 row-span-1" },
  { src: "https://i.postimg.cc/BnCmSjFj/ftyrr.jpg", alt: "Cozy Seating", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-text">A Visual Journey</h3>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            Enjoy indoor and outdoor seating with a warm, authentic ambiance. 
            Average cost per person: 350–600 EGP.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-white font-medium p-6">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
