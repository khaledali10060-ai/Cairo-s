import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Reservation from '../components/Reservation';
import Locations from '../components/Locations';
import InstagramFeed from '../components/InstagramFeed';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();

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
    <div className="min-h-screen font-sans text-text bg-background selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CategorySection />
        <Gallery />
        <Reviews />
        <Reservation />
        <Locations />
        <InstagramFeed />
        <About />
      </main>
      <Footer />
    </div>
  );
}
