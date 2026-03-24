import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

const menuData = [
  {
    id: 'breakfast',
    category: "Breakfast",
    img: "https://i.postimg.cc/BQLskGdH/597470409-122290584764227352-6483981601290459607-n.jpg",
    items: [
      { name: "Foul Classic", price: 91 },
      { name: "Foul with Oil", price: 98 },
      { name: "Foul Alexandrian", price: 98 },
      { name: "Taamia Original", price: 81 },
      { name: "Taamia Cairo's", price: 60 },
      { name: "Medahrag Egg", price: 112 },
      { name: "Omelette Mix Cheese", price: 158 },
      { name: "Omelette Kiri Pastrami", price: 206 }
    ]
  },
  {
    id: 'main-course',
    category: "Main Course",
    img: "https://i.postimg.cc/kgynFv0h/wjbh.jpg",
    items: [
      { name: "Fattah Mozah Lamb", price: 627 },
      { name: "Molokhia Chicken", price: 410 },
      { name: "Hamam Mahshi", price: 275 }
    ]
  },
  {
    id: 'flame-grilled',
    category: "Flame Grilled",
    img: "https://i.postimg.cc/xdk4T03P/mshwyat.jpg",
    items: [
      { name: "Mix Grill", price: 1140 },
      { name: "Kebab", price: 672 },
      { name: "Grilled Kofta", price: 364 },
      { name: "Shish Tawook", price: 364 }
    ]
  },
  {
    id: 'sandwiches',
    category: "Sandwiches",
    img: "https://i.postimg.cc/HxxN2VWB/sndwtshat.jpg",
    items: [
      { name: "Liver Sandwich", price: 85 },
      { name: "Sausage Sandwich", price: 95 },
      { name: "Kofta Sandwich", price: 110 },
      { name: "Shish Tawook Sandwich", price: 105 }
    ]
  },
  {
    id: 'pastas-casseroles',
    category: "Pastas & Casseroles",
    img: "https://i.postimg.cc/L5F7brfL/587554045-122288038958227352-138225225989065126-n.jpg",
    items: [
      { name: "White Sauce Mushroom", price: 264 },
      { name: "Pasta Alex Liver", price: 264 },
      { name: "Bolognese", price: 154 },
      { name: "Pasta Sausage", price: 286 },
      { name: "Mummar Rice Plain", price: 210 },
      { name: "Meat with Onions", price: 513 },
      { name: "Akkawi with Onions", price: 536 }
    ]
  },
  {
    id: 'feteer',
    category: "Feteer",
    img: "https://i.postimg.cc/rygCbBS6/ftyr.jpg",
    items: [
      { name: "Meshaltet", price: 660 },
      { name: "Sausage Feteer", price: 325 },
      { name: "Nutella Feteer", price: 260 }
    ]
  },
  {
    id: 'desserts',
    category: "Desserts & Drinks",
    img: "https://i.postimg.cc/nhXkq39m/hlwyat.jpg",
    items: [
      { name: "Om Aly", price: 95 },
      { name: "Rice Pudding", price: 80 },
      { name: "Molten Cake", price: 216 },
      { name: "Soft Drinks", price: 55 },
      { name: "Fresh Orange", price: 90 },
      { name: "Turkish Coffee", price: 55 }
    ]
  }
];

const CartBadge = () => {
  const { totalItems } = useCart();
  if (totalItems === 0) return null;
  return (
    <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-gold">
      {totalItems}
    </span>
  );
};

export default function MenuPage() {
  const location = useLocation();
  const { addToCart, setIsCartOpen } = useCart();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-gold selection:text-black">
      {/* Header & Back Button */}
      <header className="py-3 px-4 sm:px-6 lg:px-8 border-b border-gold/20 flex items-center justify-between bg-black sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2 text-gold hover:text-white transition-colors font-medium">
          <ArrowLeft size={20} />
          <span className="hidden sm:inline">Back</span>
        </Link>
        <h1 className="text-xl sm:text-2xl font-bold text-gold tracking-widest uppercase">Our Menu</h1>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-gold hover:text-white transition-colors"
          >
            <ShoppingCart size={24} />
            <CartBadge />
          </button>
        </div>
      </header>

      {/* Sticky Sub-nav */}
      <nav className="sticky top-[56px] sm:top-[64px] z-40 bg-black/95 backdrop-blur-md border-b border-gold/10 overflow-x-auto hide-scrollbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center gap-6 py-4 whitespace-nowrap">
            {menuData.map(cat => (
              <li key={cat.id}>
                <a href={`#${cat.id}`} className="text-sm font-medium text-white/70 hover:text-gold transition-colors uppercase tracking-wider">
                  {cat.category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Menu Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {menuData.map((category) => (
            <section id={category.id} key={category.id} className="scroll-mt-36">
              <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-8 group">
                <img 
                  src={category.img} 
                  alt={category.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <div className="flex flex-col md:flex-row items-baseline justify-between gap-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                      {category.category}
                    </h2>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-[#141414] p-6 rounded-xl border border-gold/10 hover:border-gold/50 transition-all duration-300 group flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-2 gap-4">
                        <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <div className="w-full border-t border-dashed border-gold/20 my-4"></div>
                    </div>
                    <div className="flex justify-between items-end mt-auto gap-4">
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-white/50 uppercase tracking-wider">Price</span>
                        <span className="text-xl font-bold text-gold">
                          {item.price} <span className="text-xs text-gold/70">EGP</span>
                        </span>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart({ 
                          id: `${category.id}-${itemIndex}`, 
                          name: item.name, 
                          price: item.price,
                          image: category.img
                        })}
                        className="flex items-center gap-2 bg-[#C5A059] hover:bg-[#B38F48] text-black px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-gold/20"
                      >
                        <Plus size={16} />
                        Add
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center pb-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://www.talabat.com/egypt/cairos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-[#FF5A00] text-white font-bold rounded-full hover:bg-[#E65100] transition-colors shadow-lg shadow-[#FF5A00]/20 uppercase tracking-wide"
          >
            Order Now
          </a>
          <a
            href="tel:01222201160"
            className="inline-block px-12 py-4 bg-gold text-black font-bold rounded-full hover:bg-gold-dark transition-colors shadow-lg shadow-gold/20 uppercase tracking-wide"
          >
            Book Now
          </a>
        </div>
      </main>
    </div>
  );
}
