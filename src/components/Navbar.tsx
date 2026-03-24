import { useState, useEffect } from 'react';
import { Menu, X, Phone, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Our Story', href: '/#about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Reservation', href: '/#reservation' },
    { name: 'Locations', href: '/#locations' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-0' : 'bg-transparent py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/#home" className="flex items-center">
              <img 
                src="https://i.postimg.cc/XYntncTp/lwjw-kyrwz-removebg-preview.png" 
                alt="Cairo's Logo" 
                className={`h-20 sm:h-24 w-auto transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'} ${isScrolled ? '' : 'brightness-0 invert'}`}
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                  isScrolled ? 'text-text' : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <a
              href="https://www.talabat.com/egypt/cairos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#FF5A00] hover:bg-[#E65100] text-white px-4 py-1.5 rounded-full font-medium transition-colors text-sm"
            >
              <Bike size={18} />
              <span className="hidden lg:inline">Order via Talabat</span>
              <span className="lg:hidden">Order</span>
            </a>
            <Link
              to="/#reservation"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-1.5 rounded-full font-medium transition-colors text-sm"
            >
              <Phone size={18} />
              <span>Book Table</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-text' : 'text-white'} hover:text-primary transition-colors`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-text hover:text-primary hover:bg-amber-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.talabat.com/egypt/cairos"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#FF5A00] text-white px-5 py-3 rounded-md font-medium"
            >
              <Bike size={18} />
              <span>Order via Talabat</span>
            </a>
            <Link
              to="/#reservation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 w-full bg-primary text-white px-5 py-3 rounded-md font-medium"
            >
              <Phone size={18} />
              <span>Book a Table</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
