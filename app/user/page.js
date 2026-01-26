"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from 'react-countup';

export default function UserPage() {
  const [user, setUser] = useState({
    name: "Ali",
    email: "ali@example.com",
    phone: "01712345678",
    avatar: null,
    loyaltyPoints: 850
  });

  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const days = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
    const months = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
    
    const today = new Date();
    const dayName = days[today.getDay()];
    const date = `${today.getDate()} ${months[today.getMonth()]}, ${today.getFullYear()}`;
    
    setCurrentDay(dayName);
    setCurrentDate(date);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const showNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const notifications = [
    { id: 1, message: "আপনার অর্ডার ডেলিভারি হয়েছে", time: "৫ মিনিট আগে", unread: true },
    { id: 2, message: "নতুন অফার উপলব্ধ", time: "১ ঘণ্টা আগে", unread: true },
    { id: 3, message: "৫০ পয়েন্ট যোগ হয়েছে", time: "২ ঘণ্টা আগে", unread: false }
  ];

  const stats = [
    { 
      label: "মোট অর্ডার", 
      value: 42, 
      icon: "📦", 
      color: "from-blue-500 to-blue-600",
      trend: "up",
      trendValue: "+8%",
      period: "এই মাসে",
      link: "/user/orders"
    },
    { 
      label: "সক্রিয় অর্ডার", 
      value: 3, 
      icon: "🚚", 
      color: "from-green-500 to-green-600",
      trend: "up",
      trendValue: "+2",
      period: "চলমান",
      link: "/user/orders?status=active"
    },
    { 
      label: "উইশলিস্ট", 
      value: 12, 
      icon: "❤️", 
      color: "from-red-500 to-red-600",
      trend: "down",
      trendValue: "-1",
      period: "গত সপ্তাহ",
      link: "/user/wishlist"
    },
    { 
      label: "লয়্যালটি পয়েন্ট", 
      value: user.loyaltyPoints, 
      icon: "⭐", 
      color: "from-yellow-500 to-yellow-600",
      trend: "up",
      trendValue: "+50",
      period: "সর্বশেষ",
      link: "/user/rewards"
    }
  ];

  const recentOrders = [
    {
      id: "ORD-2024-001",
      product: "জৈব টমেটো (২ কেজি)",
      cost: "৳২৪০",
      date: "২৫ জানুয়ারি, ২০২৬",
      status: "delivery",
      statusText: "ডেলিভারিতে আছে",
      statusBadge: "ডেলিভারিতে",
      badgeColor: "bg-green-500",
      progress: 100,
      address: "বাড়ি ২৩, রোড ৫, ধানমন্ডি",
      estimatedTime: "আজ সন্ধ্যা ৬টা"
    },
    {
      id: "ORD-2024-002",
      product: "তাজা স্ট্রবেরি (১ কেজি)",
      cost: "৳৩৫০",
      date: "২৪ জানুয়ারি, ২০২৬",
      status: "packaged",
      statusText: "প্যাকেজিং সম্পন্ন",
      statusBadge: "প্যাকেজিং",
      badgeColor: "bg-blue-500",
      progress: 66,
      address: "তলা ৮, বিল্ডিং এ, গুলশান ২",
      estimatedTime: "আগামীকাল সকাল ১০টা"
    },
    {
      id: "ORD-2024-003",
      product: "খামারের ডিম (১২টি)",
      cost: "৳১৮০",
      date: "২৩ জানুয়ারি, ২০২৬",
      status: "harvested",
      statusText: "খামার থেকে সংগ্রহ করা হয়েছে",
      statusBadge: "সংগ্রহ করা হয়েছে",
      badgeColor: "bg-yellow-500",
      progress: 33,
      address: "বাড়ি ২৩, রোড ৫, ধানমন্ডি",
      estimatedTime: "২৭ জানুয়ারি"
    }
  ];

  const addresses = [
    {
      id: 1,
      label: "বাড়ি",
      address: "বাড়ি ২৩, রোড ৫, ধানমন্ডি, ঢাকা ১২০৫",
      isDefault: true
    },
    {
      id: 2,
      label: "অফিস",
      address: "তলা ৮, বিল্ডিং এ, গুলশান ২, ঢাকা ১২১২",
      isDefault: false
    }
  ];

  const menuItems = [
    { 
      icon: "📊", 
      label: "ড্যাশবোর্ড", 
      href: "/user", 
      id: "dashboard",
      tooltip: "আপনার ড্যাশবোর্ড দেখুন"
    },
    { 
      icon: "📦", 
      label: "আমার অর্ডার", 
      href: "/user/orders", 
      id: "orders",
      badge: 3,
      tooltip: "সব অর্ডার দেখুন"
    },
    { 
      icon: "❤️", 
      label: "উইশলিস্ট", 
      href: "/user/wishlist", 
      id: "wishlist",
      badge: 12,
      tooltip: "পছন্দের পণ্য"
    },
    { 
      icon: "📍", 
      label: "ঠিকানা", 
      href: "/user/addresses", 
      id: "addresses",
      tooltip: "সংরক্ষিত ঠিকানা"
    },
    { 
      icon: "⚙️", 
      label: "সেটিংস", 
      href: "/user/settings", 
      id: "settings",
      tooltip: "প্রোফাইল সেটিংস"
    },
    { 
      icon: "🚪", 
      label: "লগ আউট", 
      href: "/logout", 
      id: "logout",
      tooltip: "লগ আউট করুন"
    }
  ];

  const SkeletonCard = () => (
    <div className="bg-white rounded-3xl p-6 animate-pulse">
      <div className="flex items-center justify-between mb-3">
        <div className="w-12 h-12 bg-sage/20 rounded-full" />
        <div className="w-16 h-8 bg-sage/20 rounded-lg" />
      </div>
      <div className="w-24 h-4 bg-sage/20 rounded mt-2" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-sage/5">
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-8 left-1/2 z-50 bg-forest text-cream px-6 py-4 rounded-full shadow-2xl flex items-center gap-3"
          >
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 sm:mb-6 lg:mb-8 bg-white rounded-3xl sm:rounded-4xl shadow-lg p-4 sm:p-6 border border-sage/20"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-forest truncate"
                >
                  স্বাগতম {user.name}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="hidden sm:block flex-shrink-0"
                >
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                    ভেরিফাইড ✓
                  </span>
                </motion.div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 sm:p-3 bg-sage/10 rounded-full hover:bg-sage/20 transition-all"
                    aria-label="Notifications"
                  >
                    <motion.svg 
                      animate={{ rotate: showNotifications ? 20 : 0 }}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-forest" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </motion.svg>
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-[10px] sm:text-xs rounded-full flex items-center justify-center font-bold"
                    >
                      {notifications.filter(n => n.unread).length}
                    </motion.span>
                  </motion.button>

                  <AnimatePresence>
                    {showNotifications && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] sm:w-80 bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-sage/20 overflow-hidden z-50 max-w-sm"
                      >
                        <div className="p-3 sm:p-4 border-b border-sage/20 bg-sage/5">
                          <h3 className="font-bold text-forest text-sm sm:text-base">নোটিফিকেশন</h3>
                        </div>
                        <div className="max-h-[60vh] sm:max-h-96 overflow-y-auto">
                          {notifications.map((notif, index) => (
                            <motion.div
                              key={notif.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className={`p-3 sm:p-4 border-b border-sage/10 hover:bg-sage/5 cursor-pointer transition-colors ${
                                notif.unread ? "bg-blue-50/50" : ""
                              }`}
                            >
                              <div className="flex items-start gap-2 sm:gap-3">
                                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${notif.unread ? "bg-blue-500" : "bg-sage/30"}`} />
                                <div className="flex-1 min-w-0">
                                  <p className="text-forest font-medium text-xs sm:text-sm">{notif.message}</p>
                                  <p className="text-sage text-[10px] sm:text-xs mt-1">{notif.time}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="p-2 sm:p-3 bg-sage/5 text-center">
                          <button className="text-forest font-semibold text-xs sm:text-sm hover:text-sage transition-colors">
                            সব দেখুন
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-forest to-sage rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl text-white font-bold shadow-lg cursor-pointer flex-shrink-0"
                >
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    user.name.charAt(0)
                  )}
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="অনুসন্ধান করুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-sage/10 rounded-full text-sm sm:text-base text-forest placeholder-sage focus:outline-none focus:ring-2 focus:ring-forest/20"
                />
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sage absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3">
                <div className="text-left sm:text-right">
                  <p className="text-xs sm:text-sm text-sage font-medium">{currentDate}</p>
                  <p className="text-sm sm:text-base lg:text-lg font-bold text-forest">{currentDay}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl sm:rounded-4xl shadow-lg p-4 sm:p-6 border border-sage/20 lg:sticky lg:top-8"
            >
              <h2 className="text-lg sm:text-xl font-bold text-forest mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-sage/20">মেনু</h2>
              <nav className="space-y-1 sm:space-y-2">
                {menuItems.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveMenu(item.id)}
                      className={`group relative flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl transition-all cursor-pointer ${
                        activeMenu === item.id
                          ? "bg-forest text-cream shadow-md" 
                          : "text-forest hover:bg-sage/10"
                      }`}
                      title={item.tooltip}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <motion.span 
                          className="text-xl sm:text-2xl flex-shrink-0"
                          animate={{ 
                            scale: activeMenu === item.id ? [1, 1.2, 1] : 1,
                            rotate: activeMenu === item.id ? [0, 10, -10, 0] : 0
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.icon}
                        </motion.span>
                        <span className="font-semibold text-sm sm:text-base truncate">{item.label}</span>
                      </div>
                      {item.badge && (
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold rounded-full flex-shrink-0 ${
                            activeMenu === item.id 
                              ? "bg-cream text-forest" 
                              : "bg-forest text-cream"
                          }`}
                        >
                          {item.badge}
                        </motion.span>
                      )}
                      {activeMenu === item.id && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-cream rounded-r-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                ))}
              </nav>

              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gradient-to-br from-sage/20 to-forest/10 rounded-2xl sm:rounded-3xl border border-sage/30">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <span className="text-xl sm:text-2xl">🎁</span>
                  <h3 className="font-bold text-forest text-sm sm:text-base">রিওয়ার্ড পয়েন্ট</h3>
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-forest mb-1">
                  <CountUp end={user.loyaltyPoints} duration={2} />
                </p>
                <p className="text-[10px] sm:text-xs text-sage">আরও ৫০ পয়েন্টে ফ্রি ডেলিভারি</p>
                <div className="w-full bg-sage/30 rounded-full h-1.5 sm:h-2 mt-2 sm:mt-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(user.loyaltyPoints / 900) * 100}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-9 space-y-4 sm:space-y-6 lg:space-y-8">
            {isLoading ? (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <Link key={index} href={stat.link}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative bg-gradient-to-br ${stat.color} rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-lg cursor-pointer overflow-hidden group`}
                    >
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mb-2 sm:mb-3">
                          <motion.span 
                            className="text-2xl sm:text-3xl lg:text-4xl"
                            animate={{ 
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3
                            }}
                          >
                            {stat.icon}
                          </motion.span>
                          <div className="text-left sm:text-right w-full sm:w-auto">
                            <motion.span 
                              className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white block"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.7 + index * 0.1 }}
                            >
                              <CountUp end={stat.value} duration={2} delay={0.5 + index * 0.1} />
                            </motion.span>
                            <motion.span 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                              className={`text-[10px] sm:text-xs font-bold flex items-center gap-1 justify-start sm:justify-end mt-0.5 sm:mt-1 ${
                                stat.trend === "up" ? "text-green-200" : "text-red-200"
                              }`}
                            >
                              {stat.trend === "up" ? "↑" : "↓"}
                              {stat.trendValue}
                            </motion.span>
                          </div>
                        </div>
                        <p className="text-white/90 font-semibold text-xs sm:text-sm lg:text-base mb-0.5 sm:mb-1">{stat.label}</p>
                        <p className="text-white/70 text-[10px] sm:text-xs">{stat.period}</p>
                      </div>

                      <motion.div
                        className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-tl-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                ))}
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white rounded-3xl sm:rounded-4xl shadow-lg p-4 sm:p-6 border border-sage/20"
            >
              <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-forest mb-1">সাম্প্রতিক অর্ডার</h2>
                  <p className="text-xs sm:text-sm text-sage">আপনার সর্বশেষ অর্ডারগুলি ট্র্যাক করুন</p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <select className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 bg-sage/10 rounded-full text-forest font-semibold text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-forest/20">
                    <option>সব অর্ডার</option>
                    <option>সক্রিয়</option>
                    <option>সম্পন্ন</option>
                    <option>বাতিল</option>
                  </select>
                  <Link href="/user/orders" className="flex-1 sm:flex-initial">
                    <motion.button
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-3 sm:px-4 py-2 bg-forest text-cream rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-forest/90 transition-all text-xs sm:text-sm"
                    >
                      <span>সব দেখুন</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </Link>
                </div>
              </div>

              {recentOrders.length === 0 ? (
                <div className="text-center py-12 sm:py-16">
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">📦</div>
                  <h3 className="text-lg sm:text-xl font-bold text-forest mb-2">কোন অর্ডার নেই</h3>
                  <p className="text-sm sm:text-base text-sage mb-4 sm:mb-6">আপনি এখনও কোন অর্ডার করেননি</p>
                  <Link href="/menu">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 sm:px-6 py-2 sm:py-3 bg-forest text-cream rounded-full font-semibold text-sm sm:text-base"
                    >
                      কেনাকাটা শুরু করুন
                    </motion.button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {recentOrders.map((order, index) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                      className="border-2 border-sage/20 rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-5 hover:border-forest/30 hover:shadow-xl transition-all group"
                    >
                      <div className="flex flex-col gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                            <span className="text-[10px] sm:text-xs font-bold text-forest bg-forest/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                              {order.id}
                            </span>
                            <span className={`text-[10px] sm:text-xs font-bold text-white ${order.badgeColor} px-2 sm:px-3 py-0.5 sm:py-1 rounded-full`}>
                              {order.statusBadge}
                            </span>
                            <span className="text-[10px] sm:text-xs text-sage">{order.date}</span>
                          </div>
                          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-forest mb-2">{order.product}</h3>
                          <div className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-sage mb-2">
                            <div className="flex items-center gap-1">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="truncate">{order.address}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-sage">প্রত্যাশিত: <span className="font-semibold text-forest">{order.estimatedTime}</span></span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
                          <p className="text-xl sm:text-2xl font-extrabold text-forest">{order.cost}</p>
                          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => showNotification("ইনভয়েস ডাউনলোড হচ্ছে...")}
                              className="flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 sm:py-2 bg-forest text-cream rounded-full font-semibold hover:bg-forest/90 transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                            >
                              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span>ইনভয়েস</span>
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 sm:py-2 bg-sage/10 text-forest rounded-full font-semibold hover:bg-sage/20 transition-all text-xs sm:text-sm"
                            >
                              বিস্তারিত
                            </motion.button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-sage/20">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="font-semibold text-forest truncate pr-2">{order.statusText}</span>
                          <span className="text-sage font-bold flex-shrink-0">{order.progress}%</span>
                        </div>
                        <div className="w-full bg-sage/20 rounded-full h-2 sm:h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${order.progress}%` }}
                            transition={{ duration: 1.5, delay: 1 + index * 0.1, ease: "easeOut" }}
                            className={`h-full rounded-full relative ${
                              order.status === "delivery" ? "bg-gradient-to-r from-green-400 to-green-600" :
                              order.status === "packaged" ? "bg-gradient-to-r from-blue-400 to-blue-600" :
                              "bg-gradient-to-r from-yellow-400 to-yellow-600"
                            }`}
                          >
                            <motion.div
                              animate={{ x: [-20, 100] }}
                              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            />
                          </motion.div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] sm:text-xs pt-1 sm:pt-2">
                          <motion.div 
                            className="flex flex-col items-center gap-0.5 sm:gap-1"
                            animate={{ scale: order.progress >= 33 ? [1, 1.1, 1] : 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                              order.progress >= 33 ? "bg-yellow-500 text-white" : "bg-sage/30 text-sage"
                            }`}>
                              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className={`${order.progress >= 33 ? "text-forest font-semibold" : "text-sage"} text-center`}>সংগ্রহ</span>
                          </motion.div>
                          <div className={`flex-1 h-0.5 mx-1 sm:mx-2 ${order.progress >= 66 ? "bg-blue-500" : "bg-sage/30"}`} />
                          <motion.div 
                            className="flex flex-col items-center gap-0.5 sm:gap-1"
                            animate={{ scale: order.progress >= 66 ? [1, 1.1, 1] : 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                              order.progress >= 66 ? "bg-blue-500 text-white" : "bg-sage/30 text-sage"
                            }`}>
                              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                              </svg>
                            </div>
                            <span className={`${order.progress >= 66 ? "text-forest font-semibold" : "text-sage"} text-center`}>প্যাকেজিং</span>
                          </motion.div>
                          <div className={`flex-1 h-0.5 mx-1 sm:mx-2 ${order.progress >= 100 ? "bg-green-500" : "bg-sage/30"}`} />
                          <motion.div 
                            className="flex flex-col items-center gap-0.5 sm:gap-1"
                            animate={{ scale: order.progress >= 100 ? [1, 1.1, 1] : 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                              order.progress >= 100 ? "bg-green-500 text-white" : "bg-sage/30 text-sage"
                            }`}>
                              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                              </svg>
                            </div>
                            <span className={`${order.progress >= 100 ? "text-forest font-semibold" : "text-sage"} text-center`}>ডেলিভারি</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="bg-white rounded-3xl sm:rounded-4xl shadow-lg p-4 sm:p-6 border border-sage/20"
            >
              <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-forest mb-1">ঠিকানা বই</h2>
                  <p className="text-xs sm:text-sm text-sage">আপনার সংরক্ষিত ডেলিভারি ঠিকানা</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => showNotification("নতুন ঠিকানা যোগ করার ফর্ম খোলা হচ্ছে...")}
                  className="w-full sm:w-auto px-4 sm:px-5 py-2 bg-forest text-cream rounded-full font-semibold hover:bg-forest/90 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span>নতুন ঠিকানা</span>
                </motion.button>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {addresses.map((addr, index) => (
                  <motion.div
                    key={addr.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="border-2 border-sage/20 rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-5 hover:border-forest/30 hover:shadow-xl transition-all cursor-pointer relative group"
                  >
                    {addr.isDefault && (
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.6 + index * 0.1, type: "spring" }}
                        className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-green-500 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full flex items-center gap-1"
                      >
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        ডিফল্ট
                      </motion.span>
                    )}
                    <div className="flex items-start gap-2 sm:gap-3 mb-3">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-forest/10 to-sage/10 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </motion.div>
                      <div className="flex-1 pr-8 sm:pr-12 min-w-0">
                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-forest mb-1 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                          <span className="truncate">{addr.label}</span>
                          <span className="text-base sm:text-lg lg:text-xl flex-shrink-0">{addr.label === "বাড়ি" ? "🏠" : "🏢"}</span>
                        </h3>
                        <p className="text-sage text-xs sm:text-sm leading-relaxed">{addr.address}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-sage/20">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => showNotification("ঠিকানা সম্পাদনা করা হচ্ছে...")}
                        className="flex-1 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-sage/10 text-forest rounded-full font-semibold hover:bg-sage/20 transition-all text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2"
                      >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <span className="hidden sm:inline">সম্পাদনা</span>
                        <span className="sm:hidden">এডিট</span>
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => showNotification("ঠিকানা মুছে ফেলা হচ্ছে...")}
                        className="flex-1 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-red-50 text-red-600 rounded-full font-semibold hover:bg-red-100 transition-all text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2"
                      >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        মুছুন
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="relative bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-3xl sm:rounded-4xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-green-400 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-white/10 rounded-full -mr-16 sm:-mr-24 lg:-mr-32 -mt-16 sm:-mt-24 lg:-mt-32" />
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-white/10 rounded-full -ml-12 sm:-ml-18 lg:-ml-24 -mb-12 sm:-mb-18 lg:-mb-24" />
              
              <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <motion.div 
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-0.5 sm:mb-1">সহায়তা প্রয়োজন?</h3>
                    <p className="text-sm sm:text-base text-white/90">আমরা ২৪/৭ আপনার সেবায় প্রস্তুত</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <motion.a
                    href="tel:+8801712345678"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white text-green-600 rounded-full font-bold hover:bg-green-50 transition-all flex items-center justify-center gap-2 shadow-xl text-sm sm:text-base"
                  >
                    <motion.svg 
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                      className="w-4 h-4 sm:w-5 sm:h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </motion.svg>
                    <span>কল করুন</span>
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => showNotification("চ্যাট উইন্ডো খোলা হচ্ছে...")}
                    className="flex-1 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span>মেসেজ পাঠান</span>
                  </motion.button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 }}
                className="relative z-10 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20"
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-center">
                  {[
                    { icon: "⚡", label: "দ্রুত সাড়া", value: "< 2 মিনিট" },
                    { icon: "🌟", label: "সন্তুষ্টি", value: "৯৮%" },
                    { icon: "💬", label: "সমাধান", value: "৯৫%" },
                    { icon: "👥", label: "সহায়ক টিম", value: "২৪/৭" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2 + index * 0.1 }}
                      className="text-white"
                    >
                      <div className="text-xl sm:text-2xl mb-0.5 sm:mb-1">{item.icon}</div>
                      <div className="text-sm sm:text-base lg:text-lg font-bold">{item.value}</div>
                      <div className="text-[10px] sm:text-xs text-white/80">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
