import { motion } from 'motion/react';
import { Utensils, Wheat, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Premium Local Meat",
      desc: "We use only the finest 100% Egyptian local meat, sourced daily."
    },
    {
      icon: <Wheat className="w-8 h-8 text-primary" />,
      title: "Fresh Daily Bread",
      desc: "Our bread is baked in-house throughout the day for perfect freshness."
    },
    {
      icon: <Utensils className="w-8 h-8 text-primary" />,
      title: "Authentic Recipes",
      desc: "Every dish is prepared using secret family recipes passed down."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-text mb-6">
              The Heart of <span className="text-primary italic">Cairo's</span>
            </h3>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                At Cairo's, we believe that food is more than just sustenance; it's a celebration of heritage. 
                Our journey began with a simple mission: to bring the true, authentic flavors of Egypt 
                to your table, using the same high-quality ingredients our grandmothers used.
              </p>
              <p className="font-serif text-xl text-text border-l-4 pr-0 pl-6 rounded-r-xl border-primary py-2 bg-amber-50/50 italic">
                "At Cairo's, we give you the authentic taste of Egypt in all its details.. from the local meat to the hot bread coming out of the oven, every bite has a story."
              </p>
              <p>
                We don't compromise on quality. From our carefully selected spices to our 100% local meat, 
                every ingredient is chosen with care. We're not just a restaurant; we're a culinary bridge 
                between the past and the present.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="mb-4 p-3 bg-amber-50 rounded-2xl">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-text mb-2">{feature.title}</h4>
                  <p className="text-sm text-text-muted">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.postimg.cc/WzKQ7h8N/ass.jpg" 
                alt="Cairo's Kitchen" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-100 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -translate-y-1/2 -right-12 hidden xl:block">
               <div className="bg-white p-6 rounded-2xl shadow-xl border border-amber-100 max-w-[200px]">
                  <p className="text-primary font-bold text-4xl mb-1">100%</p>
                  <p className="text-text font-medium text-sm">Egyptian Ingredients</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
