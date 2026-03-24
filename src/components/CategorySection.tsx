import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'breakfast', name: 'Breakfast', img: 'https://i.postimg.cc/BQLskGdH/597470409-122290584764227352-6483981601290459607-n.jpg' },
  { id: 'main-course', name: 'Main Course', img: 'https://i.postimg.cc/kgynFv0h/wjbh.jpg' },
  { id: 'flame-grilled', name: 'Flame Grilled', img: 'https://i.postimg.cc/xdk4T03P/mshwyat.jpg' },
  { id: 'sandwiches', name: 'Sandwiches', img: 'https://i.postimg.cc/HxxN2VWB/sndwtshat.jpg' },
  { id: 'pastas-casseroles', name: 'Pastas & Casseroles', img: 'https://i.postimg.cc/L5F7brfL/587554045-122288038958227352-138225225989065126-n.jpg' },
  { id: 'feteer', name: 'Feteer', img: 'https://i.postimg.cc/rygCbBS6/ftyr.jpg' },
  { id: 'desserts', name: 'Desserts & Drinks', img: 'https://i.postimg.cc/nhXkq39m/hlwyat.jpg' },
];

export default function CategorySection() {
  return (
    <section id="categories" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Discover</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-bold text-charcoal">Explore Our Categories</h3>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat, index) => (
            <Link to={`/menu#${cat.id}`} key={cat.id} className="group flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-4 border-transparent group-hover:border-primary"
              >
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
              <div className="mt-4">
                <h4 className="text-base font-bold text-charcoal group-hover:text-primary transition-colors">{cat.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
