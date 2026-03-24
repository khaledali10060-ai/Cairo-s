import { Facebook, Instagram, MessageCircle, Bike, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/#home" className="inline-block mb-4">
              <img 
                src="https://i.postimg.cc/XYntncTp/lwjw-kyrwz-removebg-preview.png" 
                alt="Cairo's Logo" 
                className="h-32 w-auto brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-white/70 mb-8 leading-relaxed text-sm">
              Experience the true essence of Egyptian hospitality and authentic flavors in the heart of Cairo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/201222201160" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/#home" className="text-white/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/#about" className="text-white/70 hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/menu" className="text-white/70 hover:text-primary transition-colors">Menu</Link></li>
              <li><Link to="/#gallery" className="text-white/70 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/#locations" className="text-white/70 hover:text-primary transition-colors">Locations</Link></li>
            </ul>
          </div>

          {/* Delivery Apps */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Order Online</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.talabat.com/egypt/cairos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20">
                    <Bike size={18} className="text-primary" />
                  </div>
                  <span>Talabat</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.elmenus.com/cairo/cairos-mivida" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20">
                    <ShoppingBag size={18} className="text-primary" />
                  </div>
                  <span>Elmenus</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-white/70">
              <li>
                <strong className="block text-white/90">Mivida Branch:</strong>
                <a href="tel:01222201160" className="hover:text-primary transition-colors">01222201160</a>
              </li>
              <li>
                <strong className="block text-white/90">City Square Branch:</strong>
                <a href="tel:01203475096" className="hover:text-primary transition-colors">01203475096</a>
              </li>
              <li className="pt-4 border-t border-white/10">
                <strong className="block text-white/90 text-xs">Working Hours:</strong>
                <span className="text-sm">Open Daily: 8:00 AM - 2:00 AM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Cairo's Restaurant. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
