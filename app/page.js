"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AOS from 'aos';
import CountUp from 'react-countup';

export default function Home() {
  const [email, setEmail] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [startCount, setStartCount] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        disable: 'mobile'
      });
      
      const countTimer = setTimeout(() => {
        setStartCount(true);
      }, 500);
      
      return () => clearTimeout(countTimer);
    }
  }, [isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = (productName) => {
    setCartCount(prev => prev + 1);
    alert(`${productName} কার্টে যোগ করা হয়েছে!`);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`সাবস্ক্রিপশনের জন্য ধন্যবাদ! আমরা ${email} এ আপডেট পাঠাব`);
      setEmail("");
    }
  };

  const validatePhone = (number) => {
    const phoneRegex = /^01[3-9]\d{8}$/;
    return phoneRegex.test(number);
  };

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setPhoneError("");
    
    if (!phoneNumber) {
      setPhoneError("দয়া করে আপনার মোবাইল নম্বর দিন");
      return;
    }
    
    if (!validatePhone(phoneNumber)) {
      setPhoneError("দয়া করে সঠিক নম্বর দিন (০১XXXXXXXXX)");
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setPhoneNumber("");
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  const products = [
    {
      id: 1,
      name: "জৈব টমেটো",
      price: "৳১২০",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&q=80",
      category: "vegetables",
      badge: "তাজা"
    },
    {
      id: 2,
      name: "তাজা স্ট্রবেরি",
      price: "৳৩৫০",
      image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=600&q=80",
      category: "fruits",
      badge: "জৈব"
    },
    {
      id: 3,
      name: "খামারের ডিম",
      price: "৳১৮০",
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600&q=80",
      category: "dairy",
      badge: "মুক্ত পরিসর"
    },
    {
      id: 4,
      name: "সবুজ লেটুস",
      price: "৳৯০",
      image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=600&q=80",
      category: "vegetables",
      badge: "তাজা"
    },
    {
      id: 5,
      name: "তাজা দুধ",
      price: "৳৮৫",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80",
      category: "dairy",
      badge: "জৈব"
    },
    {
      id: 6,
      name: "মিশ্র বেরি",
      price: "৳৪২০",
      image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=600&q=80",
      category: "fruits",
      badge: "প্রিমিয়াম"
    }
  ];

  return (
    <>
      {/* Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] bg-gradient-to-br from-cream via-white to-green-50 flex items-center justify-center"
          >
            <div className="text-center">
              {/* Professional Animated Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative mb-12"
              >
                {/* Outer Ring Animation */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-0 w-40 h-40 mx-auto"
                >
                  <div className="absolute inset-0 border-[3px] border-forest/20 rounded-full"></div>
                  <div className="absolute inset-0 border-[3px] border-t-forest border-r-forest/40 border-b-transparent border-l-transparent rounded-full"></div>
                </motion.div>
                
                {/* Inner Ring Animation */}
                <motion.div
                  animate={{ 
                    rotate: -360,
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "linear"
                  }}
                  className="absolute inset-4 w-32 h-32 mx-auto"
                >
                  <div className="absolute inset-0 border-[2px] border-sage/30 rounded-full"></div>
                  <div className="absolute inset-0 border-[2px] border-b-sage border-l-sage/40 border-t-transparent border-r-transparent rounded-full"></div>
                </motion.div>
                
                {/* Center Logo */}
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative w-40 h-40 mx-auto bg-gradient-to-br from-forest via-forest to-sage rounded-3xl flex items-center justify-center shadow-2xl"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <svg className="w-20 h-20 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </motion.div>
                  
                  {/* Shine Effect */}
                  <motion.div
                    animate={{ 
                      x: [-200, 200],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatDelay: 1,
                      ease: "easeInOut" 
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-3xl"
                    style={{ transform: 'skewX(-20deg)' }}
                  />
                </motion.div>
              </motion.div>

              {/* Brand Name with Professional Typography */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3"
              >
                <h1 className="text-5xl font-bold text-forest mb-3 tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  খামার থেকে টেবিল
                </h1>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="w-24 h-1 bg-gradient-to-r from-forest to-sage mx-auto rounded-full"
                />
                <p className="text-sage text-xl font-medium tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Pure & Authentic
                </p>
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 w-64 mx-auto"
              >
                <div className="h-1.5 bg-forest/10 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="h-full w-1/3 bg-gradient-to-r from-forest to-sage rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Support Button */}
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          onClick={() => setShowSupport(!showSupport)}
          whileHover={{ scale: 1.05, x: -5 }}
          className="fixed right-0 bottom-8 z-50 bg-gradient-to-l from-forest to-forest/90 text-cream px-8 py-4 rounded-l-4xl shadow-2xl font-bold text-base flex items-center gap-3"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span>সহায়তা</span>
        </motion.button>

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-12 relative overflow-hidden bg-gradient-to-b from-cream via-cream to-cream/80">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B3022' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-10 lg:space-y-14">
              
              {/* Main Headline */}
              <div data-aos="fade-right" className="py-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-forest leading-[1.2] tracking-tight mb-6">
                  খামার থেকে সরাসরি<br />
                  আপনার টেবিলে
                </h1>
              </div>
              
              {/* Supporting Text */}
              <div data-aos="fade-right" data-aos-delay="100">
                <p className="text-lg lg:text-xl text-forest/80 leading-relaxed max-w-xl">
                  কৃষকদের কাছ থেকে সরাসরি তাজা ও নিরাপদ খাবার। আপনার পরিবারের জন্য স্বাস্থ্যকর এবং বিশ্বস্ত।
                </p>
              </div>

              {/* Trust Badges - Enhanced */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { 
                    icon: (
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ), 
                    text: "১০০% ফ্রেশ", 
                    bg: "bg-gradient-to-br from-green-500 to-green-600",
                    iconBg: "bg-green-600",
                    delay: "200"
                  },
                  { 
                    icon: (
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ), 
                    text: "২৪ ঘণ্টায়",
                    bg: "bg-gradient-to-br from-blue-500 to-blue-600",
                    iconBg: "bg-blue-600",
                    delay: "300"
                  },
                  { 
                    icon: (
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    ), 
                    text: "সরাসরি কৃষকের",
                    bg: "bg-gradient-to-br from-orange-500 to-orange-600",
                    iconBg: "bg-orange-600",
                    delay: "400"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={item.delay}
                    className={`flex items-center gap-4 px-6 py-5 ${item.bg} rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}
                  >
                    <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                      {item.icon}
                    </div>
                    <span className="text-lg font-extrabold text-white leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div data-aos="fade-up" data-aos-delay="500" className="flex flex-wrap gap-4">
                <Link href="/menu" className="inline-block group">
                  <div className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-[32px] font-bold text-xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="relative z-10">এখনই অর্ডার করুন</span>
                    <svg 
                      className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
                
                <Link href="/menu" className="inline-block group">
                  <div className="relative inline-flex items-center gap-3 px-10 py-5 bg-transparent border-3 border-forest text-forest rounded-[32px] font-bold text-xl hover:bg-forest hover:text-cream transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 shadow-md hover:shadow-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>পণ্য দেখুন</span>
                  </div>
                </Link>
              </div>

              {/* Statistics with Count-up */}
              <div data-aos="fade-up" data-aos-delay="600" className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-forest">
                    {startCount && <CountUp end={10000} duration={2.5} separator="," suffix="+" />}
                    {!startCount && '10,000+'}
                  </p>
                  <p className="text-sm text-sage mt-1">সন্তুষ্ট গ্রাহক</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-forest">
                    {startCount && <CountUp end={500} duration={2.5} suffix="+" />}
                    {!startCount && '500+'}
                  </p>
                  <p className="text-sm text-sage mt-1">স্থানীয় খামার</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-forest">
                    {startCount && <CountUp end={24} duration={2} suffix="h" />}
                    {!startCount && '24h'}
                  </p>
                  <p className="text-sm text-sage mt-1">দ্রুত ডেলিভারি</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div 
              data-aos="fade-left" 
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-easing="ease-out"
              className="relative lg:h-[600px] h-[450px] order-first lg:order-last"
            >
              {/* Main Image Container */}
              <div 
                className="relative w-full h-full overflow-hidden rounded-[48px] shadow-2xl transition-all duration-200 ease-out"
                style={{ willChange: 'transform, box-shadow' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
                  alt="বাংলাদেশী কৃষক খামারে সবজি সংগ্রহ করছেন"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Trust Badge - Bottom Left */}
              <div 
                data-aos="zoom-in" 
                data-aos-delay="800"
                data-aos-duration="600"
                data-aos-easing="ease-out"
                className="absolute -bottom-6 -left-6 lg:bottom-8 lg:left-8"
              >
                <div 
                  className="glassmorphism rounded-[32px] p-6 shadow-2xl border-2 border-white/50 backdrop-blur-xl bg-white/95 transition-all duration-200 ease-out"
                  style={{ willChange: 'transform' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-[24px] flex items-center justify-center shadow-lg">
                      <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-extrabold text-forest text-lg">১০০% জৈব</p>
                      <p className="text-sm text-sage font-semibold">প্রত্যয়িত তাজা</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Delivery Badge - Top Right */}
              <div 
                data-aos="zoom-in" 
                data-aos-delay="1000"
                data-aos-duration="600"
                data-aos-easing="ease-out"
                className="absolute -top-6 -right-6 lg:top-8 lg:right-8"
              >
                <div 
                  className="glassmorphism rounded-[28px] px-6 py-5 shadow-2xl border-2 border-white/50 backdrop-blur-xl bg-white/95 transition-all duration-200 ease-out"
                  style={{ willChange: 'transform' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[20px] flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-sage font-semibold">দ্রুত ডেলিভারি</p>
                      <p className="font-extrabold text-forest text-base">২৪ ঘণ্টায়</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-transparent to-sage/5">
        <div className="container mx-auto">
          <div data-aos="fade-up" className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-forest mb-6">কেন আমাদের বেছে নেবেন?</h2>
            <p className="text-xl text-forest/70">মান এবং তাজা পণ্যের নিশ্চয়তা</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🌾", title: "খামার থেকে তাজা", desc: "সরাসরি প্রত্যয়িত জৈব খামার থেকে", color: "from-green-50 to-sage/20", delay: "100" },
              { icon: "🚚", title: "দ্রুত ডেলিভারি", desc: "২৪ ঘণ্টার মধ্যে পৌঁছে যাবে", color: "from-blue-50 to-sage/20", delay: "200" },
              { icon: "✅", title: "মান পরীক্ষা", desc: "ল্যাব পরীক্ষিত এবং প্রত্যয়িত", color: "from-purple-50 to-sage/20", delay: "300" },
              { icon: "💰", title: "সেরা দাম", desc: "মধ্যস্থতাকারী নেই, ন্যায্য মূল্য", color: "from-orange-50 to-sage/20", delay: "400" }
            ].map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={feature.delay}
                className={`p-10 rounded-4xl bg-gradient-to-br ${feature.color} border border-sage/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-forest mb-3">{feature.title}</h3>
                <p className="text-forest/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div data-aos="fade-right">
              <h2 className="text-5xl lg:text-6xl font-extrabold text-forest mb-3">তাজা পণ্য</h2>
              <p className="text-xl text-sage">আজকের জন্য বাছাইকৃত</p>
            </div>
            <div data-aos="fade-left">
              <Link href="/menu" className="inline-flex items-center gap-2 text-forest font-bold hover:text-sage transition-all duration-300 hover:gap-3">
                <span>সব দেখুন</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
            {[
              { id: "all", label: "সব", icon: "🛒" },
              { id: "vegetables", label: "শাক-সবজি", icon: "🥬" },
              { id: "fruits", label: "ফলমূল", icon: "🍎" },
              { id: "dairy", label: "দুগ্ধজাত", icon: "🥛" }
            ].map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-4 rounded-4xl font-bold whitespace-nowrap transition-all flex items-center gap-3 ${
                  activeCategory === cat.id
                    ? "bg-forest text-cream shadow-xl"
                    : "bg-white text-forest border-2 border-sage/30 hover:border-forest"
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span>{cat.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(p => activeCategory === "all" || p.category === activeCategory)
              .map((product, index) => (
                <div
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white rounded-4xl overflow-hidden border-2 border-sage/20 hover:border-forest/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-sage/10 to-forest/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-6 left-6 px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-sm font-bold shadow-lg">
                      {product.badge}
                    </span>
                    {/* Price Tag */}
                    <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg">
                      <p className="text-2xl font-extrabold text-forest">{product.price}</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-forest mb-6">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm text-sage font-semibold">৪.৮ (১২০+ রিভিউ)</span>
                      </div>
                      <button
                        onClick={() => handleAddToCart(product.name)}
                        className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-4xl font-bold hover:from-green-600 hover:to-green-700 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        <span>কার্টে যোগ করুন</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-white to-sage/5">
        <div className="container mx-auto">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-forest mb-6">গ্রাহকদের মতামত</h2>
            <p className="text-xl text-forest/70">হাজারো সন্তুষ্ট পরিবারের অভিজ্ঞতা</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "রহিমা খাতুন",
                location: "ঢাকা, বনানী",
                image: "👩",
                rating: 5,
                text: "সত্যিই তাজা সবজি পাই। বাজারে যাওয়ার ঝামেলা থেকে মুক্তি পেয়েছি। দাম ও ন্যায্য।",
                delay: "100"
              },
              {
                name: "করিম মিয়া",
                location: "চট্টগ্রাম",
                image: "👨‍🌾",
                rating: 5,
                text: "কৃষক হিসেবে সরাসরি বিক্রি করতে পারছি। মধ্যস্থতাকারী নেই, দাম ভালো পাচ্ছি।",
                delay: "200"
              },
              {
                name: "নাজমা আক্তার",
                location: "সিলেট",
                image: "👩‍💼",
                rating: 5,
                text: "জৈব পণ্য পাওয়া এত সহজ হবে ভাবিনি। পরিবারের সবাই খুশি। ডেলিভারিও দ্রুত।",
                delay: "300"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={testimonial.delay}
                className="bg-white rounded-4xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out border-2 border-sage/20"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-forest/80 mb-6 leading-relaxed text-base">&quot;{testimonial.text}&quot;</p>

                {/* Customer Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-sage/20">
                  <div className="w-14 h-14 bg-gradient-to-br from-sage to-forest rounded-full flex items-center justify-center text-3xl shadow-md">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-bold text-forest text-lg">{testimonial.name}</p>
                    <p className="text-sm text-sage">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Stats */}
          <div data-aos="fade-up" data-aos-delay="400" className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-extrabold text-forest mb-2">
                {startCount && <CountUp end={4.9} decimals={1} duration={2} />}
                {!startCount && '4.9'}
              </p>
              <p className="text-sage font-semibold">গড় রেটিং</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-forest mb-2">
                {startCount && <CountUp end={5000} duration={2.5} separator="," suffix="+" />}
                {!startCount && '5,000+'}
              </p>
              <p className="text-sage font-semibold">রিভিউ</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-forest mb-2">
                {startCount && <CountUp end={98} duration={2} suffix="%" />}
                {!startCount && '98%'}
              </p>
              <p className="text-sage font-semibold">সন্তুষ্ট গ্রাহক</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-forest mb-2">
                {startCount && <CountUp end={15000} duration={2.5} separator="," suffix="+" />}
                {!startCount && '15,000+'}
              </p>
              <p className="text-sage font-semibold">সফল ডেলিভারি</p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Converting CTA Section */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 bg-gradient-to-br from-green-600 via-green-500 to-emerald-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-5xl">
          <div className="text-center mb-12">
            {/* Pre-headline */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="600"
              data-aos-easing="ease-out"
              className="inline-block mb-4"
            >
              <span className="text-sm font-semibold text-green-100 tracking-wider uppercase">
                আজই শুরু করুন
              </span>
            </div>
            
            {/* Main Headline */}
            <h2 
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="ease-out"
              className="text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight"
            >
              প্রথম অর্ডারে ২০% ছাড় পান
            </h2>
            
            {/* Sub-headline */}
            <p 
              data-aos="fade-up" 
              data-aos-delay="400"
              data-aos-duration="600"
              data-aos-easing="ease-out"
              className="text-xl lg:text-2xl text-green-50 mb-12 max-w-2xl mx-auto"
            >
              আপনার মোবাইল নম্বর দিন এবং তাজা কৃষি পণ্যের অফার পান
            </p>

            {/* Form */}
            {!showSuccess ? (
              <div 
                data-aos="fade-up" 
                data-aos-delay="600"
                data-aos-duration="600"
                data-aos-easing="ease-out"
                className="max-w-3xl mx-auto"
              >
                <form onSubmit={handlePhoneSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex-1 relative">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      placeholder="আপনার মোবাইল নম্বর (০১XXXXXXXXX)"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        setPhoneError("");
                      }}
                      pattern="01[3-9]\d{8}"
                      className={`w-full h-16 pl-16 pr-6 rounded-full text-lg font-semibold text-gray-900 focus:outline-none focus:ring-4 ${
                        phoneError ? 'ring-2 ring-red-500 focus:ring-red-300' : 'focus:ring-green-300'
                      } shadow-xl transition-all duration-200`}
                      style={{ willChange: 'box-shadow' }}
                    />
                    {phoneError && (
                      <p className="absolute left-6 -bottom-6 text-sm text-red-200 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {phoneError}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group h-16 px-10 bg-white text-green-600 rounded-full text-xl font-bold hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl transition-all duration-200 ease-out flex items-center justify-center gap-3"
                    style={{ willChange: 'transform, box-shadow' }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.transform = 'scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>অপেক্ষা করুন...</span>
                      </>
                    ) : (
                      <>
                        <span>এখনই অর্ডার করুন</span>
                        <svg 
                          className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>

                {/* Trust Indicators */}
                <div 
                  data-aos="fade-up" 
                  data-aos-delay="800"
                  data-aos-duration="600"
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 text-green-100"
                >
                  {[
                    "কোন লুকানো খরচ নেই",
                    "যেকোনো সময় বাতিল করুন",
                    "১০০% নিরাপদ তথ্য"
                  ].map((text, index) => (
                    <div 
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={900 + (index * 100)}
                      className="flex items-center gap-2"
                    >
                      <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Secondary CTA */}
                <div className="mt-8">
                  <a 
                    href="tel:+8801712345678" 
                    className="inline-flex items-center gap-2 text-white hover:text-green-100 transition-colors duration-200 text-base font-semibold"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>অথবা সরাসরি কল করুন: ০১৭১২-৩৪৫৬৭৮</span>
                  </a>
                </div>
              </div>
            ) : (
              <div 
                data-aos="zoom-in"
                className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-4xl p-12 border-2 border-white/30"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">ধন্যবাদ!</h3>
                  <p className="text-xl text-green-100">আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
