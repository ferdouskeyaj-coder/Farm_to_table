"use client";

import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("orders");
  
  const user = {
    name: "আহমেদ",
    loyaltyPoints: 2450,
    activeOrders: 2
  };

  const orders = [
    {
      id: "ORD-2026-001",
      items: "Organic Vegetables Bundle, Fresh Milk",
      status: "In Kitchen",
      statusColor: "bg-amber-500",
      date: "10 Jan 2026",
      total: "৳1,250",
      image: "🥗"
    },
    {
      id: "ORD-2026-002",
      items: "Farm Fresh Eggs, Honey",
      status: "On the Way",
      statusColor: "bg-blue-500",
      date: "9 Jan 2026",
      total: "৳850",
      image: "🥚"
    },
    {
      id: "ORD-2026-003",
      items: "Seasonal Fruits Box",
      status: "Delivered",
      statusColor: "bg-green-500",
      date: "7 Jan 2026",
      total: "৳1,500",
      image: "🍎"
    }
  ];

  const addresses = [
    {
      id: 1,
      label: "Home",
      address: "House 45, Road 12, Dhanmondi, Dhaka 1209",
      isDefault: true
    },
    {
      id: 2,
      label: "Office",
      address: "Plot 23, Gulshan Avenue, Gulshan-1, Dhaka 1212",
      isDefault: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="flex flex-col lg:flex-row">
        
        {/* Sidebar */}
        <aside className="lg:w-72 bg-white/80 backdrop-blur-xl border-r border-green-100 lg:min-h-screen p-6 shadow-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-firm mb-1">Farm to Table</h2>
            <p className="text-sm text-gray-500">Your Premium Dashboard</p>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === "orders"
                  ? "bg-green-500 text-white shadow-lg shadow-green-200"
                  : "text-gray-700 hover:bg-green-50"
              }`}
            >
              <span className="text-2xl">📦</span>
              <span className="font-medium">My Orders</span>
            </button>

            <button
              onClick={() => setActiveTab("loyalty")}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === "loyalty"
                  ? "bg-green-500 text-white shadow-lg shadow-green-200"
                  : "text-gray-700 hover:bg-green-50"
              }`}
            >
              <span className="text-2xl">⭐</span>
              <span className="font-medium">Loyalty Points</span>
            </button>

            <button
              onClick={() => setActiveTab("address")}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === "address"
                  ? "bg-green-500 text-white shadow-lg shadow-green-200"
                  : "text-gray-700 hover:bg-green-50"
              }`}
            >
              <span className="text-2xl">📍</span>
              <span className="font-medium">Address Book</span>
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === "profile"
                  ? "bg-green-500 text-white shadow-lg shadow-green-200"
                  : "text-gray-700 hover:bg-green-50"
              }`}
            >
              <span className="text-2xl">👤</span>
              <span className="font-medium">Profile</span>
            </button>
          </nav>

          <div className="mt-8 p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl text-white">
            <p className="text-sm opacity-90 mb-1">Member Since</p>
            <p className="text-lg font-bold">January 2026</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-10">
          
          {/* Greeting */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-firm mb-2">
              Hello, {user.name}! 👋
            </h1>
            <p className="text-gray-600">Welcome back to your farm-fresh dashboard</p>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            {/* Active Orders Card */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg shadow-blue-100 border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  🚚
                </div>
                <span className="text-3xl font-bold text-blue-600">{user.activeOrders}</span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">Active Orders</h3>
              <p className="text-xs text-gray-500">Currently being processed</p>
            </div>

            {/* Loyalty Points Card */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg shadow-amber-100 border border-amber-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  ⭐
                </div>
                <span className="text-3xl font-bold text-amber-600">{user.loyaltyPoints}</span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">Reward Points</h3>
              <p className="text-xs text-gray-500">Redeem for discounts</p>
            </div>

            {/* Saved Addresses Card */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg shadow-green-100 border border-green-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  📍
                </div>
                <span className="text-3xl font-bold text-green-600">{addresses.length}</span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">Saved Addresses</h3>
              <p className="text-xs text-gray-500">Delivery locations</p>
            </div>
          </div>

          {/* Content Area based on Active Tab */}
          {activeTab === "orders" && (
            <div>
              <h2 className="text-2xl font-bold text-firm mb-6">Recent Orders</h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
                          {order.image}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-firm">{order.id}</h3>
                            <span className={`${order.statusColor} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                              {order.status}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-1">{order.items}</p>
                          <p className="text-gray-400 text-xs">{order.date}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-2xl font-bold text-firm">{order.total}</p>
                        </div>
                        <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-all shadow-md hover:shadow-lg">
                          Track
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "loyalty" && (
            <div>
              <h2 className="text-2xl font-bold text-firm mb-6">Loyalty Rewards</h2>
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white shadow-2xl mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-amber-100 text-sm mb-2">Your Balance</p>
                    <h3 className="text-5xl font-bold">{user.loyaltyPoints}</h3>
                    <p className="text-amber-100 text-sm mt-2">Points Available</p>
                  </div>
                  <div className="text-7xl">⭐</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-sm">Next Reward: 3000 points</p>
                  <div className="w-full bg-white/30 rounded-full h-2 mt-2">
                    <div className="bg-white rounded-full h-2" style={{width: `${(user.loyaltyPoints/3000)*100}%`}}></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-bold text-firm mb-2">৳500 Discount</h4>
                  <p className="text-gray-600 text-sm mb-4">Redeem 1000 points</p>
                  <button className="w-full py-2 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all">
                    Redeem
                  </button>
                </div>
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-bold text-firm mb-2">Free Delivery</h4>
                  <p className="text-gray-600 text-sm mb-4">Redeem 500 points</p>
                  <button className="w-full py-2 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all">
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "address" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-firm">Address Book</h2>
                <button className="px-6 py-2 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all shadow-md">
                  + Add New
                </button>
              </div>
              <div className="space-y-4">
                {addresses.map((addr) => (
                  <div
                    key={addr.id}
                    className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                          📍
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-firm">{addr.label}</h3>
                            {addr.isDefault && (
                              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Default</span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm">{addr.address}</p>
                        </div>
                      </div>
                      <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div>
              <h2 className="text-2xl font-bold text-firm mb-6">Profile Settings</h2>
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-100">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl flex items-center justify-center text-5xl shadow-lg">
                    👤
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-firm mb-1">{user.name}</h3>
                    <p className="text-gray-600">ahmed@example.com</p>
                    <p className="text-gray-500 text-sm">+880 1712-345678</p>
                  </div>
                </div>
                <button className="w-full md:w-auto px-8 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all shadow-md">
                  Edit Profile
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
