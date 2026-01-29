"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    name: "আলী রহমান",
    email: "ali@example.com",
    phone: "০১৭১২৩৪৫৬৭৮",
    notifications: true,
    emailUpdates: false,
    smsUpdates: true,
    language: "bn"
  });

  const handleSave = () => {
    alert("সেটিংস সংরক্ষিত হয়েছে!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-sage/5 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-forest mb-2">সেটিংস</h1>
          <p className="text-sage">আপনার অ্যাকাউন্ট সেটিংস পরিবর্তন করুন</p>
        </motion.div>

        <div className="space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-lg border-2 border-sage/20"
          >
            <h2 className="text-2xl font-bold text-forest mb-6">ব্যক্তিগত তথ্য</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-forest mb-2">নাম</label>
                <input
                  type="text"
                  value={settings.name}
                  onChange={(e) => setSettings({...settings, name: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-sage/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-forest mb-2">ইমেইল</label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => setSettings({...settings, email: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-sage/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-forest mb-2">মোবাইল নম্বর</label>
                <input
                  type="tel"
                  value={settings.phone}
                  onChange={(e) => setSettings({...settings, phone: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-sage/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 shadow-lg border-2 border-sage/20"
          >
            <h2 className="text-2xl font-bold text-forest mb-6">নোটিফিকেশন</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-forest">পুশ নোটিফিকেশন</p>
                  <p className="text-sm text-sage">অর্ডার আপডেট পান</p>
                </div>
                <button
                  onClick={() => setSettings({...settings, notifications: !settings.notifications})}
                  className={`relative w-14 h-8 rounded-full transition-all ${
                    settings.notifications ? "bg-forest" : "bg-sage/30"
                  }`}
                >
                  <motion.div
                    animate={{ x: settings.notifications ? 24 : 2 }}
                    className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-forest">ইমেইল আপডেট</p>
                  <p className="text-sm text-sage">অফার ও নিউজলেটার</p>
                </div>
                <button
                  onClick={() => setSettings({...settings, emailUpdates: !settings.emailUpdates})}
                  className={`relative w-14 h-8 rounded-full transition-all ${
                    settings.emailUpdates ? "bg-forest" : "bg-sage/30"
                  }`}
                >
                  <motion.div
                    animate={{ x: settings.emailUpdates ? 24 : 2 }}
                    className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-forest">SMS আপডেট</p>
                  <p className="text-sm text-sage">ডেলিভারি স্ট্যাটাস</p>
                </div>
                <button
                  onClick={() => setSettings({...settings, smsUpdates: !settings.smsUpdates})}
                  className={`relative w-14 h-8 rounded-full transition-all ${
                    settings.smsUpdates ? "bg-forest" : "bg-sage/30"
                  }`}
                >
                  <motion.div
                    animate={{ x: settings.smsUpdates ? 24 : 2 }}
                    className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                  />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-6 shadow-lg border-2 border-sage/20"
          >
            <h2 className="text-2xl font-bold text-forest mb-6">ভাষা</h2>
            <select
              value={settings.language}
              onChange={(e) => setSettings({...settings, language: e.target.value})}
              className="w-full px-4 py-3 border-2 border-sage/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest font-semibold text-forest"
            >
              <option value="bn">বাংলা</option>
              <option value="en">English</option>
            </select>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="w-full py-4 bg-gradient-to-r from-forest to-sage text-cream rounded-2xl font-bold text-lg shadow-lg"
          >
            সংরক্ষণ করুন
          </motion.button>
        </div>
      </div>
    </div>
  );
}
