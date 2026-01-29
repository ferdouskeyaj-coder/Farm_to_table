"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, cartCount, cartTotal, removeFromCart, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("bkash");
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    area: ""
  });

  const deliveryCharge = 60;
  const finalTotal = cartTotal + deliveryCharge;

  const paymentMethods = [
    { id: "bkash", name: "bKash", icon: "📱", color: "from-pink-500 to-pink-600" },
    { id: "nagad", name: "Nagad", icon: "💳", color: "from-orange-500 to-red-600" },
    { id: "rocket", name: "Rocket", icon: "🚀", color: "from-purple-500 to-purple-600" },
    { id: "card", name: "Card", icon: "💳", color: "from-blue-500 to-blue-600" },
    { id: "cod", name: "Cash on Delivery", icon: "💵", color: "from-green-500 to-green-600" }
  ];

  const handleCheckout = () => {
    if (!deliveryInfo.name || !deliveryInfo.phone || !deliveryInfo.address) {
      alert("দয়া করে সব তথ্য পূরণ করুন");
      return;
    }

    alert(`অর্ডার সফল হয়েছে! ${paymentMethod === "cod" ? "ডেলিভারির সময় পেমেন্ট করবেন।" : `${paymentMethod} এ পেমেন্ট করুন: 01XXXXXXXXX`}`);
    clearCart();
    setShowCheckout(false);
  };

  if (cartCount === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream via-white to-sage/5 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-8xl mb-6">🛒</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-forest mb-4">আপনার কার্ট খালি</h1>
          <p className="text-sage text-lg mb-8">পণ্য যোগ করতে শপিং করুন</p>
          <Link href="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-forest to-sage text-cream rounded-full font-bold text-lg shadow-xl"
            >
              শপিং শুরু করুন
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-sage/5 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-forest mb-2">আপনার কার্ট</h1>
          <p className="text-sage">{cartCount} টি পণ্য</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => {
              const discountedPrice = item.discount > 0 
                ? Math.round(item.price * (1 - item.discount / 100))
                : item.price;

              return (
                <motion.div
                  key={`${item.id}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-4 sm:p-6 shadow-lg border-2 border-sage/20 hover:border-forest/30 transition-all"
                >
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-sage/10 to-forest/5 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-forest">{item.name}</h3>
                          <p className="text-sm text-sage">{item.nameEn}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                          {item.badge}
                        </span>
                        {item.discount > 0 && (
                          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                            {item.discount}% ছাড়
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-forest">৳{discountedPrice}</span>
                            {item.discount > 0 && (
                              <span className="text-sm text-sage line-through">৳{item.price}</span>
                            )}
                          </div>
                          <span className="text-xs text-sage">প্রতি {item.unit}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={clearCart}
              className="w-full py-3 bg-red-50 text-red-600 rounded-2xl font-semibold hover:bg-red-100 transition-all"
            >
              সব পণ্য মুছে ফেলুন
            </motion.button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-6 shadow-xl border-2 border-sage/20 sticky top-28"
            >
              <h2 className="text-2xl font-bold text-forest mb-6">অর্ডার সামারি</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sage">
                  <span>সাবটোটাল ({cartCount} পণ্য)</span>
                  <span className="font-semibold">৳{cartTotal}</span>
                </div>
                <div className="flex justify-between text-sage">
                  <span>ডেলিভারি চার্জ</span>
                  <span className="font-semibold">৳{deliveryCharge}</span>
                </div>
                <div className="border-t-2 border-sage/20 pt-4">
                  <div className="flex justify-between text-forest text-xl font-bold">
                    <span>মোট</span>
                    <span>৳{finalTotal}</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowCheckout(true)}
                className="w-full py-4 bg-gradient-to-r from-forest to-sage text-cream rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                চেকআউট করুন
              </motion.button>

              <Link href="/menu">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-3 py-3 bg-sage/10 text-forest rounded-2xl font-semibold hover:bg-sage/20 transition-all"
                >
                  আরো কিনুন
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCheckout(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-4xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-forest">চেকআউট</h2>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="p-2 hover:bg-sage/10 rounded-full transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Delivery Information */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-forest mb-4">ডেলিভারি তথ্য</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="আপনার নাম"
                    value={deliveryInfo.name}
                    onChange={(e) => setDeliveryInfo({...deliveryInfo, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-sage/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
                  />
                  <input
                    type="tel"
                    placeholder="মোবাইল নম্বর"
                    value={deliveryInfo.phone}
                    onChange={(e) => setDeliveryInfo({...deliveryInfo, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-sage/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
                  />
                  <textarea
                    placeholder="সম্পূর্ণ ঠিকানা"
                    value={deliveryInfo.address}
                    onChange={(e) => setDeliveryInfo({...deliveryInfo, address: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-sage/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest resize-none"
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="শহর"
                      value={deliveryInfo.city}
                      onChange={(e) => setDeliveryInfo({...deliveryInfo, city: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-sage/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
                    />
                    <input
                      type="text"
                      placeholder="এলাকা"
                      value={deliveryInfo.area}
                      onChange={(e) => setDeliveryInfo({...deliveryInfo, area: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-sage/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-forest mb-4">পেমেন্ট মেথড</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-4 rounded-2xl border-2 transition-all ${
                        paymentMethod === method.id
                          ? `bg-gradient-to-br ${method.color} text-white border-transparent shadow-lg`
                          : "border-sage/20 hover:border-forest/30"
                      }`}
                    >
                      <div className="text-3xl mb-2">{method.icon}</div>
                      <div className={`text-sm font-semibold ${paymentMethod === method.id ? "text-white" : "text-forest"}`}>
                        {method.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Summary in Modal */}
              <div className="bg-gradient-to-br from-sage/10 to-forest/5 rounded-2xl p-4 mb-6">
                <div className="flex justify-between text-forest font-semibold mb-2">
                  <span>সাবটোটাল</span>
                  <span>৳{cartTotal}</span>
                </div>
                <div className="flex justify-between text-forest font-semibold mb-2">
                  <span>ডেলিভারি</span>
                  <span>৳{deliveryCharge}</span>
                </div>
                <div className="border-t-2 border-sage/20 pt-2 mt-2">
                  <div className="flex justify-between text-forest text-xl font-bold">
                    <span>মোট</span>
                    <span>৳{finalTotal}</span>
                  </div>
                </div>
              </div>

              {/* Confirm Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
                className="w-full py-4 bg-gradient-to-r from-forest to-sage text-cream rounded-2xl font-bold text-lg shadow-lg"
              >
                অর্ডার নিশ্চিত করুন
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
