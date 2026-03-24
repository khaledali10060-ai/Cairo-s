import React, { useState, useEffect } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2, MessageSquare, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

export const CartIcon: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();

  if (totalItems === 0) return null;

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-8 z-[60] bg-[#C5A059] text-black p-4 rounded-full shadow-2xl flex items-center justify-center group right-8"
    >
      <ShoppingCart size={28} />
      <span className="absolute -top-2 bg-white text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#C5A059] -right-2">
        {totalItems}
      </span>
      <span className="absolute mr-4 bg-black/80 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none right-full">
        View Cart
      </span>
    </motion.button>
  );
};

export const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, isCartOpen, setIsCartOpen } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [deliveryFee, setDeliveryFee] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (!isCartOpen) {
      setStep(1);
    }
  }, [isCartOpen]);

  const getWhatsAppUrl = () => {
    const fee = parseFloat(deliveryFee) || 0;
    const finalTotal = totalPrice + fee;
    const orderItems = cart.map(item => `- ${item.quantity}x ${item.name} (${item.price * item.quantity} EGP)`).join('\n');
    
    const message = `Hello Cairo's! I'd like to place an order:\n\n*Customer Details:*\n- Name: ${customerName}\n- Address: ${customerAddress}\n${fee > 0 ? `- Delivery Fee: ${fee} EGP\n` : ''}\n*Order Items:*\n${orderItems}\n\n*Total: ${finalTotal} EGP*`;
    
    const whatsappNumbers = ["201222201160", "201203475096"];
    const selectedNumber = whatsappNumbers[Math.floor(Math.random() * whatsappNumbers.length)];
    
    return `https://wa.me/${selectedNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 h-full w-full max-w-md bg-[#0a0a0a] z-[80] shadow-2xl flex flex-col right-0 border-l border-gold/20"
          >
            {/* Header */}
            <div className="p-6 border-b border-gold/10 flex items-center justify-between bg-black">
              <div className="flex items-center gap-3">
                {step === 2 && (
                  <button 
                    onClick={() => setStep(1)}
                    className="p-1 hover:bg-white/5 rounded-full transition-colors text-gold mr-1"
                  >
                    <ArrowLeft size={20} />
                  </button>
                )}
                <ShoppingCart className="text-gold" size={24} />
                <h2 className="text-xl font-bold text-gold uppercase tracking-wider">
                  {step === 1 ? 'Your Cart' : 'Checkout'}
                </h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/70 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                  <div className="w-20 h-20 rounded-full bg-gold/5 flex items-center justify-center">
                    <ShoppingCart size={40} className="text-gold/30" />
                  </div>
                  <p className="text-white/70 font-medium">Your cart is empty</p>
                  <button onClick={() => setIsCartOpen(false)} className="text-gold hover:underline text-sm">Start Shopping</button>
                </div>
              ) : step === 1 ? (
                /* Step 1: Order Summary */
                <div className="space-y-6">
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <motion.div 
                        layout
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-4 py-4 border-b border-white/5 transition-all group relative"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-bold text-white group-hover:text-gold transition-colors truncate pr-6 pl-0">{item.name}</h3>
                            <button onClick={() => removeFromCart(item.id)} className="text-white/30 hover:text-red-500 transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-gold font-bold mb-3">
                            {item.price} <span className="text-[10px] opacity-70">EGP</span>
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-1">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-md transition-colors text-gold"><Minus size={14} /></button>
                              <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-md transition-colors text-gold"><Plus size={14} /></button>
                            </div>
                            <p className="font-bold text-white">
                              {item.price * item.quantity} <span className="text-xs opacity-50">EGP</span>
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full py-3 border border-dashed border-gold/30 rounded-xl text-gold/70 hover:text-gold hover:border-gold/50 hover:bg-gold/5 transition-all text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <Plus size={16} />
                    Add More Items
                  </button>
                </div>
              ) : (
                /* Step 2: Delivery Details */
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="bg-white/5 p-4 rounded-xl border border-gold/10 mb-6">
                    <h3 className="text-gold text-xs uppercase tracking-widest mb-3 font-bold">Order Summary</h3>
                    <div className="space-y-2">
                      {cart.map(item => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span className="text-white/70">{item.quantity}x {item.name}</span>
                          <span className="text-white font-medium">{item.price * item.quantity} EGP</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] text-gold uppercase tracking-widest mb-1 block">Full Name</label>
                      <input 
                        type="text" 
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold/50 outline-none transition-colors placeholder:text-white/20"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gold uppercase tracking-widest mb-1 block">Delivery Address</label>
                      <textarea 
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="Enter your full address"
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold/50 outline-none transition-colors placeholder:text-white/20 resize-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gold uppercase tracking-widest mb-1 block">Delivery Fee (Optional)</label>
                      <input 
                        type="number" 
                        value={deliveryFee}
                        onChange={(e) => setDeliveryFee(e.target.value)}
                        placeholder="Enter delivery fee if known"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold/50 outline-none transition-colors placeholder:text-white/20"
                      />
                    </div>
                    {error && <p className="text-red-500 text-[10px] uppercase tracking-wider animate-pulse">{error}</p>}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gold/10 bg-black space-y-4">
                <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-xl border border-gold/10">
                  <div className="flex justify-between items-center">
                    <span className="text-white/40 uppercase text-[10px] tracking-[0.2em]">Subtotal</span>
                    <span className="text-white font-bold">{totalPrice} EGP</span>
                  </div>
                  {step === 2 && parseFloat(deliveryFee) > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-white/40 uppercase text-[10px] tracking-[0.2em]">Delivery</span>
                      <span className="text-white font-bold">{deliveryFee} EGP</span>
                    </div>
                  )}
                  <div className="h-px bg-gold/10 my-1" />
                  <div className="flex justify-between items-end">
                    <span className="text-white/60 uppercase text-[10px] tracking-[0.2em] mb-1">Total Amount</span>
                    <div className="text-right">
                      <span className="text-4xl font-black text-gold tracking-tighter">
                        {totalPrice + (step === 2 ? (parseFloat(deliveryFee) || 0) : 0)}
                      </span>
                      <span className="text-xs font-bold text-gold/70 ml-1 uppercase">EGP</span>
                    </div>
                  </div>
                </div>
                
                {step === 1 ? (
                  <button
                    onClick={() => setStep(2)}
                    className="w-full bg-gold hover:bg-gold-dark text-black py-4 rounded-xl text-lg font-bold transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    Continue to Checkout
                  </button>
                ) : (
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!customerName.trim() || !customerAddress.trim()) {
                        e.preventDefault();
                        setError('Please enter your name and address');
                      }
                    }}
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl text-lg font-bold transition-all shadow-xl no-underline"
                  >
                    <MessageSquare size={24} />
                    Order via WhatsApp
                  </a>
                )}
                
                <p className="text-center text-[10px] text-white/40 uppercase tracking-widest">
                  {step === 1 ? 'Review your items before proceeding' : 'Your order will be sent to WhatsApp'}
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
