"use client";

import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [selectedDiet, setSelectedDiet] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSource, setSelectedSource] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const dietFilters = [
    { id: "low-carb", name: "Low Carbohydrate", icon: "🥗", color: "from-green-400 to-emerald-500" },
    { id: "high-carb", name: "High Carbohydrate", icon: "🍚", color: "from-amber-400 to-orange-500" },
    { id: "protein", name: "Protein Enriched", icon: "💪", color: "from-red-400 to-pink-500" }
  ];

  const categoryFilters = [
    { id: "salad", name: "Salad", icon: "🥗", color: "from-green-400 to-lime-500" },
    { id: "fruit", name: "Fruit", icon: "🍎", color: "from-red-400 to-rose-500" },
    { id: "vegetable", name: "Vegetable", icon: "🥕", color: "from-orange-400 to-amber-500" },
    { id: "carbs", name: "Carbohydrates", icon: "🍞", color: "from-yellow-400 to-orange-400" }
  ];

  const sourceFilters = [
    { id: "bogura-yogurt", name: "Bogura's Yogurt", icon: "🥛", region: "Bogura", color: "from-blue-400 to-cyan-500" },
    { id: "rajshahi-mango", name: "Rajshahi's Mangoes", icon: "🥭", region: "Rajshahi", color: "from-yellow-400 to-orange-500" },
    { id: "dinajpur-lychee", name: "Dinajpur's Lychees", icon: "🍇", region: "Dinajpur", color: "from-pink-400 to-rose-500" },
    { id: "khulna-shrimp", name: "Khulna's Shrimp", icon: "🦐", region: "Khulna", color: "from-orange-400 to-red-500" },
    { id: "sylhet-tea", name: "Sylhet's Tea", icon: "🍵", region: "Sylhet", color: "from-green-400 to-teal-500" },
    { id: "chittagong-fish", name: "Chittagong's Fish", icon: "🐟", region: "Chittagong", color: "from-blue-400 to-indigo-500" }
  ];

  const products = [
    {
      id: 1,
      name: "Organic Mixed Salad",
      price: "৳450",
      image: "🥗",
      diet: ["low-carb"],
      category: ["salad"],
      source: null,
      rating: 4.8
    },
    {
      id: 2,
      name: "Rajshahi Mango Box",
      price: "৳1,200",
      image: "🥭",
      diet: ["high-carb"],
      category: ["fruit"],
      source: ["rajshahi-mango"],
      rating: 4.9
    },
    {
      id: 3,
      name: "Protein Power Bowl",
      price: "৳650",
      image: "🍗",
      diet: ["protein"],
      category: ["salad"],
      source: null,
      rating: 4.7
    },
    {
      id: 4,
      name: "Bogura Doi (Yogurt)",
      price: "৳350",
      image: "🥛",
      diet: ["protein"],
      category: ["vegetable"],
      source: ["bogura-yogurt"],
      rating: 5.0
    },
    {
      id: 5,
      name: "Fresh Vegetable Bundle",
      price: "৳550",
      image: "🥕",
      diet: ["low-carb"],
      category: ["vegetable"],
      source: null,
      rating: 4.6
    },
    {
      id: 6,
      name: "Dinajpur Lychee Basket",
      price: "৳800",
      image: "🍇",
      diet: ["high-carb"],
      category: ["fruit"],
      source: ["dinajpur-lychee"],
      rating: 4.8
    },
    {
      id: 7,
      name: "Whole Grain Bread",
      price: "৳280",
      image: "🍞",
      diet: ["high-carb"],
      category: ["carbs"],
      source: null,
      rating: 4.5
    },
    {
      id: 8,
      name: "Sylhet Premium Tea",
      price: "৳950",
      image: "🍵",
      diet: ["low-carb"],
      category: ["vegetable"],
      source: ["sylhet-tea"],
      rating: 4.9
    }
  ];

  const toggleFilter = (filterArray, setFilterArray, value) => {
    if (filterArray.includes(value)) {
      setFilterArray(filterArray.filter(item => item !== value));
    } else {
      setFilterArray([...filterArray, value]);
    }
  };

  const filteredProducts = products.filter(product => {
    const dietMatch = selectedDiet.length === 0 || selectedDiet.some(diet => product.diet.includes(diet));
    const categoryMatch = selectedCategory.length === 0 || selectedCategory.some(cat => product.category.includes(cat));
    const sourceMatch = selectedSource.length === 0 || (product.source && selectedSource.some(src => product.source.includes(src)));
    
    return dietMatch && categoryMatch && sourceMatch;
  });

  const clearAllFilters = () => {
    setSelectedDiet([]);
    setSelectedCategory([]);
    setSelectedSource([]);
  };

  const activeFilterCount = selectedDiet.length + selectedCategory.length + selectedSource.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-green-100 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-firm">Farm Fresh Menu</h1>
              <p className="text-gray-600 text-sm">Discover premium farm-to-table products</p>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden px-4 py-2 bg-green-500 text-white rounded-xl font-medium flex items-center gap-2"
            >
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="bg-white text-green-600 text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filter Sidebar */}
          <aside className={`lg:w-80 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            
            {/* Filter Header */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold">Filters</h2>
                <span className="text-5xl">🔍</span>
              </div>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="mt-4 w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm py-2 rounded-xl text-sm font-medium transition-all"
                >
                  Clear All ({activeFilterCount})
                </button>
              )}
            </div>

            {/* Diet Filter */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-green-100">
              <h3 className="text-lg font-bold text-firm mb-4 flex items-center gap-2">
                <span className="text-2xl">🍽️</span>
                Diet Preferences
              </h3>
              <div className="space-y-3">
                {dietFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => toggleFilter(selectedDiet, setSelectedDiet, filter.id)}
                    className={`w-full p-4 rounded-2xl transition-all transform hover:scale-105 ${
                      selectedDiet.includes(filter.id)
                        ? `bg-gradient-to-r ${filter.color} text-white shadow-lg`
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{filter.icon}</span>
                      <div className="text-left flex-1">
                        <p className="font-semibold text-sm">{filter.name}</p>
                      </div>
                      {selectedDiet.includes(filter.id) && (
                        <span className="text-xl">✓</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-green-100">
              <h3 className="text-lg font-bold text-firm mb-4 flex items-center gap-2">
                <span className="text-2xl">🛒</span>
                Food Categories
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {categoryFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => toggleFilter(selectedCategory, setSelectedCategory, filter.id)}
                    className={`p-4 rounded-2xl transition-all transform hover:scale-105 ${
                      selectedCategory.includes(filter.id)
                        ? `bg-gradient-to-br ${filter.color} text-white shadow-lg`
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-4xl mb-2 block">{filter.icon}</span>
                      <p className="font-semibold text-xs">{filter.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Source Filter */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-green-100">
              <h3 className="text-lg font-bold text-firm mb-4 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Regional Specialties
              </h3>
              <div className="space-y-3">
                {sourceFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => toggleFilter(selectedSource, setSelectedSource, filter.id)}
                    className={`w-full p-4 rounded-2xl transition-all transform hover:scale-105 ${
                      selectedSource.includes(filter.id)
                        ? `bg-gradient-to-r ${filter.color} text-white shadow-lg`
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{filter.icon}</span>
                      <div className="text-left flex-1">
                        <p className="font-semibold text-sm">{filter.name}</p>
                        <p className={`text-xs ${selectedSource.includes(filter.id) ? 'text-white/80' : 'text-gray-500'}`}>
                          {filter.region}
                        </p>
                      </div>
                      {selectedSource.includes(filter.id) && (
                        <span className="text-xl">✓</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                Showing <span className="font-bold text-firm">{filteredProducts.length}</span> products
              </p>
              <select className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Sort by: Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 text-center shadow-lg border border-gray-100">
                <span className="text-7xl mb-4 block">🔍</span>
                <h3 className="text-2xl font-bold text-firm mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
                  >
                    <div className="relative bg-gradient-to-br from-green-100 to-emerald-200 h-48 flex items-center justify-center">
                      <span className="text-8xl group-hover:scale-110 transition-transform">{product.image}</span>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm font-bold text-firm">{product.rating}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-firm mb-2">{product.name}</h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-green-600">{product.price}</span>
                        <span className="text-gray-500 text-sm">per unit</span>
                      </div>
                      <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
