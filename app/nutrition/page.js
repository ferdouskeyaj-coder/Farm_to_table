"use client";

import { useState } from "react";
import Image from "next/image";

export default function Nutrition() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const nutritionData = [
    {
      id: 1,
      name: "Chicken Breast",
      category: "protein",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&q=80",
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      fiber: 0,
      vitamins: ["B3", "B6", "B12"],
      minerals: ["Selenium", "Phosphorus", "Zinc"],
      benefits: [
        "Builds and repairs muscle tissue",
        "Supports immune system",
        "Helps maintain healthy metabolism",
        "Reduces risk of heart disease"
      ],
      description: "High-quality lean protein source essential for muscle growth and repair."
    },
    {
      id: 2,
      name: "Salmon",
      category: "protein",
      image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800&q=80",
      calories: 208,
      protein: 20,
      carbs: 0,
      fat: 13,
      fiber: 0,
      vitamins: ["D", "B12", "B6"],
      minerals: ["Selenium", "Potassium", "Omega-3"],
      benefits: [
        "Reduces inflammation",
        "Supports brain health",
        "Improves heart health",
        "Strengthens bones"
      ],
      description: "Rich in omega-3 fatty acids and vitamin D for overall health."
    },
    {
      id: 3,
      name: "Spinach",
      category: "vegetable",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&q=80",
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4,
      fiber: 2.2,
      vitamins: ["A", "C", "K", "B9"],
      minerals: ["Iron", "Calcium", "Magnesium"],
      benefits: [
        "Improves eye health",
        "Reduces oxidative stress",
        "Helps regulate blood pressure",
        "Supports bone health"
      ],
      description: "Nutrient-dense leafy green packed with vitamins and minerals."
    },
    {
      id: 4,
      name: "Blueberries",
      category: "fruit",
      image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800&q=80",
      calories: 57,
      protein: 0.7,
      carbs: 14.5,
      fat: 0.3,
      fiber: 2.4,
      vitamins: ["C", "K", "B6"],
      minerals: ["Manganese", "Potassium"],
      benefits: [
        "Powerful antioxidant properties",
        "Improves brain function",
        "Supports heart health",
        "May reduce DNA damage"
      ],
      description: "Antioxidant-rich superfruit that supports cognitive function."
    },
    {
      id: 5,
      name: "Sweet Potato",
      category: "carbs",
      image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=800&q=80",
      calories: 86,
      protein: 1.6,
      carbs: 20,
      fat: 0.1,
      fiber: 3,
      vitamins: ["A", "C", "B6"],
      minerals: ["Potassium", "Manganese"],
      benefits: [
        "Supports eye health",
        "Boosts immune system",
        "Regulates blood sugar",
        "Promotes gut health"
      ],
      description: "Complex carbohydrate rich in beta-carotene and fiber."
    },
    {
      id: 6,
      name: "Almonds",
      category: "nuts",
      image: "https://images.unsplash.com/photo-1508736793122-f516e3ba5569?w=800&q=80",
      calories: 579,
      protein: 21,
      carbs: 22,
      fat: 50,
      fiber: 12.5,
      vitamins: ["E", "B2"],
      minerals: ["Magnesium", "Calcium", "Phosphorus"],
      benefits: [
        "Lowers cholesterol levels",
        "Supports brain health",
        "Aids in weight management",
        "Reduces inflammation"
      ],
      description: "Nutrient-dense nuts packed with healthy fats and vitamin E."
    },
    {
      id: 7,
      name: "Greek Yogurt",
      category: "dairy",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
      calories: 59,
      protein: 10,
      carbs: 3.6,
      fat: 0.4,
      fiber: 0,
      vitamins: ["B12", "B2"],
      minerals: ["Calcium", "Phosphorus", "Probiotics"],
      benefits: [
        "Supports digestive health",
        "Builds strong bones",
        "Boosts immune system",
        "Aids muscle recovery"
      ],
      description: "Probiotic-rich dairy product excellent for gut health."
    },
    {
      id: 8,
      name: "Quinoa",
      category: "carbs",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80",
      calories: 120,
      protein: 4.4,
      carbs: 21,
      fat: 1.9,
      fiber: 2.8,
      vitamins: ["B1", "B2", "B6"],
      minerals: ["Magnesium", "Iron", "Zinc"],
      benefits: [
        "Complete protein source",
        "Gluten-free grain alternative",
        "Supports weight loss",
        "Reduces inflammation"
      ],
      description: "Complete protein grain with all 9 essential amino acids."
    },
    {
      id: 9,
      name: "Avocado",
      category: "fruit",
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&q=80",
      calories: 160,
      protein: 2,
      carbs: 8.5,
      fat: 15,
      fiber: 7,
      vitamins: ["K", "E", "C", "B5"],
      minerals: ["Potassium", "Magnesium"],
      benefits: [
        "Supports heart health",
        "Improves cholesterol levels",
        "Enhances nutrient absorption",
        "Promotes eye health"
      ],
      description: "Healthy fat source rich in monounsaturated fatty acids."
    },
    {
      id: 10,
      name: "Broccoli",
      category: "vegetable",
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800&q=80",
      calories: 34,
      protein: 2.8,
      carbs: 7,
      fat: 0.4,
      fiber: 2.6,
      vitamins: ["C", "K", "A", "B9"],
      minerals: ["Potassium", "Iron", "Calcium"],
      benefits: [
        "May reduce cancer risk",
        "Supports heart health",
        "Improves bone health",
        "Boosts immune system"
      ],
      description: "Cruciferous vegetable with powerful anti-cancer properties."
    },
    {
      id: 11,
      name: "Eggs",
      category: "protein",
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800&q=80",
      calories: 155,
      protein: 13,
      carbs: 1.1,
      fat: 11,
      fiber: 0,
      vitamins: ["A", "D", "B12", "B2"],
      minerals: ["Selenium", "Phosphorus", "Choline"],
      benefits: [
        "Supports brain development",
        "Promotes eye health",
        "Aids muscle building",
        "Supports weight management"
      ],
      description: "Complete protein with essential nutrients for brain health."
    },
    {
      id: 12,
      name: "Brown Rice",
      category: "carbs",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80",
      calories: 111,
      protein: 2.6,
      carbs: 23,
      fat: 0.9,
      fiber: 1.8,
      vitamins: ["B1", "B3", "B6"],
      minerals: ["Manganese", "Magnesium", "Selenium"],
      benefits: [
        "Supports digestive health",
        "Helps control blood sugar",
        "Reduces heart disease risk",
        "Provides sustained energy"
      ],
      description: "Whole grain rich in fiber and essential minerals."
    }
  ];

  const categories = [
    { id: "all", name: "All Foods", icon: "🍽️", color: "from-purple-500 to-pink-500" },
    { id: "protein", name: "Protein", icon: "🍗", color: "from-red-500 to-pink-500" },
    { id: "vegetable", name: "Vegetables", icon: "🥬", color: "from-green-500 to-emerald-500" },
    { id: "fruit", name: "Fruits", icon: "🍎", color: "from-orange-500 to-red-500" },
    { id: "carbs", name: "Carbohydrates", icon: "🍚", color: "from-amber-500 to-orange-500" },
    { id: "dairy", name: "Dairy", icon: "🥛", color: "from-blue-500 to-cyan-500" },
    { id: "nuts", name: "Nuts & Seeds", icon: "🥜", color: "from-yellow-600 to-orange-600" }
  ];

  const filteredFoods = nutritionData.filter(food => {
    const matchesCategory = selectedCategory === "all" || food.category === selectedCategory;
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const NutrientBar = ({ label, value, max, color }) => (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="font-bold text-firm">{value}g</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full bg-gradient-to-r ${color}`}
          style={{ width: `${Math.min((value / max) * 100, 100)}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Food & Nutrition Guide
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
              Discover the nutritional power of natural foods. Learn how each ingredient supports your health and prevents diseases.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl">
                <p className="text-3xl font-bold">{nutritionData.length}+</p>
                <p className="text-sm text-green-100">Foods Analyzed</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm text-green-100">Natural</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl">
                <p className="text-3xl font-bold">Science</p>
                <p className="text-sm text-green-100">Based</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search for foods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-lg"
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
              </div>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all transform hover:scale-105 ${
                    selectedCategory === cat.id
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredFoods.map((food) => (
            <div
              key={food.id}
              className="bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-bold text-green-600">{food.calories} cal</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-firm mb-3">{food.name}</h3>
                <p className="text-gray-600 mb-6">{food.description}</p>

                {/* Macronutrients */}
                <div className="mb-6">
                  <h4 className="font-bold text-firm mb-4 text-lg">Nutritional Value (per 100g)</h4>
                  <NutrientBar label="Protein" value={food.protein} max={50} color="from-red-500 to-pink-500" />
                  <NutrientBar label="Carbohydrates" value={food.carbs} max={50} color="from-amber-500 to-orange-500" />
                  <NutrientBar label="Fat" value={food.fat} max={50} color="from-yellow-500 to-orange-400" />
                  <NutrientBar label="Fiber" value={food.fiber} max={20} color="from-green-500 to-emerald-500" />
                </div>

                {/* Vitamins & Minerals */}
                <div className="mb-6">
                  <h4 className="font-bold text-firm mb-3">Vitamins & Minerals</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {food.vitamins.map((vitamin, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        Vitamin {vitamin}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {food.minerals.map((mineral, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        {mineral}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Health Benefits */}
                <div>
                  <h4 className="font-bold text-firm mb-3 flex items-center gap-2">
                    <span className="text-2xl">💚</span>
                    Health Benefits
                  </h4>
                  <ul className="space-y-2">
                    {food.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Products Section */}
        <section className="mt-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-12 text-white shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Farm-to-Table Promise</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              All our products are sourced directly from certified organic farms, ensuring maximum nutritional value and freshness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center">
              <span className="text-6xl mb-4 block">🌱</span>
              <h3 className="text-2xl font-bold mb-3">100% Organic</h3>
              <p className="text-green-100">No pesticides, no chemicals. Pure natural goodness from farm to your table.</p>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center">
              <span className="text-6xl mb-4 block">🔬</span>
              <h3 className="text-2xl font-bold mb-3">Lab Tested</h3>
              <p className="text-green-100">Every batch is tested for nutritional content and safety standards.</p>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center">
              <span className="text-6xl mb-4 block">🚚</span>
              <h3 className="text-2xl font-bold mb-3">Fresh Delivery</h3>
              <p className="text-green-100">Delivered within 24 hours of harvest to preserve maximum nutrients.</p>
            </div>
          </div>
        </section>

        {/* Nutritional Tips */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-firm mb-8 text-center">Nutritional Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-100">
              <span className="text-5xl mb-4 block">🥗</span>
              <h3 className="font-bold text-firm mb-2">Eat Colorful</h3>
              <p className="text-gray-600 text-sm">Different colors mean different nutrients. Aim for a rainbow plate.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-100">
              <span className="text-5xl mb-4 block">💧</span>
              <h3 className="font-bold text-firm mb-2">Stay Hydrated</h3>
              <p className="text-gray-600 text-sm">Water helps absorb nutrients. Drink 8-10 glasses daily.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-100">
              <span className="text-5xl mb-4 block">⚖️</span>
              <h3 className="font-bold text-firm mb-2">Balance Macros</h3>
              <p className="text-gray-600 text-sm">Include protein, carbs, and healthy fats in every meal.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-100">
              <span className="text-5xl mb-4 block">🍽️</span>
              <h3 className="font-bold text-firm mb-2">Portion Control</h3>
              <p className="text-gray-600 text-sm">Even healthy foods need moderation. Listen to your body.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
