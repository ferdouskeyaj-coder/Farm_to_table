"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const story = [
    {
      year: "২০২০",
      title: "যাত্রা শুরু",
      description: "একটি স্বপ্ন নিয়ে শুরু - খামার থেকে সরাসরি আপনার টেবিলে তাজা পণ্য",
      icon: "🌱",
      color: "from-green-500 to-emerald-600"
    },
    {
      year: "২০২১",
      title: "প্রথম খামার",
      description: "১০টি স্থানীয় খামারের সাথে অংশীদারিত্ব",
      icon: "🚜",
      color: "from-blue-500 to-cyan-600"
    },
    {
      year: "২০২২",
      title: "বৃদ্ধি",
      description: "৫০+ খামার এবং ১০,০০০+ সন্তুষ্ট গ্রাহক",
      icon: "📈",
      color: "from-purple-500 to-pink-600"
    },
    {
      year: "২০২৩",
      title: "সম্প্রসারণ",
      description: "সারাদেশে ডেলিভারি সেবা চালু",
      icon: "🚚",
      color: "from-orange-500 to-red-600"
    },
    {
      year: "২০২৪",
      title: "আজ",
      description: "১০০+ খামার, ৫০,০০০+ খুশি পরিবার",
      icon: "🎉",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const values = [
    {
      icon: "🌿",
      title: "জৈব ও তাজা",
      description: "১০০% জৈব পণ্য, কোন রাসায়নিক নেই",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: "🤝",
      title: "কৃষকদের সমর্থন",
      description: "স্থানীয় কৃষকদের ন্যায্য মূল্য নিশ্চিত করি",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: "♻️",
      title: "পরিবেশ বান্ধব",
      description: "টেকসই চাষাবাদ এবং প্যাকেজিং",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: "⚡",
      title: "দ্রুত ডেলিভারি",
      description: "২৪ ঘণ্টার মধ্যে তাজা পণ্য পৌঁছে দেই",
      color: "from-orange-500 to-red-600"
    }
  ];

  const team = [
    {
      name: "রহিম আহমেদ",
      role: "প্রতিষ্ঠাতা ও CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      description: "২০+ বছরের কৃষি অভিজ্ঞতা"
    },
    {
      name: "ফাতিমা খাতুন",
      role: "COO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      description: "সাপ্লাই চেইন বিশেষজ্ঞ"
    },
    {
      name: "করিম মিয়া",
      role: "কৃষি পরিচালক",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      description: "জৈব চাষাবাদ বিশেষজ্ঞ"
    },
    {
      name: "নাজমা বেগম",
      role: "গ্রাহক সেবা প্রধান",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      description: "গ্রাহক সন্তুষ্টি নিশ্চিতকরণ"
    }
  ];

  const stats = [
    { number: "100+", label: "অংশীদার খামার", icon: "🚜" },
    { number: "50K+", label: "খুশি গ্রাহক", icon: "😊" },
    { number: "1M+", label: "পণ্য ডেলিভার", icon: "📦" },
    { number: "24/7", label: "গ্রাহক সেবা", icon: "💬" }
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
              🌾
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream mb-6">
              আমাদের গল্প
            </h1>
            <p className="text-lg sm:text-xl text-sage/90 leading-relaxed">
              খামার থেকে টেবিল - একটি স্বপ্ন, একটি মিশন, একটি বিপ্লব। আমরা বিশ্বাস করি প্রতিটি পরিবার তাজা, জৈব এবং পুষ্টিকর খাবার পাওয়ার অধিকারী।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 sm:px-6 -mt-16 relative z-20 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-sage/20 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                className="text-5xl mb-3"
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl sm:text-4xl font-extrabold text-forest mb-2">{stat.number}</div>
              <div className="text-sm sm:text-base text-sage font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Timeline */}
      <section className="container mx-auto px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-4">আমাদের যাত্রা</h2>
          <p className="text-lg text-sage max-w-2xl mx-auto">
            ছোট একটি স্বপ্ন থেকে আজকের বড় পরিবার
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-forest to-sage"></div>

          <div className="space-y-12">
            {story.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 lg:text-right">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-br ${item.color} rounded-3xl p-6 shadow-2xl text-white inline-block`}
                  >
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <div className="text-2xl font-bold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </motion.div>
                </div>

                <div className="hidden lg:block w-8 h-8 bg-forest rounded-full border-4 border-cream shadow-lg z-10"></div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-sage/10 to-forest/5 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-4">আমাদের মূল্যবোধ</h2>
            <p className="text-lg text-sage max-w-2xl mx-auto">
              যে নীতিমালা আমাদের পথ দেখায়
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
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
                  className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center text-4xl shadow-lg`}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-forest mb-2">{value.title}</h3>
                <p className="text-sage">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-4">আমাদের টিম</h2>
          <p className="text-lg text-sage max-w-2xl mx-auto">
            যারা এই স্বপ্নকে বাস্তবে পরিণত করেছেন
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-sage/20 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-cream/90 text-sm">{member.role}</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sage">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-forest to-sage rounded-4xl p-8 sm:p-12 text-center shadow-2xl"
        >
          <div className="text-6xl mb-6">🌟</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
            আমাদের পরিবারের অংশ হন
          </h2>
          <p className="text-lg text-sage/90 mb-8 max-w-2xl mx-auto">
            তাজা, জৈব এবং পুষ্টিকর খাবার এখন আপনার হাতের মুঠোয়
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-cream text-forest rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                শপিং শুরু করুন
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-cream border-2 border-cream rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                যোগাযোগ করুন
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
