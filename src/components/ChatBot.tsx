import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const PREDEFINED_QA = [
  {
    question: "What are your opening hours?",
    answer: "We are open daily from 8:00 AM to 12:00 AM (Midnight)."
  },
  {
    question: "Where are you located?",
    answer: "Cairo's has two branches: 1. Mivida Branch (New Cairo) and 2. City Square Branch in Rehab (New Cairo). You can find the exact locations in our 'Locations' section!"
  },
  {
    question: "Do you have delivery?",
    answer: "Yes! We deliver to most areas in Cairo. Delivery fees are calculated based on your location."
  },
  {
    question: "How can I order?",
    answer: "You can order directly through our website! Just add items to your cart and checkout via WhatsApp."
  }
];

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Welcome to Cairo's! How can I help you today?", sender: 'bot' }
  ]);

  const handleQuestionClick = (question: string, answer: string) => {
    const userMsg: Message = { id: Date.now(), text: question, sender: 'user' };
    const botMsg: Message = { id: Date.now() + 1, text: answer, sender: 'bot' };
    
    setMessages(prev => [...prev, userMsg]);
    
    // Simulate bot typing
    setTimeout(() => {
      setMessages(prev => [...prev, botMsg]);
    }, 500);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-[60] bg-gold text-black p-3 rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 left-8 z-[70] w-80 sm:w-96 bg-black border border-gold/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gold p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-black">
                <Bot size={24} />
                <span className="font-bold uppercase tracking-wider">Cairo's Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-black/70 hover:text-black transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 h-80 overflow-y-auto p-4 space-y-4 bg-white/5 custom-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.sender === 'user'
                        ? 'bg-gold text-black rounded-tr-none'
                        : 'bg-white/10 text-white rounded-tl-none border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Predefined Questions */}
            <div className="p-4 border-t border-gold/10 bg-black/50 space-y-2">
              <p className="text-[10px] text-gold/50 uppercase tracking-widest mb-2">Frequently Asked Questions</p>
              <div className="flex flex-wrap gap-2">
                {PREDEFINED_QA.map((qa, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(qa.question, qa.answer)}
                    className="text-[11px] bg-white/5 hover:bg-gold/10 text-white/70 hover:text-gold border border-white/10 hover:border-gold/30 px-3 py-1.5 rounded-full transition-all text-left"
                  >
                    {qa.question}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
