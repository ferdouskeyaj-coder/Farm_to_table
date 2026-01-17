"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Organic Tomatoes",
      price: "৳120",
      image: "https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=400&q=80",
      category: "vegetables",
      badge: "Fresh"
    },
    {
      id: 2,
      name: "Fresh Strawberries",
      price: "৳350",
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&q=80",
      category: "fruits",
      badge: "Organic"
    },
    {
      id: 3,
      name: "Farm Eggs",
      price: "৳180",
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80",
      category: "dairy",
      badge: "Free Range"
    },
    {
      id: 4,
      name: "Green Lettuce",
      price: "৳90",
      image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&q=80",
      category: "vegetables",
      badge: "Fresh"
    },
    {
      id: 5,
      name: "Fresh Milk",
      price: "৳85",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
      category: "dairy",
      badge: "Organic"
    },
    {
      id: 6,
      name: "Mixed Berries",
      price: "৳420",
      image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&q=80",
      category: "fruits",
      badge: "Premium"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl">🌿</span>
              </div>
              <span className="text-xl font-bold text-gray-900">FarmTable</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/menu" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Shop</Link>
              <Link href="/nutrition" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Nutrition</Link>
              <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors font-medium">About</Link>
              <Link href="#contact" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Contact</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 text-white text-xs rounded-full flex items-center justify-center font-semibold">3</span>
              </button>
              <Link href="/dashboard" className="px-6 py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                <span>🎉</span>
                <span>Get 20% off your first order</span>
              </div>
              
              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Fresh Food<br />
                Delivered to<br />
                <span className="text-green-600">Your Doorstep</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Order fresh organic produce directly from local farms. Healthy, sustainable, and delivered within 24 hours.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/menu" className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/30">
                  Shop Now
                </Link>
                <button className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-green-600 hover:text-green-600 transition-colors">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-gray-900">10K+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Local Farms</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">24h</p>
                  <p className="text-sm text-gray-600">Fast Delivery</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-200 rounded-full blur-3xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                alt="Fresh produce"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">100% Organic</p>
                    <p className="text-sm text-gray-600">Certified Fresh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FarmTable?</h2>
            <p className="text-lg text-gray-600">Quality and freshness guaranteed</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌾</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Farm Fresh</h3>
              <p className="text-gray-600">Directly from certified organic farms</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Delivered within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Check</h3>
              <p className="text-gray-600">Lab tested and certified</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Price</h3>
              <p className="text-gray-600">No middlemen, fair pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Fresh Arrivals</h2>
              <p className="text-gray-600">Handpicked for you today</p>
            </div>
            <Link href="/menu" className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-2">
              View All
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Category Filter */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeCategory === "all"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory("vegetables")}
              className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeCategory === "vegetables"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Vegetables
            </button>
            <button
              onClick={() => setActiveCategory("fruits")}
              className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeCategory === "fruits"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Fruits
            </button>
            <button
              onClick={() => setActiveCategory("dairy")}
              className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeCategory === "dairy"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Dairy
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(p => activeCategory === "all" || p.category === activeCategory)
              .map((product) => (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white rounded-full text-sm font-semibold text-green-600">
                      {product.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">{product.price}</span>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get fresh food in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Browse & Select</h3>
              <p className="text-gray-600">Choose from our wide range of fresh organic products</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Place Order</h3>
              <p className="text-gray-600">Quick and secure checkout process</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Delivered</h3>
              <p className="text-gray-600">Fresh produce delivered to your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Join thousands of happy customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6">"সত্যিই তাজা সবজি পাই। বাজারে যাওয়ার ঝামেলা থেকে মুক্তি পেয়েছি।"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  👩
                </div>
                <div>
                  <p className="font-bold text-gray-900">রহিমা খাতুন</p>
                  <p className="text-sm text-gray-600">ঢাকা, বনানী</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6">"কৃষক হিসেবে সরাসরি বিক্রি করতে পারছি। দাম ভালো পাচ্ছি।"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  👨‍🌾
                </div>
                <div>
                  <p className="font-bold text-gray-900">করিম মিয়া</p>
                  <p className="text-sm text-gray-600">চট্টগ্রাম</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6">"জৈব পণ্য পাওয়া এত সহজ হবে ভাবিনি। পরিবারের সবাই খুশি।"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  👩‍💼
                </div>
                <div>
                  <p className="font-bold text-gray-900">নাজমা আক্তার</p>
                  <p className="text-sm text-gray-600">সিলেট</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get 20% Off Your First Order
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Subscribe to our newsletter and stay updated with fresh deals
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="px-8 py-4 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-green-100 mt-6">
              ✓ Free delivery on first order  ✓ No spam, unsubscribe anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl">🌿</span>
                </div>
                <span className="text-xl font-bold">FarmTable</span>
              </div>
              <p className="text-gray-400">
                Fresh organic produce delivered to your doorstep
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/menu" className="hover:text-white transition-colors">Shop</Link></li>
                <li><Link href="/nutrition" className="hover:text-white transition-colors">Nutrition</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">My Account</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +880 1712-345678</li>
                <li>📧 hello@farmtable.com</li>
                <li>📍 Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 FarmTable. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
