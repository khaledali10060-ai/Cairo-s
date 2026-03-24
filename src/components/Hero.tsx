import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/WzKQ7h8N/ass.jpg"
          alt="Cairo's Restaurant Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight">
            Experience Egypt <br className="hidden md:block" />
            <span className="text-primary italic">on a Plate</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Authentic Flavors, Modern Soul
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/menu"
              className="group flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Menu
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://www.talabat.com/egypt/cairos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#FF5A00] hover:bg-[#E65100] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Order via Talabat
            </a>
            <Link
              to="/#reservation"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
            >
              <Calendar size={20} />
              Book a Table
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 48, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
