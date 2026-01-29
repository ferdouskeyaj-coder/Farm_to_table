"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NutritionPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const nutritionData = [
    {
      id: 1,
      name: "মুরগির মাংস",
      nameEn: "Chicken Breast",
      category: "protein",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&q=80",
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      vitamins: ["B3", "B6", "B12"],
      benefits: ["পেশী তৈরি করে", "রোগ প্রতিরোধ ক্ষমতা বাড়ায়", "হৃদরোগের ঝুঁকি কমায়"]
    },
    {
      id: 2,
      name: "পালং শাক",
      nameEn: "Spinach",
      category: "vegetable",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&q=80",
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4,
      vitamins: ["A", "C", "K", "B9"],
      benefits: ["চোখের স্বাস্থ্য ভালো রাখে", "রক্তচাপ নিয়ন্ত্রণ করে", "হাড় মজবুত করে"]
    },
    {
      id: 3,
      name: "ব্লুবেরি",
      nameEn: "Blueberries",
      category: "fruit",
      image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800&q=80",
      calories: 57,
      protein: 0.7,
      carbs: 14.5,
      fat: 0.3,
      vitamins: ["C", "K", "B6"],
      benefits: ["মস্তিষ্ক সুস্থ রাখে", "হৃদরোগ প্রতিরোধ করে", "অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ"]
    },
    {
      id: 4,
      name: "মিষ্টি আলু",
      nameEn: "Sweet Potato",
      category: "carbs",
      image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=800&q=80",
      calories: 86,
      protein: 1.6,
      carbs: 20,
      fat: 0.1,
      vitamins: ["A", "C", "B6"],
      benefits: ["চোখের জন্য ভালো", "রোগ প্রতিরোধ ক্ষমতা বাড়ায়", "রক্তে শর্করা নিয়ন্ত্রণ করে"]
    },
    {
      id: 5,
      name: "বাদাম",
      nameEn: "Almonds",
      category: "nuts",
      image: "https://images.unsplash.com/photo-1508736793122-f516e3ba5569?w=800&q=80",
      calories: 579,
      protein: 21,
      carbs: 22,
      fat: 50,
      vitamins: ["E", "B2"],
      benefits: ["কোলেস্টেরল কমায়", "মস্তিষ্ক সুস্থ রাখে", "ওজন নিয়ন্ত্রণে সাহায্য করে"]
    },
    {
      id: 6,
      name: "দই",
      nameEn: "Greek Yogurt",
      category: "dairy",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
      calories: 59,
      protein: 10,
      carbs: 3.6,
      fat: 0.4,
      vitamins: ["B12", "B2"],
      benefits: ["হজম শক্তি বাড়ায়", "হাড় মজবুত করে", "রোগ প্রতিরোধ ক্ষমতা বাড়ায়"]
    },
    {
      id: 7,
      name: "ডিম",
      nameEn: "Eggs",
      category: "protein",
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800&q=80",
      calories: 155,
      protein: 13,
      carbs: 1.1,
      fat: 11,
      vitamins: ["A", "D", "B12"],
      benefits: ["মস্তিষ্ক বিকাশে সাহায্য করে", "চোখের স্বাস্থ্য ভালো রাখে", "পেশী তৈরি করে"]
    },
    {
      id: 8,
      name: "ব্রকলি",
      nameEn: "Broccoli",
      category: "vegetable",
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800&q=80",
      calories: 34,
      protein: 2.8,
      carbs: 7,
      fat: 0.4,
      vitamins: ["C", "K", "A"],
      benefits: ["ক্যান্সার প্রতিরোধ করে", "হৃদরোগ প্রতিরোধ করে", "হাড় মজবুত করে"]
    }
  ];

  const categories = [
    { id: "all", name: "সব খাবার", icon: "🍽️", color: "from-purple-500 to-pink-500" },
    { id: "protein", name: "প্রোটিন", icon: "🍗", color: "from-red-500 to-pink-500" },
    { id: "vegetable", name: "শাকসবজি", icon: "🥬", color: "from-green-500 to-emerald-500" },
    { id: "fruit", name: "ফলমূল", icon: "🍎", color: "from-orange-500 to-red-500" },
    { id: "carbs", name: "শর্করা", icon: "🍚", color: "from-amber-500 to-orange-500" },
    { id: "dairy", name: "দুগ্ধজাত", icon: "🥛", color: "from-blue-500 to-cyan-500" },
    { id: "nuts", name: "বাদাম", icon: "🥜", color: "from-yellow-600 to-orange-600" }
  ];

  const filteredFoods = selectedCategory === "all" 
    ? nutritionData 
    : nutritionData.filter(food => food.category === selectedCategory);

  const tips = [
    { icon: "🥗", title: "রঙিন খাবার খান", desc: "বিভিন্ন রঙের খাবার বিভিন্ন পুষ্টি দেয়" },
    { icon: "💧", title: "পানি পান করুন", desc: "দিনে ৮-১০ গ্লাস পানি পান করুন" },
    { icon: "⚖️", title: "সুষম খাবার", desc: "প্রতি খাবারে প্রোটিন, শর্করা ও চর্বি রাখুন" },
    { icon: "🍽️", title: "পরিমিত খান", desc: "স্বাস্থ্যকর খাবারও পরিমিত পরিমাণে খান" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-sage/5">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest via-forest to-sage py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-7xl sm:text-8xl mb-6"
            >
              🥗
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream mb-6">
              খাদ্য ও পুষ্টি গাইড
            </h1>
            <p className="text-lg sm:text-xl text-sage/90 leading-relaxed">
              প্রাকৃতিক খাবারের পুষ্টিগুণ জানুন। কিভাবে প্রতিটি খাবার আপনার স্বাস্থ্য ভালো রাখে এবং রোগ প্রতিরোধ করে।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 sm:px-6 -mt-16 relative z-20 mb-12">
        <div className="grid grid-cols-3 gap-4">
          {[
            { number: `${nutritionData.length}+`, label: "খাবার", icon: "🍽️" },
            { number: "১০০%", label: "প্রাকৃতিক", icon: "🌿" },
            { number: "বিজ্ঞান", label: "ভিত্তিক", icon: "🔬" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border-2 border-sage/20 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                className="text-4xl sm:text-5xl mb-2"
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl sm:text-3xl font-extrabold text-forest">{stat.number}</div>
              <div className="text-sm sm:text-base text-sage font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-12">
        
        {/* Categories */}
        <div className="mb-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                    : 'bg-white text-forest border-2 border-sage/20 hover:border-forest/30'
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span>{cat.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {filteredFoods.map((food, index) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-4xl overflow-hidden shadow-xl border-2 border-sage/20 hover:border-forest/30 hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-bold text-forest">{food.calories} ক্যালরি</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-forest mb-1">{food.name}</h3>
                <p className="text-sm text-sage mb-4">{food.nameEn}</p>

                {/* Macronutrients */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-3 text-white text-center">
                    <div className="text-2xl font-bold">{food.protein}g</div>
                    <div className="text-xs">প্রোটিন</div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-3 text-white text-center">
                    <div className="text-2xl font-bold">{food.carbs}g</div>
                    <div className="text-xs">শর্করা</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-3 text-white text-center">
                    <div className="text-2xl font-bold">{food.fat}g</div>
                    <div className="text-xs">চর্বি</div>
                  </div>
                </div>

                {/* Vitamins */}
                <div className="mb-4">
                  <h4 className="font-bold text-forest mb-2 text-sm">ভিটামিন</h4>
                  <div className="flex flex-wrap gap-2">
                    {food.vitamins.map((vitamin, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        ভিটামিন {vitamin}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-bold text-forest mb-2 text-sm flex items-center gap-2">
                    <span className="text-xl">💚</span>
                    স্বাস্থ্য উপকারিতা
                  </h4>
                  <ul className="space-y-1">
                    {food.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sage text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tips Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-4">পুষ্টি টিপস</h2>
            <p className="text-lg text-sage">স্বাস্থ্যকর জীবনযাপনের জন্য টিপস</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white rounded-3xl p-6 shadow-xl border-2 border-sage/20 text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: index * 0.3 }}
                  className="text-5xl mb-4"
                >
                  {tip.icon}
                </motion.div>
                <h3 className="font-bold text-forest mb-2">{tip.title}</h3>
                <p className="text-sage text-sm">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
