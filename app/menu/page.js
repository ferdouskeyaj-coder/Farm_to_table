"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [cartItems, setCartItems] = useState([]);

  const categories = [
    { id: "all", name: "সব পণ্য", icon: "🛒", color: "from-forest to-sage" },
    { id: "vegetables", name: "শাক-সবজি", icon: "🥬", color: "from-green-500 to-emerald-600" },
    { id: "fruits", name: "ফলমূল", icon: "🍎", color: "from-red-500 to-pink-600" },
    { id: "dairy", name: "দুগ্ধজাত", icon: "🥛", color: "from-blue-500 to-cyan-600" },
    { id: "nuts", name: "বাদাম", icon: "🥜", color: "from-amber-600 to-orange-600" },
    { id: "honey", name: "মধু", icon: "🍯", color: "from-yellow-500 to-amber-600" },
    { id: "sweets", name: "মিষ্টি", icon: "🍰", color: "from-purple-500 to-pink-600" }
  ];

  const products = [
    {
      id: 1,
      name: "জৈব টমেটো",
      nameEn: "Organic Tomato",
      price: 120,
      unit: "কেজি",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80",
      category: "vegetables",
      rating: 4.8,
      reviews: 120,
      badge: "তাজা",
      inStock: true,
      discount: 10
    },
    {
      id: 2,
      name: "তাজা স্ট্রবেরি",
      nameEn: "Fresh Strawberry",
      price: 350,
      unit: "কেজি",
      image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=400&q=80",
      category: "fruits",
      rating: 4.9,
      reviews: 85,
      badge: "জৈব",
      inStock: true,
      discount: 0
    },
    {
      id: 3,
      name: "খামারের ডিম",
      nameEn: "Farm Eggs",
      price: 180,
      unit: "১২টি",
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80",
      category: "dairy",
      rating: 5.0,
      reviews: 200,
      badge: "মুক্ত পরিসর",
      inStock: true,
      discount: 0
    },
    {
      id: 4,
      name: "সবুজ লেটুস",
      nameEn: "Green Lettuce",
      price: 90,
      unit: "কেজি",
      image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&q=80",
      category: "vegetables",
      rating: 4.6,
      reviews: 65,
      badge: "তাজা",
      inStock: true,
      discount: 15
    },
    {
      id: 5,
      name: "তাজা দুধ",
      nameEn: "Fresh Milk",
      price: 85,
      unit: "লিটার",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
      category: "dairy",
      rating: 4.7,
      reviews: 150,
      badge: "জৈব",
      inStock: true,
      discount: 0
    },
    {
      id: 6,
      name: "মিশ্র বেরি",
      nameEn: "Mixed Berries",
      price: 420,
      unit: "কেজি",
      image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&q=80",
      category: "fruits",
      rating: 4.8,
      reviews: 95,
      badge: "প্রিমিয়াম",
      inStock: true,
      discount: 5
    },
    {
      id: 7,
      name: "কাজু বাদাম",
      nameEn: "Cashew Nuts",
      price: 850,
      unit: "৫০০ গ্রাম",
      image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=400&q=80",
      category: "nuts",
      rating: 4.9,
      reviews: 110,
      badge: "প্রিমিয়াম",
      inStock: true,
      discount: 0
    },
    {
      id: 8,
      name: "সুন্দরবনের মধু",
      nameEn: "Sundarban Honey",
      price: 650,
      unit: "৫০০ গ্রাম",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784acc?w=400&q=80",
      category: "honey",
      rating: 5.0,
      reviews: 180,
      badge: "খাঁটি",
      inStock: true,
      discount: 0
    },
    {
      id: 9,
      name: "রসগোল্লা",
      nameEn: "Rasgulla",
      price: 280,
      unit: "১ কেজি",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
      category: "sweets",
      rating: 4.7,
      reviews: 140,
      badge: "ঐতিহ্যবাহী",
      inStock: true,
      discount: 10
    },
    {
      id: 10,
      name: "আম",
      nameEn: "Mango",
      price: 180,
      unit: "কেজি",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80",
      category: "fruits",
      rating: 4.9,
      reviews: 220,
      badge: "মৌসুমী",
      inStock: true,
      discount: 0
    },
    {
      id: 11,
      name: "ব্রকলি",
      nameEn: "Broccoli",
      price: 150,
      unit: "কেজি",
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&q=80",
      category: "vegetables",
      rating: 4.5,
      reviews: 75,
      badge: "জৈব",
      inStock: true,
      discount: 0
    },
    {
      id: 12,
      name: "পনির",
      nameEn: "Cheese",
      price: 450,
      unit: "৫০০ গ্রাম",
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&q=80",
      category: "dairy",
      rating: 4.8,
      reviews: 95,
      badge: "হস্তনির্মিত",
      inStock: true,
      discount: 0
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       product.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert(`${product.name} কার্টে যোগ করা হয়েছে!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-sage/5">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest via-forest to-sage py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cream mb-4">
              আমাদের পণ্য সমূহ
            </h1>
            <p className="text-lg sm:text-xl text-sage/90 mb-8">
              তাজা ও জৈব পণ্য সরাসরি খামার থেকে
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="পণ্য খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-full text-forest placeholder-sage focus:outline-none focus:ring-4 focus:ring-cream/50 shadow-xl text-base sm:text-lg"
              />
              <svg className="w-6 h-6 text-sage absolute left-5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="sticky top-20 sm:top-24 z-30 bg-white/95 backdrop-blur-md shadow-md border-b border-sage/20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-sage/10 text-forest hover:bg-sage/20"
                }`}
              >
                <span className="text-xl sm:text-2xl">{category.icon}</span>
                <span className="text-sm sm:text-base">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-forest">
              {filteredProducts.length} টি পণ্য পাওয়া গেছে
            </h2>
            <p className="text-sm text-sage">
              {selectedCategory === "all" ? "সব ক্যাটাগরি" : categories.find(c => c.id === selectedCategory)?.name}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <select className="px-4 py-2 bg-white rounded-full border-2 border-sage/20 text-forest font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-forest/20">
              <option>জনপ্রিয়</option>
              <option>দাম: কম থেকে বেশি</option>
              <option>দাম: বেশি থেকে কম</option>
              <option>রেটিং</option>
            </select>
            
            <div className="hidden sm:flex items-center gap-2 bg-white rounded-full p-1 border-2 border-sage/20">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-all ${viewMode === "grid" ? "bg-forest text-cream" : "text-sage"}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-all ${viewMode === "list" ? "bg-forest text-cream" : "text-sage"}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-white rounded-4xl shadow-lg border border-sage/20"
          >
            <div className="text-6xl sm:text-7xl mb-4">🔍</div>
            <h3 className="text-xl sm:text-2xl font-bold text-forest mb-2">কোন পণ্য পাওয়া যায়নি</h3>
            <p className="text-sage mb-6">অন্য ক্যাটাগরি বা সার্চ করে দেখুন</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-6 py-3 bg-forest text-cream rounded-full font-semibold hover:bg-forest/90 transition-all"
            >
              সব পণ্য দেখুন
            </button>
          </motion.div>
        ) : (
          <div className={`grid gap-4 sm:gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-sage/20 hover:border-forest/30 hover:shadow-2xl transition-all group"
              >
                {/* Product Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-sage/10 to-forest/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold shadow-lg">
                      {product.badge}
                    </span>
                    {product.discount > 0 && (
                      <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-bold shadow-lg">
                        {product.discount}% ছাড়
                      </span>
                    )}
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full flex items-center gap-1 shadow-lg">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold text-forest">{product.rating}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-forest mb-1">{product.name}</h3>
                  <p className="text-xs sm:text-sm text-sage mb-3">{product.nameEn}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-forest">
                          ৳{product.discount > 0 ? Math.round(product.price * (1 - product.discount / 100)) : product.price}
                        </span>
                        {product.discount > 0 && (
                          <span className="text-sm text-sage line-through">৳{product.price}</span>
                        )}
                      </div>
                      <span className="text-xs text-sage">প্রতি {product.unit}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-sage">{product.reviews}+ রিভিউ</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link href={`/product/${product.id}`} className="flex-1">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-4 py-2.5 sm:py-3 bg-sage/10 text-forest rounded-full font-semibold hover:bg-sage/20 transition-all text-sm sm:text-base"
                      >
                        বিস্তারিত
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => addToCart(product)}
                      className="flex-1 px-4 py-2.5 sm:py-3 bg-gradient-to-r from-forest to-sage text-cream rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <span>কার্ট</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Floating Cart Button */}
      {cartItems.length > 0 && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-forest to-sage text-cream rounded-full shadow-2xl flex items-center justify-center z-50"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            {cartItems.length}
          </span>
        </motion.button>
      )}
    </div>
  );
}
