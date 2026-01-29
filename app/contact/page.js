"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("আপনার বার্তা পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "ফোন",
      details: ["+৮৮০ ১৭১২-৩৪৫৬৭৮", "+৮৮০ ১৮১২-৩৪৫৬৭৮"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: "✉️",
      title: "ইমেইল",
      details: ["info@farmtotable.com", "support@farmtotable.com"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: "📍",
      title: "ঠিকানা",
      details: ["বাড়ি ১২, রোড ৫", "ধানমন্ডি, ঢাকা-১২০৫"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: "⏰",
      title: "কার্যসময়",
      details: ["সকাল ৯টা - রাত ৯টা", "সপ্তাহের সব দিন"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const socialLinks = [
    { icon: "📘", name: "Facebook", color: "from-blue-600 to-blue-700", link: "#" },
    { icon: "📸", name: "Instagram", color: "from-pink-500 to-purple-600", link: "#" },
    { icon: "🐦", name: "Twitter", color: "from-blue-400 to-blue-500", link: "#" },
    { icon: "💼", name: "LinkedIn", color: "from-blue-700 to-blue-800", link: "#" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-sage/5">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest via-forest to-sage py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-7xl sm:text-8xl mb-6"
            >
              📞
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream mb-4">
              আমাদের সাথে যোগাযোগ করুন
            </h1>
            <p className="text-lg sm:text-xl text-sage/90 max-w-2xl mx-auto">
              আপনার যেকোনো প্রশ্ন বা পরামর্শের জন্য আমরা সবসময় প্রস্তুত
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 sm:px-6 -mt-16 relative z-20 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`bg-gradient-to-br ${info.color} rounded-3xl p-6 shadow-2xl text-white`}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: index * 0.2 }}
                className="text-5xl mb-4"
              >
                {info.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-white/90 text-sm">{detail}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="container mx-auto px-4 sm:px-6 pb-12">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-4xl p-8 shadow-2xl border-2 border-sage/20"
          >
            <h2 className="text-3xl font-bold text-forest mb-6">বার্তা পাঠান</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-forest mb-2">আপনার নাম *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-sage/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                  placeholder="আপনার পুরো নাম লিখুন"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-forest mb-2">ইমেইল *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-sage/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-forest mb-2">ফোন</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-sage/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                    placeholder="০১৭১২৩৪৫৬৭৮"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-forest mb-2">বিষয় *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-sage/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                  placeholder="আপনার বার্তার বিষয়"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-forest mb-2">বার্তা *</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-sage/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all resize-none"
                  placeholder="আপনার বার্তা বিস্তারিত লিখুন..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-forest to-sage text-cream rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                বার্তা পাঠান 📨
              </motion.button>
            </form>
          </motion.div>

          {/* Map & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="bg-white rounded-4xl p-6 shadow-2xl border-2 border-sage/20 h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9040425160154!2d90.37520431498143!3d23.750891084589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f4c01ff2a91!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1.5rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-4xl p-6 shadow-2xl border-2 border-sage/20">
              <h3 className="text-2xl font-bold text-forest mb-4">সোশ্যাল মিডিয়া</h3>
              <p className="text-sage mb-6">আমাদের সাথে সংযুক্ত থাকুন</p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-br ${social.color} text-white rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all`}
                  >
                    <div className="text-4xl mb-2">{social.icon}</div>
                    <p className="font-semibold">{social.name}</p>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* FAQ Quick Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-4xl p-6 shadow-2xl text-white"
            >
              <div className="text-5xl mb-4">❓</div>
              <h3 className="text-2xl font-bold mb-2">সাধারণ প্রশ্ন</h3>
              <p className="mb-4 text-white/90">আপনার প্রশ্নের উত্তর হয়তো এখানে আছে</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-orange-600 rounded-full font-bold hover:shadow-lg transition-all"
              >
                FAQ দেখুন
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
