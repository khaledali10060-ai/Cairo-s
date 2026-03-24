import { motion } from 'motion/react';
import { Heart, MessageCircle, Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    img: 'https://i.postimg.cc/1RgwC85c/00.jpg',
    likes: 154,
    comments: 12
  },
  {
    id: 2,
    img: 'https://i.postimg.cc/tCMf0ZhH/0000.jpg',
    likes: 210,
    comments: 18
  },
  {
    id: 3,
    img: 'https://i.postimg.cc/MpnCXbWQ/00000.jpg',
    likes: 189,
    comments: 24
  },
  {
    id: 4,
    img: 'https://i.postimg.cc/BnCmSjFj/ftyrr.jpg',
    likes: 320,
    comments: 45
  },
  {
    id: 5,
    img: 'https://i.postimg.cc/mgqGSpdK/000000.jpg',
    likes: 142,
    comments: 9
  },
  {
    id: 6,
    img: 'https://i.postimg.cc/WzKQ7h8N/ass.jpg',
    likes: 275,
    comments: 31
  }
];

export default function InstagramFeed() {
  const instagramUrl = "https://www.instagram.com/honacairos";

  return (
    <section className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-between w-full mb-8">
            {/* Stats and Handle */}
            <div className="flex-1 text-left pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">honacairos@</h3>
              <div className="flex justify-start gap-4 text-gray-700 font-medium">
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold">342</span>
                  <span className="text-xs text-gray-500">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold">12.5k</span>
                  <span className="text-xs text-gray-500">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold">104</span>
                  <span className="text-xs text-gray-500">Following</span>
                </div>
              </div>
            </div>

            {/* Logo with Instagram Gradient Border */}
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
              <div className="bg-white p-0.5 rounded-full">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-2 border-white shadow-inner">
                  <img 
                    src="https://i.postimg.cc/XYntncTp/lwjw-kyrwz-removebg-preview.png" 
                    alt="Cairo's Logo" 
                    className="w-4/5 h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Follow Button */}
          <motion.a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full max-w-[220px] bg-[#3897f0] hover:bg-[#2d76c1] text-white py-1.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <Instagram size={18} />
            <span>Follow us on Instagram</span>
          </motion.a>
        </div>

        {/* Grid of Posts */}
        <div className="grid grid-cols-2 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden group rounded-xl shadow-sm"
            >
              <img 
                src={post.img} 
                alt={`Instagram Post ${post.id}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Heart size={20} fill="white" />
                  <span className="font-bold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={20} fill="white" />
                  <span className="font-bold">{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
