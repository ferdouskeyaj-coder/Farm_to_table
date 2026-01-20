"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const [selectedSeason, setSelectedSeason] = useState("winter");
  const [selectedCategory, setSelectedCategory] = useState("vegetables");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const categories = [
    { id: "vegetables", name: "শাক-সবজি", icon: "🥬", color: "from-green-500 to-emerald-600", activeColor: "bg-green-500" },
    { id: "fruits", name: "ফলমূল", icon: "🍎", color: "from-red-500 to-pink-600", activeColor: "bg-red-500" },
    { id: "nuts", name: "বাদাম", icon: "🥜", color: "from-amber-600 to-orange-600", activeColor: "bg-amber-600" },
    { id: "honey", name: "মধু", icon: "🍯", color: "from-yellow-500 to-amber-600", activeColor: "bg-yellow-500" },
    { id: "sweets", name: "মিষ্টি", icon: "🍰", color: "from-purple-500 to-pink-600", activeColor: "bg-purple-500" }
  ];

  const seasons = [
    { id: "winter", name: "শীতকালীন", icon: "❄️", color: "from-blue-500 to-cyan-600" },
    { id: "summer", name: "গ্রীষ্মকালীন", icon: "☀️", color: "from-orange-500 to-red-600" }
  ];

  const recipeDetails = {
    "ফুলকপির তরকারি": {
      name: "ফুলকপির তরকারি",
      prepTime: "১৫ মিনিট",
      cookTime: "২৫ মিনিট",
      servings: "৪ জন",
      difficulty: "সহজ",
      ingredients: [
        "ফুলকপি - ১টি (মাঝারি)",
        "পেঁয়াজ - ২টি (কুচি)",
        "টমেটো - ২টি (কুচি)",
        "আদা-রসুন বাটা - ১ টেবিল চামচ",
        "হলুদ গুঁড়া - ১/২ চা চামচ",
        "মরিচ গুঁড়া - ১ চা চামচ",
        "ধনে গুঁড়া - ১ চা চামচ",
        "গরম মসলা - ১/২ চা চামচ",
        "তেল - ৩ টেবিল চামচ",
        "লবণ - স্বাদমতো"
      ],
      instructions: [
        "ফুলকপি ধুয়ে ছোট ছোট টুকরো করে কেটে নিন",
        "কড়াইতে তেল গরম করে পেঁয়াজ কুচি দিয়ে ভাজুন",
        "আদা-রসুন বাটা দিয়ে ভালো করে ভাজুন",
        "টমেটো কুচি দিয়ে নরম হওয়া পর্যন্ত রান্না করুন",
        "সব মসলা দিয়ে ভালো করে মিশিয়ে নিন",
        "ফুলকপির টুকরো দিয়ে ভালো করে নাড়ুন",
        "ঢাকনা দিয়ে মাঝারি আঁচে ১৫ মিনিট রান্না করুন",
        "মাঝে মাঝে নেড়ে দিন যাতে পুড়ে না যায়",
        "গরম মসলা ছিটিয়ে পরিবেশন করুন"
      ]
    }
  };

  const products = {
    winter: {
      vegetables: [
        {
          id: 1,
          name: "ফুলকপি",
          nameEn: "Cauliflower",
          price: "৳60",
          unit: "প্রতি কেজি",
          image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
          harvestTime: "২ দিন আগে",
          inStock: true,
          stockQuantity: 150,
          nutrition: {
            calories: 25,
            protein: 2,
            carbs: 5,
            fiber: 2.5,
            vitamins: ["C", "K", "B6"],
            minerals: ["Potassium", "Folate"]
          },
          benefits: [
            "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে",
            "হজম শক্তি বাড়ায়",
            "হার্ট সুস্থ রাখে"
          ],
          recipes: ["ফুলকপির তরকারি", "ফুলকপি ভাজা", "মিক্সড ভেজিটেবল", "ফুলকপির পরোটা"],
          badge: "জৈব"
        },
        {
          id: 2,
          name: "বাঁধাকপি",
          nameEn: "Cabbage",
          price: "৳40",
          unit: "প্রতি কেজি",
          image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=800&q=80",
          harvestTime: "১ দিন আগে",
          inStock: true,
          stockQuantity: 200,
          nutrition: {
            calories: 25,
            protein: 1.3,
            carbs: 6,
            fiber: 2.5,
            vitamins: ["C", "K"],
            minerals: ["Calcium", "Potassium"]
          },
          benefits: [
            "ক্যান্সার প্রতিরোধে সাহায্য করে",
            "ওজন কমাতে সহায়ক",
            "হজম উন্নত করে"
          ],
          recipes: ["বাঁধাকপির ভর্তা", "বাঁধাকপি ভাজা", "বাঁধাকপির সালাদ", "বাঁধাকপির রোল"],
          badge: "তাজা"
        },
        {
          id: 3,
          name: "গাজর",
          nameEn: "Carrot",
          price: "৳80",
          unit: "প্রতি কেজি",
          image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=80",
          harvestTime: "৩ দিন আগে",
          inStock: true,
          stockQuantity: 180,
          nutrition: {
            calories: 41,
            protein: 0.9,
            carbs: 10,
            fiber: 2.8,
            vitamins: ["A", "K", "B6"],
            minerals: ["Potassium", "Biotin"]
          },
          benefits: [
            "চোখের দৃষ্টি শক্তি বাড়ায়",
            "ত্বক উজ্জ্বল করে",
            "রক্তচাপ নিয়ন্ত্রণ করে"
          ],
          recipes: ["গাজরের হালুয়া", "গাজরের জুস", "মিক্সড সালাদ", "গাজর ভাজা"],
          badge: "জৈব"
        },
        {
          id: 4,
          name: "টমেটো",
          nameEn: "Tomato",
          price: "৳120",
          unit: "প্রতি কেজি",
          image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80",
          harvestTime: "১ দিন আগে",
          inStock: true,
          stockQuantity: 250,
          nutrition: {
            calories: 18,
            protein: 0.9,
            carbs: 3.9,
            fiber: 1.2,
            vitamins: ["C", "K", "A"],
            minerals: ["Potassium", "Lycopene"]
          },
          benefits: [
            "হৃদরোগের ঝুঁকি কমায়",
            "ত্বক সুরক্ষা দেয়",
            "ক্যান্সার প্রতিরোধ করে"
          ],
          recipes: ["টমেটো তরকারি", "টমেটো স্যুপ", "টমেটো সালাদ", "টমেটো চাটনি"],
          badge: "তাজা"
        }
      ],
      fruits: [
        {
          id: 7,
          name: "কমলা",
          nameEn: "Orange",
          price: "৳180",
          unit: "প্রতি কেজি",
          image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=800&q=80",
          harvestTime: "৫ দিন আগে",
          inStock: true,
          stockQuantity: 300,
          nutrition: {
            calories: 47,
            protein: 0.9,
            carbs: 12,
            fiber: 2.4,
            vitamins: ["C", "A", "B1"],
            minerals: ["Potassium", "Calcium"]
          },
          benefits: [
            "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি",
            "ত্বক উজ্জ্বল করে",
            "হজমে সহায়ক"
          ],
          recipes: ["কমলার জুস", "ফ্রুট সালাদ", "কমলার স্মুদি", "কমলার মার্মালেড"],
          badge: "মৌসুমী"
        },
        {
          id: 8,
          name: "আপেল",
          nameEn: "Apple",
          price: "৳220",
          unit: "প্রতি কেজি",
          image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
          harvestTime: "৭ দিন আগে",
          inStock: true,
          stockQuantity: 150,
          nutrition: {
            calories: 52,
            protein: 0.3,
            carbs: 14,
            fiber: 2.4,
            vitamins: ["C", "K"],
            minerals: ["Potassium"]
          },
          benefits: [
            "হার্ট সুস্থ রাখে",
            "ওজন নিয়ন্ত্রণে সাহায্য করে",
            "মস্তিষ্ক সুরক্ষা দেয়"
          ],
          recipes: ["আপেল জুস", "আপেল পাই", "ফ্রুট চার্ট", "আপেল সালাদ"],
          badge: "আমদানি"
        },
        {
          id: 9,
          name: "আঙ্গুর",
          nameEn: "Grapes",
          price: "৳280",
          unit: "প্রতি কেজি",
          image: "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=800&q=80",
          harvestTime: "৩ দিন আগে",
          inStock: true,
          stockQuantity: 80,
          nutrition: {
            calories: 69,
            protein: 0.7,
            carbs: 18,
            fiber: 0.9,
            vitamins: ["C", "K"],
            minerals: ["Potassium", "Copper"]
          },
          benefits: [
            "হার্ট সুস্থ রাখে",
            "ক্যান্সার প্রতিরোধ করে",
            "রক্তচাপ কমায়"
          ],
          recipes: ["আঙ্গুরের জুস", "ফ্রুট সালাদ", "আঙ্গুর স্মুদি", "আঙ্গুর দিয়ে দই"],
          badge: "প্রিমিয়াম"
        },
        {
          id: 10,
          name: "ডালিম",
          nameEn: "Pomegranate",
          price: "৳250",
          unit: "প্রতি কেজি",
          image: "/pomegranate.webp",
          harvestTime: "৪ দিন আগে",
          inStock: true,
          stockQuantity: 60,
          nutrition: {
            calories: 83,
            protein: 1.7,
            carbs: 19,
            fiber: 4,
            vitamins: ["C", "K"],
            minerals: ["Potassium", "Folate"]
          },
          benefits: [
            "রক্তচাপ নিয়ন্ত্রণ করে",
            "হার্ট সুস্থ রাখে",
            "রোগ প্রতিরোধ ক্ষমতা বাড়ায়"
          ],
          recipes: ["ডালিমের জুস", "ফ্রুট চার্ট", "ডালিম সালাদ", "ডালিম স্মুদি"],
          badge: "মৌসুমী"
        }
      ]
    },
    summer: {
      vegetables: [
        {
          id: 12,
          name: "লাউ",
          nameEn: "Bottle Gourd",
          price: "৳50",
          unit: "প্রতি কেজি",
          image: "/bottle-gourd.webp",
          harvestTime: "১ দিন আগে",
          inStock: true,
          stockQuantity: 180,
          nutrition: {
            calories: 14,
            protein: 0.6,
            carbs: 3.4,
            fiber: 0.5,
            vitamins: ["C", "B"],
            minerals: ["Calcium", "Magnesium"]
          },
          benefits: [
            "ওজন কমাতে সাহায্য করে",
            "হজম শক্তি বাড়ায়",
            "শরীর ঠান্ডা রাখে"
          ],
          recipes: ["লাউ ভাজা", "লাউয়ের ডাল", "লাউয়ের তরকারি", "লাউয়ের খিচুড়ি"],
          badge: "জৈব"
        },
        {
          id: 13,
          name: "করলা",
          nameEn: "Bitter Gourd",
          price: "৳70",
          unit: "প্রতি কেজি",
          image: "/bitter-gourd.jpg",
          harvestTime: "২ দিন আগে",
          inStock: true,
          stockQuantity: 100,
          nutrition: {
            calories: 17,
            protein: 1,
            carbs: 3.7,
            fiber: 2.8,
            vitamins: ["C", "A"],
            minerals: ["Iron", "Potassium"]
          },
          benefits: [
            "ডায়াবেটিস নিয়ন্ত্রণে সাহায্য করে",
            "রক্ত পরিষ্কার করে",
            "রোগ প্রতিরোধ ক্ষমতা বাড়ায়"
          ],
          recipes: ["করলা ভাজা", "করলার ভর্তা", "করলার জুস", "করলা আলু ভাজা"],
          badge: "তাজা"
        },
        {
          id: 14,
          name: "ঝিঙ্গা",
          nameEn: "Ridge Gourd",
          price: "৳55",
          unit: "প্রতি কেজি",
          image: "/ridge-gourd.jpg",
          harvestTime: "১ দিন আগে",
          inStock: true,
          stockQuantity: 150,
          nutrition: {
            calories: 20,
            protein: 1.2,
            carbs: 4.4,
            fiber: 1.1,
            vitamins: ["C", "A"],
            minerals: ["Iron", "Magnesium"]
          },
          benefits: [
            "ওজন কমাতে সাহায্য করে",
            "হজমে সহায়ক",
            "ত্বক ভালো রাখে"
          ],
          recipes: ["ঝিঙ্গা ভাজা", "ঝিঙ্গার তরকারি", "ঝিঙ্গা চিংড়ি", "ঝিঙ্গার ডাল"],
          badge: "জৈব"
        },
      ],
      fruits: [
        {
          id: 18,
          name: "আম",
          nameEn: "Mango",
          price: "৳150",
          unit: "প্রতি কেজি",
          image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&q=80",
          harvestTime: "২ দিন আগে",
          inStock: true,
          stockQuantity: 400,
          nutrition: {
            calories: 60,
            protein: 0.8,
            carbs: 15,
            fiber: 1.6,
            vitamins: ["C", "A", "E"],
            minerals: ["Potassium", "Copper"]
          },
          benefits: [
            "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি",
            "হজমে সহায়ক",
            "চোখের জন্য ভালো"
          ],
          recipes: ["আমের জুস", "আম দিয়ে পায়েস", "আমের চাটনি", "আম দিয়ে ফালুদা"],
          badge: "মৌসুমী"
        },
        {
          id: 19,
          name: "তরমুজ",
          nameEn: "Watermelon",
          price: "৳40",
          unit: "প্রতি কেজি",
          image: "/watermelon.jpg",
          harvestTime: "১ দিন আগে",
          inStock: true,
          stockQuantity: 500,
          nutrition: {
            calories: 30,
            protein: 0.6,
            carbs: 8,
            fiber: 0.4,
            vitamins: ["C", "A"],
            minerals: ["Potassium", "Magnesium"]
          },
          benefits: [
            "শরীর হাইড্রেটেড রাখে",
            "হার্ট সুস্থ রাখে",
            "ত্বক সুন্দর করে"
          ],
          recipes: ["তরমুজের জুস", "ফ্রুট সালাদ", "তরমুজের স্মুদি", "তরমুজের শরবত"],
          badge: "তাজা"
        },
        {
          id: 20,
          name: "লিচু",
          nameEn: "Lychee",
          price: "৳200",
          unit: "প্রতি কেজি",
          image: "/litchi.jpg",
          harvestTime: "৩ দিন আগে",
          inStock: true,
          stockQuantity: 150,
          nutrition: {
            calories: 66,
            protein: 0.8,
            carbs: 17,
            fiber: 1.3,
            vitamins: ["C", "B"],
            minerals: ["Potassium", "Copper"]
          },
          benefits: [
            "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি",
            "ত্বক উজ্জ্বল করে",
            "হার্ট সুস্থ রাখে"
          ],
          recipes: ["লিচুর জুস", "ফ্রুট সালাদ", "লিচু স্মুদি", "লিচু আইসক্রিম"],
          badge: "মৌসুমী"
        },
      ]
    }
  };

  const otherProducts = {
    nuts: [
        {
          id: 24,
          name: "কাজু বাদাম",
          nameEn: "Cashew Nuts",
          price: "৳850",
          unit: "প্রতি কেজি",
          image: "/cashew.png",
          harvestTime: "১৫ দিন আগে",
        inStock: true,
        stockQuantity: 50,
        nutrition: {
          calories: 553,
          protein: 18,
          carbs: 30,
          fiber: 3.3,
          vitamins: ["E", "K", "B6"],
          minerals: ["Magnesium", "Zinc", "Iron"]
        },
        benefits: [
          "হার্ট সুস্থ রাখে",
          "হাড় মজবুত করে",
          "মস্তিষ্ক সচল রাখে"
        ],
        recipes: ["কাজু দিয়ে খিচুড়ি", "কাজু বার্ফি", "কাজু পনির", "কাজু দিয়ে পোলাও"],
        badge: "প্রিমিয়াম"
      },
        {
          id: 25,
          name: "আখরোট",
          nameEn: "Walnuts",
          price: "৳950",
          unit: "প্রতি কেজি",
          image: "/walnuts-akhrot.jpg",
          harvestTime: "২০ দিন আগে",
        inStock: true,
        stockQuantity: 40,
        nutrition: {
          calories: 654,
          protein: 15,
          carbs: 14,
          fiber: 6.7,
          vitamins: ["E", "B6"],
          minerals: ["Magnesium", "Phosphorus"]
        },
        benefits: [
          "মস্তিষ্ক সুস্থ রাখে",
          "কোলেস্টেরল কমায়",
          "ওজন নিয়ন্ত্রণে সাহায্য করে"
        ],
        recipes: ["আখরোট দিয়ে কেক", "আখরোট মিল্কশেক", "আখরোট চকলেট", "আখরোট সালাদ"],
        badge: "প্রিমিয়াম"
      },
        {
          id: 26,
          name: "বাদাম",
          nameEn: "Almonds",
          price: "৳750",
          unit: "প্রতি কেজি",
          image: "/almonds.png",
          harvestTime: "১২ দিন আগে",
        inStock: true,
        stockQuantity: 60,
        nutrition: {
          calories: 579,
          protein: 21,
          carbs: 22,
          fiber: 12.5,
          vitamins: ["E", "B2"],
          minerals: ["Magnesium", "Calcium"]
        },
        benefits: [
          "কোলেস্টেরল কমায়",
          "মস্তিষ্ক সুস্থ রাখে",
          "ওজন নিয়ন্ত্রণে সাহায্য করে"
        ],
        recipes: ["বাদাম দুধ", "বাদাম বার্ফি", "বাদাম হালুয়া", "বাদাম কেক"],
        badge: "প্রিমিয়াম"
      },
        {
          id: 27,
          name: "পেস্তা বাদাম",
          nameEn: "Pistachios",
          price: "৳1200",
          unit: "প্রতি কেজি",
          image: "/pistachio.webp",
          harvestTime: "১৮ দিন আগে",
        inStock: true,
        stockQuantity: 35,
        nutrition: {
          calories: 562,
          protein: 20,
          carbs: 28,
          fiber: 10,
          vitamins: ["B6", "E"],
          minerals: ["Copper", "Manganese"]
        },
        benefits: [
          "চোখের স্বাস্থ্য ভালো রাখে",
          "ওজন নিয়ন্ত্রণে সাহায্য করে",
          "হার্ট সুস্থ রাখে"
        ],
        recipes: ["পেস্তা বার্ফি", "পেস্তা আইসক্রিম", "পেস্তা কুলফি", "পেস্তা মিল্কশেক"],
        badge: "প্রিমিয়াম"
      }
    ],
    honey: [
        {
          id: 28,
          name: "সুন্দরবনের মধু",
          nameEn: "Sundarbans Honey",
          price: "৳650",
          unit: "প্রতি কেজি",
          image: "/sundarban-honey.jpg",
          harvestTime: "১০ দিন আগে",
        inStock: true,
        stockQuantity: 80,
        nutrition: {
          calories: 304,
          protein: 0.3,
          carbs: 82,
          fiber: 0.2,
          vitamins: ["B6", "C"],
          minerals: ["Calcium", "Iron", "Zinc"]
        },
        benefits: [
          "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি",
          "কাশি ও গলা ব্যথা কমায়",
          "শক্তি বৃদ্ধি করে"
        ],
        recipes: ["মধু দিয়ে চা", "মধু লেবু পানি", "মধু দিয়ে দই", "মধু দিয়ে পরিজ"],
        badge: "খাঁটি"
      },
      {
        id: 29,
        name: "লিচু ফুলের মধু",
        nameEn: "Lychee Honey",
        price: "৳700",
        unit: "প্রতি কেজি",
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
        harvestTime: "৮ দিন আগে",
        inStock: true,
        stockQuantity: 60,
        nutrition: {
          calories: 310,
          protein: 0.4,
          carbs: 84,
          fiber: 0.3,
          vitamins: ["B6", "C"],
          minerals: ["Calcium", "Iron"]
        },
        benefits: [
          "শক্তি বৃদ্ধি করে",
          "হজমে সহায়ক",
          "ত্বক উজ্জ্বল করে"
        ],
        recipes: ["মধু দিয়ে শরবত", "মধু দিয়ে স্মুদি", "মধু দিয়ে মিষ্টি", "মধু দিয়ে পানীয়"],
        badge: "খাঁটি"
      },
      {
        id: 30,
        name: "সরিষা ফুলের মধু",
        nameEn: "Mustard Honey",
        price: "৳600",
        unit: "প্রতি কেজি",
        image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&q=80",
        harvestTime: "১২ দিন আগে",
        inStock: true,
        stockQuantity: 70,
        nutrition: {
          calories: 300,
          protein: 0.3,
          carbs: 80,
          fiber: 0.2,
          vitamins: ["B6", "C"],
          minerals: ["Calcium", "Iron"]
        },
        benefits: [
          "শক্তি বৃদ্ধি করে",
          "রোগ প্রতিরোধ ক্ষমতা বাড়ায়",
          "হজমে সহায়ক"
        ],
        recipes: ["মধু দিয়ে চা", "মধু পানি", "মধু দিয়ে মিষ্টি", "মধু লেবু"],
        badge: "খাঁটি"
      },
      {
        id: 31,
        name: "কালোজিরা মধু",
        nameEn: "Black Seed Honey",
        price: "৳850",
        unit: "প্রতি কেজি",
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
        harvestTime: "৭ দিন আগে",
        inStock: true,
        stockQuantity: 45,
        nutrition: {
          calories: 320,
          protein: 0.5,
          carbs: 85,
          fiber: 0.3,
          vitamins: ["B6", "C"],
          minerals: ["Calcium", "Iron", "Zinc"]
        },
        benefits: [
          "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি",
          "শ্বাসকষ্ট কমায়",
          "শক্তি বৃদ্ধি করে"
        ],
        recipes: ["কালোজিরা মধু চা", "মধু পানি", "মধু দিয়ে দই", "মধু শরবত"],
        badge: "প্রিমিয়াম"
      }
    ],
    sweets: [
        {
          id: 32,
          name: "রসগোল্লা",
          nameEn: "Rasgulla",
          price: "৳450",
          unit: "প্রতি কেজি",
          image: "/rasgulla.webp",
          harvestTime: "আজ তৈরি",
        inStock: true,
        stockQuantity: 100,
        nutrition: {
          calories: 186,
          protein: 4,
          carbs: 30,
          fiber: 0,
          vitamins: ["A", "B12"],
          minerals: ["Calcium", "Phosphorus"]
        },
        benefits: [
          "শক্তি প্রদান করে",
          "হাড় মজবুত করে",
          "মন ভালো রাখে"
        ],
        recipes: ["রসগোল্লা সরাসরি", "রসমালাই", "রসগোল্লা দিয়ে ফালুদা", "রসগোল্লা আইসক্রিম"],
        badge: "ঐতিহ্যবাহী"
      },
        {
          id: 33,
          name: "সন্দেশ",
          nameEn: "Sandesh",
          price: "৳500",
          unit: "প্রতি কেজি",
          image: "/sandesh.jpg",
          harvestTime: "আজ তৈরি",
        inStock: true,
        stockQuantity: 80,
        nutrition: {
          calories: 250,
          protein: 6,
          carbs: 35,
          fiber: 0,
          vitamins: ["A", "B12"],
          minerals: ["Calcium", "Protein"]
        },
        benefits: [
          "প্রোটিনের ভালো উৎস",
          "হাড় শক্তিশালী করে",
          "পুষ্টি সরবরাহ করে"
        ],
        recipes: ["সন্দেশ সরাসরি", "সন্দেশ দিয়ে পায়েস", "চকলেট সন্দেশ", "ফল সন্দেশ"],
        badge: "ঐতিহ্যবাহী"
      },
        {
          id: 34,
          name: "চমচম",
          nameEn: "Chomchom",
          price: "৳480",
          unit: "প্রতি কেজি",
          image: "/chamcham.jpg",
          harvestTime: "আজ তৈরি",
        inStock: true,
        stockQuantity: 90,
        nutrition: {
          calories: 200,
          protein: 5,
          carbs: 32,
          fiber: 0,
          vitamins: ["A", "B12"],
          minerals: ["Calcium", "Phosphorus"]
        },
        benefits: [
          "শক্তি বৃদ্ধি করে",
          "হাড় মজবুত করে",
          "মন ভালো রাখে"
        ],
        recipes: ["চমচম সরাসরি", "চমচম দিয়ে ফালুদা", "চমচম মিল্কশেক", "চমচম আইসক্রিম"],
        badge: "ঐতিহ্যবাহী"
      },
        {
          id: 35,
          name: "কালোজাম",
          nameEn: "Kalojam",
          price: "৳420",
          unit: "প্রতি কেজি",
          image: "/kalojam.jpg",
          harvestTime: "আজ তৈরি",
        inStock: true,
        stockQuantity: 70,
        nutrition: {
          calories: 180,
          protein: 3.5,
          carbs: 28,
          fiber: 0,
          vitamins: ["A", "B12"],
          minerals: ["Calcium", "Iron"]
        },
        benefits: [
          "শক্তি প্রদান করে",
          "মন ভালো রাখে",
          "হাড় মজবুত করে"
        ],
        recipes: ["কালোজাম সরাসরি", "কালোজাম দিয়ে পায়েস", "কালোজাম ফালুদা", "কালোজাম মিষ্টি"],
        badge: "ঐতিহ্যবাহী"
      }
    ]
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const currentProducts = selectedCategory === "vegetables" || selectedCategory === "fruits" 
    ? products[selectedSeason][selectedCategory] 
    : otherProducts[selectedCategory] || [];

  const filteredProducts = currentProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.nameEn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSeasonChange = (seasonId) => {
    setSelectedSeason(seasonId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-green-50">
      
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-xl border-b border-forest/10 sticky top-0 z-50 shadow-sm"
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold text-forest" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                খামার থেকে টেবিল
              </h1>
              <p className="text-sm text-sage mt-1">Pure & Authentic Products</p>
            </motion.div>
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-3 bg-gradient-to-r from-forest to-sage text-cream rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <span>🛒</span>
                <span>কার্ট</span>
                {cartItems.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
                  >
                    {cartItems.length}
                  </motion.span>
                )}
              </span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-6 py-12">
        
        {/* Welcome Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold text-forest mb-4"
          >
            মৌসুমী তাজা পণ্য
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-sage"
          >
            প্রকৃতির সেরা উপহার, সরাসরি আপনার জন্য
          </motion.p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <motion.input
              type="text"
              placeholder="পণ্য খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full px-6 py-4 pl-14 rounded-3xl border-2 border-forest/20 focus:border-forest focus:outline-none text-lg transition-all duration-300 focus:shadow-lg focus:shadow-forest/20"
              style={{
                boxShadow: searchFocused ? '0 0 0 4px rgba(27, 48, 34, 0.1)' : 'none'
              }}
            />
            <motion.span 
              animate={{ 
                scale: searchFocused ? 1.1 : 1,
                rotate: searchFocused ? 10 : 0
              }}
              transition={{ duration: 0.3 }}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl"
            >
              🔍
            </motion.span>
            {searchFocused && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-forest to-sage origin-left"
              />
            )}
          </div>
        </motion.div>

        {/* Season Selector - Integrated Design */}
        {(selectedCategory === "vegetables" || selectedCategory === "fruits") && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-6 mb-16"
          >
            {seasons.map((season, index) => {
              const isActive = selectedSeason === season.id;
              return (
                <motion.button
                  key={season.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSeasonChange(season.id)}
                  className={`relative px-10 py-5 rounded-3xl font-bold text-lg transition-all duration-400 shadow-lg overflow-hidden ${
                    isActive
                      ? 'text-white shadow-2xl'
                      : 'bg-white text-forest hover:shadow-xl border-2 border-forest/20'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="seasonBackground"
                      className={`absolute inset-0 bg-gradient-to-r ${season.color}`}
                      initial={{ x: '-100%' }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}
                  <span className="relative flex items-center gap-3 z-10">
                    <span className="text-3xl">{season.icon}</span>
                    <span>{season.name}</span>
                    {isActive && (
                      <motion.span
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        ✓
                      </motion.span>
                    )}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* Category Tabs - Consistent Styling */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat, index) => {
            const isActive = selectedCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-8 py-4 rounded-3xl font-bold text-lg transition-all duration-300 shadow-lg overflow-hidden ${
                  isActive
                    ? 'text-white shadow-2xl'
                    : 'bg-white text-forest hover:shadow-xl border-2 border-forest/20'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="categoryBackground"
                    className={`absolute inset-0 bg-gradient-to-r ${cat.color}`}
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                )}
                <span className="relative flex items-center gap-3 z-10">
                  <span className="text-3xl">{cat.icon}</span>
                  <span>{cat.name}</span>
                  {isActive && (
                    <motion.span
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      ✓
                    </motion.span>
                  )}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Products Grid - Better Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                whileHover={{ y: -12, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-forest/10 hover:border-forest/30 group"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-sage/10 to-forest/5">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute top-4 left-4">
                    <motion.span
                      initial={{ y: -20, opacity: 0, scale: 1 }}
                      animate={{ 
                        y: 0, 
                        opacity: 1,
                        scale: product.badge === "তাজা" ? [1, 1.05, 1] : 1
                      }}
                      transition={{
                        y: { delay: index * 0.05 + 0.3, type: "spring" },
                        opacity: { delay: index * 0.05 + 0.3 },
                        scale: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-bold shadow-lg"
                    >
                      {product.badge}
                    </motion.span>
                  </div>
                  {product.inStock && (
                    <div className="absolute top-4 right-4">
                      <motion.span
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="px-3 py-1 bg-white/95 backdrop-blur-sm text-green-600 rounded-full text-xs font-bold shadow-lg"
                      >
                        স্টকে আছে
                      </motion.span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <motion.span
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.4 }}
                      className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white rounded-full text-xs font-semibold"
                    >
                      🕒 {product.harvestTime}
                    </motion.span>
                  </div>
                </div>

                {/* Product Info - Better Spacing */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-forest mb-1">{product.name}</h3>
                    <p className="text-sm text-sage">{product.nameEn}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-forest">{product.price}</p>
                      <p className="text-xs text-sage">{product.unit}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedItem(product)}
                      className="px-4 py-2 bg-gradient-to-r from-forest to-sage text-white rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      বিস্তারিত
                    </motion.button>
                  </div>

                  {/* Stock Info */}
                  <div className="p-3 bg-green-50 rounded-xl border border-green-100">
                    <p className="text-sm text-forest font-semibold">
                      📦 স্টক: {product.stockQuantity} কেজি
                    </p>
                  </div>

                  {/* Quick Nutrition Info */}
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-green-50 rounded-xl p-3 text-center"
                    >
                      <p className="text-xs text-sage mb-1">ক্যালোরি</p>
                      <p className="text-lg font-bold text-forest">{product.nutrition.calories}</p>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-50 rounded-xl p-3 text-center"
                    >
                      <p className="text-xs text-sage mb-1">ফাইবার</p>
                      <p className="text-lg font-bold text-forest">{product.nutrition.fiber}g</p>
                    </motion.div>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => addToCart(product)}
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>🛒</span>
                    <span>কার্টে যোগ করুন</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-4xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
                >
                  <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="relative h-80 overflow-hidden rounded-t-4xl">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-bold shadow-lg">
                      {selectedItem.badge}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-forest mb-2">{selectedItem.name}</h2>
                    <p className="text-xl text-sage">{selectedItem.nameEn}</p>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl">
                    <div>
                      <p className="text-5xl font-bold text-forest">{selectedItem.price}</p>
                      <p className="text-sm text-sage mt-1">{selectedItem.unit}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-sage">স্টক পরিমাণ</p>
                      <p className="text-2xl font-bold text-forest">{selectedItem.stockQuantity} কেজি</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-forest mb-4">পুষ্টি তথ্য</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-orange-50 rounded-2xl p-4 text-center">
                        <p className="text-sm text-sage mb-1">ক্যালোরি</p>
                        <p className="text-2xl font-bold text-forest">{selectedItem.nutrition.calories}</p>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-4 text-center">
                        <p className="text-sm text-sage mb-1">প্রোটিন</p>
                        <p className="text-2xl font-bold text-forest">{selectedItem.nutrition.protein}g</p>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-4 text-center">
                        <p className="text-sm text-sage mb-1">কার্বস</p>
                        <p className="text-2xl font-bold text-forest">{selectedItem.nutrition.carbs}g</p>
                      </div>
                      <div className="bg-purple-50 rounded-2xl p-4 text-center">
                        <p className="text-sm text-sage mb-1">ফাইবার</p>
                        <p className="text-2xl font-bold text-forest">{selectedItem.nutrition.fiber}g</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-forest mb-3">ভিটামিন</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.nutrition.vitamins.map((vitamin, index) => (
                        <span key={index} className="px-4 py-2 bg-yellow-100 text-forest rounded-full font-semibold">
                          ভিটামিন {vitamin}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-forest mb-3">খনিজ</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.nutrition.minerals.map((mineral, index) => (
                        <span key={index} className="px-4 py-2 bg-blue-100 text-forest rounded-full font-semibold">
                          {mineral}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-forest mb-3">স্বাস্থ্য উপকারিতা</h3>
                    <div className="space-y-3">
                      {selectedItem.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-2xl">
                          <span className="text-2xl">✓</span>
                          <p className="text-forest font-medium">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-forest mb-3">রেসিপি আইডিয়া</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedItem.recipes.map((recipe, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedRecipe(recipe);
                            setSelectedItem(null);
                          }}
                          className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl text-forest font-semibold hover:shadow-lg transition-all text-left"
                        >
                          🍳 {recipe}
                        </button>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      addToCart(selectedItem);
                      setSelectedItem(null);
                    }}
                    className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <span>🛒</span>
                    <span>কার্টে যোগ করুন</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recipe Detail Modal */}
      <AnimatePresence>
        {selectedRecipe && recipeDetails[selectedRecipe] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedRecipe(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-4xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
                >
                  <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-forest mb-4">{recipeDetails[selectedRecipe].name}</h2>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-blue-50 rounded-2xl p-4 text-center">
                        <p className="text-sm text-sage mb-1">প্রস্তুতি</p>
                        <p className="text-lg font-bold text-forest">{recipeDetails[selectedRecipe].prepTime}</p>
                      </div>
                      <div className="bg-orange-50 rounded-2xl p-4 text-center">
                        <p className="text-sm text-sage mb-1">রান্না</p>
                        <p className="text-lg font-bold text-forest">{recipeDetails[selectedRecipe].cookTime}</p>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-4 text-center">
                        <p className="text-sm text-sage mb-1">পরিবেশন</p>
                        <p className="text-lg font-bold text-forest">{recipeDetails[selectedRecipe].servings}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-forest mb-4">উপকরণ</h3>
                    <div className="space-y-2">
                      {recipeDetails[selectedRecipe].ingredients.map((ingredient, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                          <span className="text-green-600 font-bold">•</span>
                          <p className="text-forest">{ingredient}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-forest mb-4">রান্নার পদ্ধতি</h3>
                    <div className="space-y-3">
                      {recipeDetails[selectedRecipe].instructions.map((instruction, index) => (
                        <div key={index} className="flex gap-4 p-4 bg-orange-50 rounded-xl">
                          <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </span>
                          <p className="text-forest">{instruction}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
