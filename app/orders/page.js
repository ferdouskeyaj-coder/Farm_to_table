"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("all");

  const orders = [
    {
      id: "ORD-2024-001",
      date: "২৮ জানুয়ারি ২০২৬",
      status: "delivered",
      statusText: "ডেলিভার হয়েছে",
      items: 5,
      total: 1250,
      products: ["জৈব টমেটো", "তাজা স্ট্রবেরি", "খামারের ডিম"],
      deliveryAddress: "ঢাকা, বনানী"
    },
    {
      id: "ORD-2024-002",
      date: "২৯ জানুয়ারি ২০২৬",
      status: "shipping",
      statusText: "পথে আছে",
      items: 3,
      total: 850,
      products: ["তাজা দুধ", "সবুজ লেটুস"],
      deliveryAddress: "ঢাকা, গুলশান"
    },
    {
      id: "ORD-2024-003",
      date: "৩০ জানুয়ারি ২০২৬",
      status: "processing",
      statusText: "প্রসেসিং",
      items: 4,
      total: 1450,
      products: ["কাজু বাদাম", "সুন্দরবনের মধু", "আম"],
      deliveryAddress: "ঢাকা, ধানমন্ডি"
    }
  ];

  const tabs = [
    { id: "all", name: "সব অর্ডার", count: orders.length },
    { id: "processing", name: "প্রসেসিং", count: orders.filter(o => o.status === "processing").length },
    { id: "shipping", name: "পথে আছে", count: orders.filter(o => o.status === "shipping").length },
    { id: "delivered", name: "ডেলিভার হয়েছে", count: orders.filter(o => o.status === "delivered").length }
  ];

  const filteredOrders = activeTab === "all" 
    ? orders 
    : orders.filter(o => o.status === activeTab);

  const getStatusColor = (status) => {
    switch(status) {
      case "delivered": return "from-green-500 to-emerald-600";
      case "shipping": return "from-blue-500 to-cyan-600";
      case "processing": return "from-yellow-500 to-orange-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-sage/5 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-forest mb-2">আমার অর্ডার</h1>
          <p className="text-sage">আপনার সব অর্ডার এখানে দেখুন</p>
        </motion.div>

        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-forest to-sage text-cream shadow-lg"
                  : "bg-white text-forest border-2 border-sage/20 hover:border-forest/30"
              }`}
            >
              {tab.name} ({tab.count})
            </motion.button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredOrders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-lg border-2 border-sage/20 hover:border-forest/30 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-forest mb-1">{order.id}</h3>
                  <p className="text-sm text-sage">{order.date}</p>
                </div>
                <div className={`px-4 py-2 bg-gradient-to-r ${getStatusColor(order.status)} text-white rounded-full font-semibold text-sm shadow-lg`}>
                  {order.statusText}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-sage mb-1">পণ্য</p>
                  <p className="font-semibold text-forest">{order.products.join(", ")}</p>
                </div>
                <div>
                  <p className="text-sm text-sage mb-1">ডেলিভারি ঠিকানা</p>
                  <p className="font-semibold text-forest">{order.deliveryAddress}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t-2 border-sage/20">
                <div>
                  <p className="text-sm text-sage">মোট পণ্য: {order.items}টি</p>
                  <p className="text-2xl font-bold text-forest">৳{order.total}</p>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-sage/10 text-forest rounded-full font-semibold hover:bg-sage/20 transition-all"
                  >
                    বিস্তারিত
                  </motion.button>
                  {order.status === "delivered" && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-forest text-cream rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                      আবার অর্ডার করুন
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-white rounded-4xl shadow-lg border border-sage/20"
          >
            <div className="text-7xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-forest mb-2">কোন অর্ডার নেই</h3>
            <p className="text-sage mb-6">এই ক্যাটাগরিতে কোন অর্ডার পাওয়া যায়নি</p>
            <Link href="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-forest text-cream rounded-full font-semibold"
              >
                শপিং করুন
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
