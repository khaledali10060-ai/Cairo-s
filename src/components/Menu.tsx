import { motion } from 'motion/react';

const menuData = [
  {
    id: 'breakfast',
    category_en: "Breakfast",
    category_ar: "إفطار",
    items: [
      { name_en: "Foul Classic", name_ar: "فول كلاسيك", price: 91 },
      { name_en: "Foul with Oil", name_ar: "فول بالزيت", price: 98 },
      { name_en: "Foul Alexandrian", name_ar: "فول إسكندراني", price: 98 },
      { name_en: "Taamia Original", name_ar: "طعمية أورجينال", price: 81 },
      { name_en: "Taamia Cairo's", name_ar: "طعمية كايروز", price: 60 },
    ]
  },
  {
    id: 'eggs',
    category_en: "Eggs",
    category_ar: "بيض",
    items: [
      { name_en: "Medahrag Egg", name_ar: "بيض مدحرج", price: 112 },
      { name_en: "Omelette Mix Cheese", name_ar: "أومليت ميكس جبن", price: 158 },
      { name_en: "Omelette Kiri Pastrami", name_ar: "أومليت كيري بسطرمة", price: 206 },
    ]
  },
  {
    id: 'soups',
    category_en: "Soups",
    category_ar: "شوربة",
    items: [
      { name_en: "Orzo Soup", name_ar: "لسان عصفور", price: 89 },
      { name_en: "Kawareh Soup", name_ar: "شوربة كوارع", price: 220 },
      { name_en: "Lentil Soup", name_ar: "شوربة عدس", price: 90 },
    ]
  },
  {
    id: 'mains',
    category_en: "Main Course",
    category_ar: "أطباق رئيسية",
    items: [
      { name_en: "Fattah Mozah Lamb", name_ar: "فتة موزة ضاني", price: 627 },
      { name_en: "Molokhia Chicken", name_ar: "ملوخية بالفراخ", price: 410 },
      { name_en: "Hamam Mahshi", name_ar: "حمام محشي", price: 275 },
    ]
  },
  {
    id: 'grill',
    category_en: "Flame Grilled",
    category_ar: "مشويات",
    items: [
      { name_en: "Mix Grill", name_ar: "شواية ميكس", price: 1140 },
      { name_en: "Kebab", name_ar: "كباب مشوي", price: 672 },
      { name_en: "Grilled Kofta", name_ar: "كفتة مشوية", price: 364 },
      { name_en: "Shish Tawook", name_ar: "شيش طاووق", price: 364 },
    ]
  },
  {
    id: 'feteer',
    category_en: "Feteer",
    category_ar: "فطير",
    items: [
      { name_en: "Meshaltet", name_ar: "فطير مشلتت", price: 660 },
      { name_en: "Sausage Feteer", name_ar: "فطيرة سجق", price: 325 },
      { name_en: "Nutella Feteer", name_ar: "فطيرة نوتيلا", price: 260 },
    ]
  },
  {
    id: 'dessert',
    category_en: "Dessert",
    category_ar: "حلو",
    items: [
      { name_en: "Om Aly", name_ar: "أم علي", price: 95 },
      { name_en: "Rice Pudding", name_ar: "أرز بلبن", price: 80 },
      { name_en: "Molten Cake", name_ar: "مولتن كيك", price: 216 },
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-3">Culinary Excellence</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-bold text-charcoal">Our Menu</h3>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="space-y-20">
          {menuData.map((category, catIndex) => (
            <div key={category.id} className="scroll-mt-24">
              <div className="flex flex-col md:flex-row items-center justify-between mb-10 border-b border-gold/30 pb-4">
                <h4 className="text-3xl font-bold text-charcoal">{category.category_en}</h4>
                <h4 className="text-3xl font-bold text-charcoal font-arabic" dir="rtl">{category.category_ar}</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    className="bg-surface p-6 rounded-xl shadow-sm border border-charcoal/5 hover:border-gold/50 hover:shadow-md transition-all duration-300 group flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-2 gap-4">
                        <h5 className="text-lg font-bold text-charcoal group-hover:text-gold transition-colors">{item.name_en}</h5>
                        <h5 className="text-lg font-bold text-charcoal font-arabic text-right group-hover:text-gold transition-colors" dir="rtl">{item.name_ar}</h5>
                      </div>
                      <div className="w-full border-t border-dashed border-charcoal/20 my-4"></div>
                    </div>
                    <div className="flex justify-between items-end mt-auto">
                      <span className="text-sm text-text-muted uppercase tracking-wider">Price</span>
                      <span className="text-xl font-bold text-gold">{item.price} <span className="text-sm">EGP</span></span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://www.talabat.com/egypt/cairos"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#FF5A00] text-white font-bold rounded-full hover:bg-[#E65100] transition-colors shadow-lg shadow-[#FF5A00]/20 w-full sm:w-auto text-center uppercase tracking-wide"
          >
            Order via Talabat
          </a>
          <a
            href="#locations"
            className="px-10 py-4 bg-gold text-white font-bold rounded-full hover:bg-gold-dark transition-colors shadow-lg shadow-gold/20 w-full sm:w-auto text-center uppercase tracking-wide"
          >
            Book a Table
          </a>
        </div>
      </div>
    </section>
  );
}
