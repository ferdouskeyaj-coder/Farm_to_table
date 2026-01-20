"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    id: 1,
    name: "ফুলকপি",
    nameEn: "Premium Organic Cauliflower",
    price: 60,
    originalPrice: 80,
    discount: 25,
    unit: "প্রতি কেজি",
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
      "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=800&q=80",
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=80"
    ],
    stock: 150,
    stockStatus: "inStock",
    badges: ["জৈব", "খামার থেকে সরাসরি", "আজ তাজা"],
    category: "শাক-সবজি",
    harvestTime: "২ দিন আগে",
    
    nutrition: {
      calories: 25,
      protein: 2,
      fat: 0.3,
      carbs: 5,
      fiber: 2.5,
      vitamins: [
        { name: "ভিটামিন C", amount: "48.2mg", percentage: 80 },
        { name: "ভিটামিন K", amount: "15.5mcg", percentage: 20 },
        { name: "ভিটামিন B6", amount: "0.2mg", percentage: 12 }
      ],
      minerals: [
        { name: "পটাশিয়াম", amount: "303mg" },
        { name: "ফোলেট", amount: "57mcg" }
      ]
    },
    
    benefits: [
      "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে",
      "হজম শক্তি বাড়ায় এবং কোষ্ঠকাঠিন্য দূর করে",
      "হার্ট সুস্থ রাখে ও রক্তচাপ নিয়ন্ত্রণ করে",
      "ক্যান্সার প্রতিরোধে সহায়ক",
      "হাড় মজবুত করে ও ত্বক উজ্জ্বল রাখে"
    ],
    
    description: "এই ফুলকপি সম্পূর্ণ জৈব পদ্ধতিতে উৎপাদিত। কোনো রাসায়নিক সার বা কীটনাশক ব্যবহার করা হয়নি। তাজা এবং পুষ্টিগুণে ভরপুর এই ফুলকপি আপনার পরিবারের স্বাস্থ্যের জন্য নিরাপদ।",
    
    howMade: "প্রাকৃতিক কম্পোস্ট সার ব্যবহার করে জৈব পদ্ধতিতে চাষ করা হয়েছে। কোনো ক্ষতিকর রাসায়নিক ব্যবহার করা হয়নি। প্রতিদিন সকালে তাজা অবস্থায় সংগ্রহ করা হয়।",
    
    delivery: {
      time: "২-৩ ঘণ্টা",
      isFree: true,
      minOrder: 500
    },
    
    farmer: {
      name: "আব্দুল করিম",
      location: "মানিকগঞ্জ, ঢাকা",
      experience: "১৫ বছর",
      totalProducts: 45,
      rating: 4.8,
      verified: true,
      image: "👨‍🌾",
      description: "জৈব চাষে বিশেষজ্ঞ। ১৫ বছর ধরে রাসায়নিক মুক্ত সবজি উৎপাদন করছি।"
    },
    
    ratings: {
      average: 4.8,
      total: 245,
      distribution: {
        5: 180,
        4: 45,
        3: 15,
        2: 3,
        1: 2
      }
    },
    
    reviews: [
      {
        id: 1,
        name: "সালমা খাতুন",
        rating: 5,
        date: "২ দিন আগে",
        comment: "অসাধারণ তাজা। দাম অনুযায়ী মান খুবই ভালো। বারবার কিনবো।",
        verified: true
      },
      {
        id: 2,
        name: "রফিক মিয়া",
        rating: 5,
        date: "৫ দিন আগে",
        comment: "সত্যিই জৈব। স্বাদ দারুণ। ডেলিভারিও দ্রুত।",
        verified: true
      }
    ],
    
    similarProducts: [
      {
        id: 2,
        name: "বাঁধাকপি",
        nameEn: "Cabbage",
        price: 40,
        image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=800&q=80",
        badge: "তাজা"
      },
      {
        id: 3,
        name: "গাজর",
        nameEn: "Carrot",
        price: 80,
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=80",
        badge: "জৈব"
      },
      {
        id: 4,
        name: "টমেটো",
        nameEn: "Tomato",
        price: 120,
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80",
        badge: "তাজা"
      }
    ]
  };

  const getStockColor = (status) => {
    if (status === "inStock") return "bg-green-500";
    if (status === "limited") return "bg-orange-500";
    return "bg-red-500";
  };

  const getStockText = (status) => {
    if (status === "inStock") return "স্টকে আছে";
    if (status === "limited") return "সীমিত স্টক";
    return "স্টক শেষ";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-green-50">
      
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/90 backdrop-blur-xl border-b border-forest/10 sticky top-0 z-50 shadow-sm"
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-2 hover:bg-sage/10 rounded-full"
              >
                <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <div>
                <h1 className="text-xl font-bold text-forest">পণ্যের বিস্তারিত</h1>
                <p className="text-xs text-sage">ড্যাশবোর্ডে ফিরে যান</p>
              </div>
            </Link>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left: Product Images */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-[600px] rounded-4xl overflow-hidden shadow-2xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {product.badges.map((badge, index) => (
                  <motion.span
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-bold shadow-lg"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>

              {/* Wishlist & Share */}
              <div className="absolute top-6 right-6 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                >
                  <svg 
                    className={`w-7 h-7 ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-600'}`}
                    fill={isWishlisted ? "currentColor" : "none"}
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                >
                  <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </motion.button>
              </div>

              {/* Discount Badge */}
              {product.discount > 0 && (
                <div className="absolute bottom-6 left-6">
                  <div className="px-6 py-3 bg-red-500 text-white rounded-2xl font-bold text-lg shadow-lg">
                    {product.discount}% ছাড়
                  </div>
                </div>
              )}
            </motion.div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="h-32 rounded-2xl overflow-hidden cursor-pointer border-2 border-forest/20 hover:border-forest"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            
            {/* Category & Stock Status */}
            <div className="flex items-center justify-between">
              <span className="px-4 py-2 bg-sage/20 text-forest rounded-full font-semibold">
                {product.category}
              </span>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${getStockColor(product.stockStatus)} animate-pulse`}></div>
                <span className="font-semibold text-forest">{getStockText(product.stockStatus)}</span>
              </div>
            </div>

            {/* Product Name */}
            <div>
              <h1 className="text-5xl font-extrabold text-forest mb-2">{product.name}</h1>
              <p className="text-2xl text-sage font-semibold">{product.nameEn}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${i < Math.floor(product.ratings.average) ? 'text-yellow-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold text-forest">{product.ratings.average} ({product.ratings.total} রিভিউ)</span>
            </div>

            {/* Price */}
            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm text-sage mb-1">বর্তমান মূল্য</p>
                  <div className="flex items-center gap-3">
                    <p className="text-5xl font-extrabold text-forest">৳{product.price}</p>
                    <p className="text-xl text-gray-400 line-through">৳{product.originalPrice}</p>
                  </div>
                  <p className="text-sm text-sage mt-1">{product.unit}</p>
                </div>
              </div>
            </div>

            {/* Stock Info */}
            <div className="p-6 bg-blue-50 rounded-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-sage mb-1">মজুদ পরিমাণ</p>
                  <p className="text-3xl font-bold text-forest">{product.stock} কেজি</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-sage mb-1">সংগ্রহ</p>
                  <p className="text-lg font-semibold text-forest">{product.harvestTime}</p>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <p className="text-lg font-semibold text-forest">পরিমাণ:</p>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                  className="w-12 h-12 bg-sage/20 rounded-xl font-bold text-xl text-forest hover:bg-sage/30"
                >
                  -
                </motion.button>
                <span className="w-16 text-center text-2xl font-bold text-forest">{selectedQuantity}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                  className="w-12 h-12 bg-sage/20 rounded-xl font-bold text-xl text-forest hover:bg-sage/30"
                >
                  +
                </motion.button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 ${getStockColor(product.stockStatus)} text-white rounded-3xl font-bold text-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>কার্টে যোগ করুন</span>
              </motion.button>

              {product.stockStatus === "outOfStock" && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-orange-500 text-white rounded-3xl font-bold text-xl shadow-lg"
                >
                  প্রি-অর্ডার করুন
                </motion.button>
              )}
            </div>

            {/* Delivery Info */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-bold text-forest">দ্রুত ডেলিভারি</p>
                  <p className="text-sage">{product.delivery.time} এর মধ্যে পৌঁছে যাবে</p>
                  {product.delivery.isFree && (
                    <p className="text-green-600 font-semibold">৳{product.delivery.minOrder}+ অর্ডারে ফ্রি ডেলিভারি</p>
                  )}
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Tabs Section */}
        <div className="mb-12">
          <div className="flex gap-4 mb-8 overflow-x-auto">
            {[
              { id: "description", label: "বিবরণ", icon: "📝" },
              { id: "nutrition", label: "পুষ্টি তথ্য", icon: "🥗" },
              { id: "benefits", label: "উপকারিতা", icon: "💚" },
              { id: "farmer", label: "কৃষক তথ্য", icon: "👨‍🌾" },
              { id: "reviews", label: "রিভিউ", icon: "⭐" }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-3xl font-bold whitespace-nowrap transition-all flex items-center gap-3 ${
                  activeTab === tab.id
                    ? "bg-forest text-white shadow-xl"
                    : "bg-white text-forest border-2 border-sage/30"
                }`}
              >
                <span className="text-2xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-4xl p-8 shadow-xl"
            >
              
              {/* Description Tab */}
              {activeTab === "description" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-forest mb-4">পণ্যের বিবরণ</h2>
                  <p className="text-lg text-forest/80 leading-relaxed">{product.description}</p>
                  
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-forest mb-4">কিভাবে তৈরি</h3>
                    <p className="text-lg text-forest/80 leading-relaxed">{product.howMade}</p>
                  </div>
                </div>
              )}

              {/* Nutrition Tab */}
              {activeTab === "nutrition" && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-forest mb-4">পুষ্টি তথ্য</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-orange-50 rounded-3xl">
                      <h3 className="text-xl font-bold text-forest mb-4">মূল পুষ্টি উপাদান</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sage">ক্যালোরি</span>
                          <span className="font-bold text-forest">{product.nutrition.calories} kcal</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sage">প্রোটিন</span>
                          <span className="font-bold text-forest">{product.nutrition.protein}g</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sage">ফ্যাট</span>
                          <span className="font-bold text-forest">{product.nutrition.fat}g</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sage">কার্বোহাইড্রেট</span>
                          <span className="font-bold text-forest">{product.nutrition.carbs}g</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sage">ফাইবার</span>
                          <span className="font-bold text-forest">{product.nutrition.fiber}g</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-blue-50 rounded-3xl">
                      <h3 className="text-xl font-bold text-forest mb-4">ভিটামিন</h3>
                      <div className="space-y-4">
                        {product.nutrition.vitamins.map((vitamin, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-2">
                              <span className="font-semibold text-forest">{vitamin.name}</span>
                              <span className="text-sage">{vitamin.percentage}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-blue-500 rounded-full"
                                style={{ width: `${vitamin.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-green-50 rounded-3xl">
                    <h3 className="text-xl font-bold text-forest mb-4">খনিজ উপাদান</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {product.nutrition.minerals.map((mineral, index) => (
                        <div key={index} className="flex justify-between p-4 bg-white rounded-2xl">
                          <span className="text-sage">{mineral.name}</span>
                          <span className="font-bold text-forest">{mineral.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Benefits Tab */}
              {activeTab === "benefits" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-forest mb-4">স্বাস্থ্য উপকারিতা</h2>
                  <div className="space-y-4">
                    {product.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-6 bg-green-50 rounded-3xl"
                      >
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-lg text-forest font-medium">{benefit}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-4xl">
                    <h3 className="text-2xl font-bold text-forest mb-4">কেন এই পণ্য বেছে নেবেন?</h3>
                    <ul className="space-y-3 text-lg text-forest/80">
                      <li className="flex items-center gap-3">
                        <span className="text-green-500 text-2xl">✓</span>
                        <span>১০০% জৈব এবং রাসায়নিক মুক্ত</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-500 text-2xl">✓</span>
                        <span>সরাসরি খামার থেকে আপনার ঘরে</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-500 text-2xl">✓</span>
                        <span>তাজা এবং পুষ্টিগুণ সমৃদ্ধ</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-500 text-2xl">✓</span>
                        <span>প্রত্যয়িত এবং যাচাইকৃত</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Farmer Tab */}
              {activeTab === "farmer" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-forest mb-4">কৃষক তথ্য</h2>
                  
                  <div className="flex items-start gap-6 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-4xl">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-6xl shadow-xl">
                      {product.farmer.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold text-forest">{product.farmer.name}</h3>
                        {product.farmer.verified && (
                          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-bold flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            যাচাইকৃত
                          </span>
                        )}
                      </div>
                      <p className="text-sage text-lg mb-1">📍 {product.farmer.location}</p>
                      <p className="text-sage text-lg mb-4">⏱️ অভিজ্ঞতা: {product.farmer.experience}</p>
                      <p className="text-forest/80 text-lg leading-relaxed mb-4">{product.farmer.description}</p>
                      
                      <div className="flex items-center gap-6 mb-6">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-forest">{product.farmer.rating}</p>
                          <p className="text-sm text-sage">রেটিং</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-forest">{product.farmer.totalProducts}</p>
                          <p className="text-sm text-sage">পণ্য</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-forest text-white rounded-2xl font-bold flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          খামার দেখুন
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-white border-2 border-forest text-forest rounded-2xl font-bold flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                          বার্তা পাঠান
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === "reviews" && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-forest mb-4">গ্রাহক রিভিউ</h2>
                  
                  {/* Rating Summary */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-4xl text-center">
                      <p className="text-7xl font-extrabold text-forest mb-2">{product.ratings.average}</p>
                      <div className="flex justify-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sage text-lg">{product.ratings.total} টি রিভিউ</p>
                    </div>

                    <div className="space-y-3">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-4">
                          <span className="w-8 text-forest font-semibold">{star}★</span>
                          <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-yellow-500 rounded-full"
                              style={{ width: `${(product.ratings.distribution[star] / product.ratings.total) * 100}%` }}
                            ></div>
                          </div>
                          <span className="w-12 text-right text-sage">{product.ratings.distribution[star]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="p-6 bg-gray-50 rounded-3xl">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="font-bold text-forest text-lg">{review.name}</h4>
                              {review.verified && (
                                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">
                                  যাচাইকৃত ক্রেতা
                                </span>
                              )}
                            </div>
                            <p className="text-sage text-sm">{review.date}</p>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-forest/80 leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Trust & Safety */}
        <div className="mb-16 p-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-4xl text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">বিশ্বস্ততা ও নিরাপত্তা</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "✓", title: "১০০% খাঁটি", desc: "কোনো ভেজাল নেই" },
              { icon: "🌿", title: "খামার থেকে তাজা", desc: "সরাসরি সংগ্রহ" },
              { icon: "🔒", title: "নিরাপদ পেমেন্ট", desc: "সুরক্ষিত লেনদেন" },
              { icon: "↩️", title: "সহজ রিটার্ন", desc: "৭ দিনের গ্যারান্টি" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-green-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-forest">অনুরূপ পণ্য</h2>
            <Link href="/dashboard" className="text-forest font-bold hover:text-sage flex items-center gap-2">
              <span>সব দেখুন</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {product.similarProducts.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative h-64">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-bold">
                    {item.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-forest mb-1">{item.name}</h3>
                  <p className="text-sm text-sage mb-4">{item.nameEn}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold text-forest">৳{item.price}</p>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-4 py-2 bg-forest text-white rounded-2xl font-bold"
                    >
                      দেখুন
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
