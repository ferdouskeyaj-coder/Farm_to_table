"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function WishlistPage() {
  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "জৈব টমেটো",
      nameEn: "Organic Tomato",
      price: 120,
      unit: "কেজি",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80",
      rating: 4.8,
      discount: 10,
      badge: "তাজা"
    },
    {
      id: 2,
      name: "তাজা স্ট্রবেরি",
      nameEn: "Fresh Strawberry",
      price: 350,
      unit: "কেজি",
      image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=400&q=80",
      rating: 4.9,
      discount: 0,
      badge: "জৈব"
    }
  ]);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} কার্টে যোগ করা হয়েছে!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-sage/5 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-forest mb-2">আমার উইশলিস্ট</h1>
          <p className="text-sage">{wishlist.length} টি পণ্য সংরক্ষিত</p>
        </motion.div>

        {wishlist.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-white rounded-4xl shadow-lg border border-sage/20"
          >
            <div className="text-7xl mb-4">💚</div>
            <h3 className="text-2xl font-bold text-forest mb-2">উইশলিস্ট খালি</h3>
            <p className="text-sage mb-6">আপনার পছন্দের পণ্য যোগ করুন</p>
            <Link href="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-forest text-cream rounded-full font-semibold"
              >
                শপিং করুন
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product, index) => {
              const discountedPrice = product.discount > 0 
                ? Math.round(product.price * (1 - product.discount / 100))
                : product.price;

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-sage/20 hover:border-forest/30 hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-sage/10 to-forest/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </button>

                    {product.discount > 0 && (
                      <span className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white rounded-full text-xs font-bold shadow-lg">
                        {product.discount}% ছাড়
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-forest mb-1">{product.name}</h3>
                    <p className="text-sm text-sage mb-3">{product.nameEn}</p>
                    
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-extrabold text-forest">৳{discountedPrice}</span>
                      {product.discount > 0 && (
                        <span className="text-sm text-sage line-through">৳{product.price}</span>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAddToCart(product)}
                      className="w-full py-3 bg-gradient-to-r from-forest to-sage text-cream rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                      কার্টে যোগ করুন
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
