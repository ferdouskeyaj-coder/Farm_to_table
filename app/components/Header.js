"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-cream/60 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-forest to-sage rounded-2xl flex items-center justify-center shadow-xl"
            >
              <svg className="w-6 h-6 sm:w-9 sm:h-9 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-cream animate-pulse"></div>
            </motion.div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-forest leading-none tracking-tight">খামার থেকে টেবিল</span>
              <span className="text-[10px] sm:text-xs text-sage/80 leading-none mt-1 font-medium tracking-wider uppercase">Pure & Authentic</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-3 rounded-4xl font-semibold transition-all ${
                  isActive('/') ? 'bg-forest text-cream' : 'text-forest hover:bg-sage/10'
                }`}
              >
                হোম
              </motion.div>
            </Link>

            <div className="relative">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setIsShopOpen(!isShopOpen);
                  setIsResourcesOpen(false);
                }}
                className={`px-6 py-3 rounded-4xl font-semibold flex items-center gap-2 transition-all ${
                  isActive('/menu') || isActive('/dashboard') ? 'bg-forest text-cream' : 'text-forest hover:bg-sage/10'
                }`}
              >
                <span>পণ্য</span>
                <motion.svg 
                  animate={{ rotate: isShopOpen ? 180 : 0 }}
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
              <AnimatePresence>
                {isShopOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-4 w-80 bg-white/95 backdrop-blur-md rounded-4xl shadow-2xl py-4 border border-sage/20"
                  >
                    <Link href="/menu" className="flex items-center gap-4 px-6 py-4 text-forest hover:bg-sage/10 transition-all group">
                      <span className="text-3xl">🛒</span>
                      <div>
                        <p className="font-bold">সব পণ্য</p>
                        <p className="text-sm text-sage">সম্পূর্ণ তালিকা দেখুন</p>
                      </div>
                    </Link>
                    <Link href="/dashboard" className="flex items-center gap-4 px-6 py-4 text-forest hover:bg-sage/10 transition-all group">
                      <span className="text-3xl">📊</span>
                      <div>
                        <p className="font-bold">ড্যাশবোর্ড</p>
                        <p className="text-sm text-sage">মৌসুমী পণ্য</p>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="relative">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setIsResourcesOpen(!isResourcesOpen);
                  setIsShopOpen(false);
                }}
                className={`px-6 py-3 rounded-4xl font-semibold flex items-center gap-2 transition-all ${
                  isActive('/nutrition') || isActive('/about') ? 'bg-forest text-cream' : 'text-forest hover:bg-sage/10'
                }`}
              >
                <span>তথ্য</span>
                <motion.svg 
                  animate={{ rotate: isResourcesOpen ? 180 : 0 }}
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-4 w-72 bg-white/95 backdrop-blur-md rounded-4xl shadow-2xl py-4 border border-sage/20"
                  >
                    <Link href="/nutrition" className="flex items-center gap-4 px-6 py-4 text-forest hover:bg-sage/10 transition-all">
                      <span className="text-3xl">🥗</span>
                      <span className="font-bold">পুষ্টি তথ্য</span>
                    </Link>
                    <Link href="/about" className="flex items-center gap-4 px-6 py-4 text-forest hover:bg-sage/10 transition-all">
                      <span className="text-3xl">🌱</span>
                      <span className="font-bold">আমাদের সম্পর্কে</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 sm:p-3 hover:bg-sage/10 rounded-full transition-all"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </motion.button>
            
            <Link href="/user">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 sm:p-3 hover:bg-sage/10 rounded-full transition-all"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </motion.button>
            </Link>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 sm:p-3 hover:bg-sage/10 rounded-full transition-all"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-forest text-cream text-[10px] sm:text-xs rounded-full flex items-center justify-center font-bold"
              >
                {cartCount}
              </motion.span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-sage/10 rounded-full transition-all"
            >
              <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-sage/20"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <div className={`px-4 py-3 rounded-2xl font-semibold ${isActive('/') ? 'bg-forest text-cream' : 'text-forest hover:bg-sage/10'}`}>
                  হোম
                </div>
              </Link>
              <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)}>
                <div className={`px-4 py-3 rounded-2xl font-semibold ${isActive('/menu') ? 'bg-forest text-cream' : 'text-forest hover:bg-sage/10'}`}>
                  সব পণ্য
                </div>
              </Link>
              <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                <div className={`px-4 py-3 rounded-2xl font-semibold ${isActive('/dashboard') ? 'bg-forest text-cream' : 'text-forest hover:bg-sage/10'}`}>
                  ড্যাশবোর্ড
                </div>
              </Link>
              <Link href="/nutrition" onClick={() => setIsMobileMenuOpen(false)}>
                <div className={`px-4 py-3 rounded-2xl font-semibold ${isActive('/nutrition') ? 'bg-forest text-cream' : 'text-forest hover:bg-sage/10'}`}>
                  পুষ্টি তথ্য
                </div>
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                <div className={`px-4 py-3 rounded-2xl font-semibold ${isActive('/about') ? 'bg-forest text-cream' : 'text-forest hover:bg-sage/10'}`}>
                  আমাদের সম্পর্কে
                </div>
              </Link>
              <Link href="/user" onClick={() => setIsMobileMenuOpen(false)}>
                <div className={`px-4 py-3 rounded-2xl font-semibold ${isActive('/user') ? 'bg-forest text-cream' : 'text-forest hover:bg-sage/10'}`}>
                  প্রোফাইল
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
