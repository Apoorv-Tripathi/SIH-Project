// Mock marketplace data for Jharkhand
export const marketplaceData = {
  handicrafts: [
    {
      id: 1,
      title: "Traditional Dokra Art Elephant",
      category: "handicrafts",
      subcategory: "Metal Craft",
      price: 2500,
      originalPrice: 3200,
      seller: "Ramesh Kumar",
      location: "Khunti, Jharkhand",
      rating: 4.8,
      reviews: 34,
      description: "Authentic Dokra art piece crafted using traditional lost-wax casting technique",
      features: ["Handmade", "100% Brass", "Traditional Design", "Unique Piece"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tribe: "Munda",
      inStock: true,
      craftingTime: "15 days"
    },
    {
      id: 2,
      title: "Bamboo Basket Set (3 pieces)",
      category: "handicrafts",
      subcategory: "Bamboo Craft",
      price: 1200,
      originalPrice: 1500,
      seller: "Sunita Devi",
      location: "Dumka, Jharkhand",
      rating: 4.6,
      reviews: 28,
      description: "Set of 3 handwoven bamboo baskets perfect for storage and home decor",
      features: ["Eco-friendly", "Durable", "Multi-purpose", "Natural Finish"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tribe: "Santhal",
      inStock: true,
      craftingTime: "7 days"
    },
    {
      id: 3,
      title: "Sohrai Wall Art Painting",
      category: "handicrafts",
      subcategory: "Traditional Art",
      price: 3500,
      originalPrice: 4000,
      seller: "Maya Munda",
      location: "Hazaribagh, Jharkhand",
      rating: 4.9,
      reviews: 42,
      description: "Traditional Sohrai art depicting harvest festival themes on canvas",
      features: ["Natural Pigments", "Canvas Art", "Festival Theme", "Authentic Design"],
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tribe: "Kurukh",
      inStock: true,
      craftingTime: "10 days"
    }
  ],

  homestays: [
    {
      id: 4,
      title: "Santhal Village Homestay",
      category: "homestays",
      subcategory: "Village Stay",
      price: 1500,
      priceUnit: "per night",
      host: "Mohan Hansda",
      location: "Dumka, Jharkhand",
      rating: 4.6,
      reviews: 89,
      description: "Experience authentic Santhal tribal life in a traditional mud house",
      amenities: ["Traditional Meals", "Cultural Activities", "Nature Walks", "Bonfire Nights"],
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c0a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tribe: "Santhal",
      maxGuests: 4,
      availability: "Available"
    },
    {
      id: 5,
      title: "Munda Heritage Home",
      category: "homestays",
      subcategory: "Heritage Stay",
      price: 2000,
      priceUnit: "per night",
      host: "Sushila Munda",
      location: "Khunti, Jharkhand",
      rating: 4.8,
      reviews: 67,
      description: "Stay in the birthplace region of Birsa Munda with cultural immersion",
      amenities: ["Organic Meals", "Cultural Stories", "Craft Workshops", "Village Tours"],
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tribe: "Munda",
      maxGuests: 6,
      availability: "Available"
    }
  ],

  events: [
    {
      id: 6,
      title: "Sarhul Spring Festival",
      category: "events",
      subcategory: "Religious Festival",
      price: 500,
      priceUnit: "per person",
      organizer: "Jharkhand Cultural Society",
      location: "Ranchi, Jharkhand",
      rating: 4.9,
      reviews: 156,
      description: "Celebrate the Sarhul festival with traditional dance, music, and rituals",
      highlights: ["Traditional Dance", "Sacred Rituals", "Folk Music", "Community Feast"],
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 15-17, 2024",
      duration: "3 days",
      tribe: "Multiple Tribes",
      ticketsLeft: 45
    },
    {
      id: 7,
      title: "Chhau Dance Workshop",
      category: "events",
      subcategory: "Cultural Workshop",
      price: 800,
      priceUnit: "per person",
      organizer: "Saraikela Cultural Academy",
      location: "Saraikela, Jharkhand",
      rating: 4.8,
      reviews: 92,
      description: "Learn the traditional Chhau dance with mask making workshop",
      highlights: ["Dance Training", "Mask Making", "Cultural History", "Performance"],
      image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 5-7, 2024",
      duration: "3 days",
      tribe: "Multiple Tribes",
      ticketsLeft: 20
    }
  ]
};

// Filter categories for dropdown
export const filterCategories = [
  { value: "all", label: "All Categories" },
  { value: "handicrafts", label: "Tribal Handicrafts" },
  { value: "homestays", label: "Village Homestays" },
  { value: "events", label: "Cultural Events" }
];

// Helper function to get all items or filtered items
export const getMarketplaceItems = (category = "all") => {
  if (category === "all") {
    return [
      ...marketplaceData.handicrafts,
      ...marketplaceData.homestays,
      ...marketplaceData.events
    ];
  }
  return marketplaceData[category] || [];
};