import { MapPin, Phone, Clock, ExternalLink, Bike } from 'lucide-react';
import { motion } from 'motion/react';

const branches = [
  {
    name: "Mivida Branch",
    area: "Tajammu' 5 (New Cairo)",
    phone: "01222201160",
    mapUrl: "https://maps.app.goo.gl/DARMcXun4uduFTJG8",
    img: "https://i.postimg.cc/mgqGSpdK/000000.jpg"
  },
  {
    name: "City Square Branch",
    area: "Rehab (New Cairo)",
    phone: "01203475096",
    mapUrl: "https://maps.app.goo.gl/UrsoRbThTu6Tz12N6",
    img: "https://i.postimg.cc/WzKQ7h8N/ass.jpg"
  }
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Visit Us</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-text">Our Locations</h3>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Clock size={18} className="text-primary" />
            Open Daily: 8:00 AM - 2:00 AM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-amber-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={branch.img}
                  alt={branch.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h4 className="text-3xl font-serif text-white mb-1">{branch.name}</h4>
                  <p className="text-white/80 flex items-center gap-2">
                    <MapPin size={16} />
                    {branch.area}
                  </p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <a
                    href={`tel:${branch.phone}`}
                    className="flex items-center gap-3 text-lg font-medium text-text hover:text-primary transition-colors w-full sm:w-auto"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-primary">
                      <Phone size={24} />
                    </div>
                    {branch.phone}
                  </a>
                  
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors font-medium"
                  >
                    Get Directions
                    <ExternalLink size={18} />
                  </a>
                  
                  <a
                    href="https://www.talabat.com/egypt/cairos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#FF5A00] text-white rounded-full hover:bg-[#E65100] transition-colors font-medium"
                  >
                    Order Now
                    <Bike size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
