import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: "Ahmed M.",
    rating: 5,
    text: "The best Akkawi Tagine I've had in New Cairo. The atmosphere is amazing and the staff is very welcoming.",
    date: "2 weeks ago"
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "Loved the Ta'bleya Cairo for breakfast! Authentic Egyptian taste with a modern twist. Highly recommend the Mivida branch.",
    date: "1 month ago"
  },
  {
    name: "Omar T.",
    rating: 4,
    text: "Great mixed grill and excellent service. The outdoor seating at City Square is perfect for evening dinners.",
    date: "3 weeks ago"
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-text">What Our Guests Say</h3>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-2xl font-bold text-text">4.8</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-text-muted text-sm">(240+ Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-amber-50 relative group hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-6 right-6 text-amber-100 w-12 h-12 rotate-180 transition-transform group-hover:scale-110" />
              <div className="flex text-amber-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-text-muted italic mb-6 relative z-10">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-text">{review.name}</span>
                <span className="text-xs text-text-muted">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
