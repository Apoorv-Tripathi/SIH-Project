// FAQ data for Jharkhand Travel Chatbot
export const faqData = [
  // Greetings and general
  {
    keywords: ['hello', 'hi', 'hey', 'start', 'help'],
    response: "Hello! 👋 I'm your Jharkhand Travel Assistant. I can help you with information about destinations, culture, guides, bookings, and travel tips. What would you like to know?",
    category: "greeting"
  },

  // Destinations
  {
    keywords: ['destination', 'places', 'visit', 'see', 'attractions', 'tourist spots'],
    response: "🏞️ Jharkhand has amazing destinations! Popular places include:\n\n• **Netarhat** - Queen of Chotanagpur (hill station)\n• **Hundru Falls** - 98-meter spectacular waterfall\n• **Betla National Park** - Tiger reserve & wildlife\n• **Deoghar** - Religious pilgrimage site\n• **Patratu Valley** - Scenic valley with boating\n\nWhich type of destination interests you most?",
    category: "destinations"
  },

  {
    keywords: ['netarhat', 'queen of chotanagpur', 'hill station'],
    response: "🏔️ **Netarhat** is the 'Queen of Chotanagpur'!\n\n• **Best for:** Sunrise/sunset views, cool climate\n• **When to visit:** October to March\n• **Activities:** Photography, nature walks, sightseeing\n• **Distance:** 156 km from Ranchi\n• **Stay:** Forest rest houses and hotels available\n\nWould you like guide recommendations for Netarhat?",
    category: "destinations"
  },

  {
    keywords: ['hundru falls', 'waterfall', 'falls'],
    response: "💦 **Hundru Falls** - Spectacular 98-meter waterfall!\n\n• **Height:** 98 meters (one of tallest in Jharkhand)\n• **Best time:** July to February (post-monsoon)\n• **Activities:** Photography, trekking, swimming\n• **Distance:** 45 km from Ranchi\n• **Tips:** Visit early morning for best experience\n\nNeed information about reaching Hundru Falls?",
    category: "destinations"
  },

  {
    keywords: ['betla', 'national park', 'tiger', 'wildlife', 'safari'],
    response: "🐅 **Betla National Park** - Amazing wildlife sanctuary!\n\n• **Famous for:** Tigers, elephants, deer\n• **Safari timings:** 6 AM - 10 AM, 3 PM - 6 PM\n• **Entry fee:** ₹50 per person + vehicle charges\n• **Best time:** November to April\n• **Includes:** Palamau Fort ruins inside park\n\nWant to book a wildlife safari?",
    category: "destinations"
  },

  // Culture and tribes
  {
    keywords: ['culture', 'tribal', 'tribes', 'tradition', 'festival', 'art'],
    response: "🎭 **Jharkhand's Rich Culture:**\n\n**Major Tribes:**\n• Santhal, Munda, Oraon, Ho\n\n**Festivals:**\n• Sarhul (Spring festival)\n• Karma (Harvest festival) \n• Sohrai (Cattle festival)\n\n**Art Forms:**\n• Sohrai paintings\n• Dokra metal craft\n• Bamboo handicrafts\n\nWhich cultural aspect interests you?",
    category: "culture"
  },

  {
    keywords: ['sohrai', 'painting', 'wall art', 'art'],
    response: "🎨 **Sohrai Paintings** - Traditional wall art!\n\n• **Made during:** Sohrai harvest festival\n• **Materials:** Natural pigments, mud, cow dung\n• **Themes:** Animals, nature, geometric patterns\n• **Colors:** Red ochre, white kaolin, black\n• **Where to see:** Hazaribagh district villages\n\nInterested in art workshops or cultural tours?",
    category: "culture"
  },

  // Guides and booking
  {
    keywords: ['guide', 'local guide', 'hire', 'book', 'tour guide'],
    response: "👨‍🏫 **Local Guides Available:**\n\n• **Verified guides:** 100+ blockchain-verified\n• **Specialties:** Culture, wildlife, adventure, heritage\n• **Languages:** Hindi, English, local tribal languages\n• **Rates:** ₹900-1800 per day\n• **Booking:** Through our platform with reviews\n\nWhich type of guide do you need?",
    category: "guides"
  },

  {
    keywords: ['blockchain', 'verified', 'trust', 'authentic'],
    response: "🔐 **Blockchain Verification:**\n\n• **What it means:** Identity & credentials verified on blockchain\n• **Benefits:** 100% authentic guides, secure reviews\n• **Trust score:** All verified guides have ratings\n• **Safety:** No fake profiles or fraudulent guides\n\nOur verified guides ensure authentic experiences!",
    category: "guides"
  },

  // Accommodation and stays
  {
    keywords: ['stay', 'hotel', 'accommodation', 'homestay', 'where to stay'],
    response: "🏠 **Stay Options in Jharkhand:**\n\n**Homestays:**\n• Tribal village homestays (₹1500-2500/night)\n• Cultural immersion experiences\n• Traditional meals included\n\n**Hotels:**\n• Budget: ₹800-1500/night\n• Mid-range: ₹2000-4000/night\n• Luxury resorts available\n\nLooking for specific location recommendations?",
    category: "accommodation"
  },

  {
    keywords: ['homestay', 'village stay', 'tribal stay'],
    response: "🏡 **Tribal Homestays:**\n\n• **Santhal Village Homestay** - Dumka (₹1500/night)\n• **Munda Heritage Home** - Khunti (₹2000/night)\n• **Ho Tribal Eco-Stay** - Chaibasa (₹1800/night)\n• **Oraon Forest Lodge** - Gumla (₹2500/night)\n\n**Includes:** Traditional meals, cultural activities, nature walks\n\nReady to book a homestay experience?",
    category: "accommodation"
  },

  // Transportation and travel
  {
    keywords: ['how to reach', 'transport', 'bus', 'train', 'flight', 'travel'],
    response: "🚗 **How to Reach Jharkhand:**\n\n**By Air:** Ranchi Airport (Birsa Munda Airport)\n**By Train:** Ranchi, Dhanbad, Jamshedpur stations\n**By Road:** Well-connected by NH-33, NH-23\n\n**Local Transport:**\n• State buses, private taxis\n• Car rentals available\n• Local guides can arrange transport\n\nNeed specific route information?",
    category: "transport"
  },

  // Best time to visit
  {
    keywords: ['when to visit', 'best time', 'weather', 'season', 'climate'],
    response: "🌤️ **Best Time to Visit Jharkhand:**\n\n**October to March (Recommended):**\n• Pleasant weather (15°C - 25°C)\n• Perfect for sightseeing and outdoor activities\n• Festival season\n\n**April to June:** Hot (avoid if possible)\n**July to September:** Monsoon (waterfalls at best)\n\nPlanning a specific month visit?",
    category: "travel-info"
  },

  // Food and cuisine
  {
    keywords: ['food', 'cuisine', 'eat', 'dishes', 'local food'],
    response: "🍛 **Jharkhand Cuisine:**\n\n**Must-try Dishes:**\n• **Litti Chokha** - Traditional baked bread\n• **Handia** - Rice beer (tribal beverage)\n• **Bamboo Shoot Curry** - Local delicacy\n• **Rugra** - Mushroom curry\n• **Thekua** - Sweet snack\n\n**Tribal Specials:** Organic vegetables, forest produce\n\nInterested in food tours or cooking experiences?",
    category: "food"
  },

  // Festivals and events
  {
    keywords: ['festival', 'events', 'sarhul', 'karma', 'celebration'],
    response: "🎉 **Major Festivals:**\n\n• **Sarhul** (March-April) - Spring festival, nature worship\n• **Karma** (August-Sep) - Harvest celebration\n• **Sohrai** (Oct-Nov) - Cattle and harvest festival\n• **Chhau Dance Festival** - Traditional mask dance\n\n**Cultural Events:** Art workshops, tribal fairs, music festivals\n\nWant to participate in any festivals?",
    category: "festivals"
  },

  // Safety and tips
  {
    keywords: ['safe', 'safety', 'tips', 'precautions', 'advice'],
    response: "🛡️ **Travel Safety Tips:**\n\n• **Use verified guides** from our platform\n• **Respect tribal customs** and photography rules\n• **Carry basic medicines** and first aid\n• **Stay hydrated** especially during treks\n• **Inform someone** about your travel plans\n• **Weather check** before outdoor activities\n\nOur blockchain-verified guides ensure safe experiences!",
    category: "safety"
  },

  // Pricing and costs
  {
    keywords: ['cost', 'price', 'budget', 'expensive', 'cheap', 'money'],
    response: "💰 **Approximate Costs:**\n\n**Accommodation:**\n• Budget: ₹800-1500/night\n• Homestays: ₹1500-2500/night\n• Mid-range: ₹2000-4000/night\n\n**Guides:** ₹900-1800/day\n**Food:** ₹200-500/day\n**Transport:** ₹15-25/km\n\n**3-day trip:** ₹8000-15000 per person\n\nNeed a detailed cost breakdown?",
    category: "pricing"
  },

  // Activities and adventure
  {
    keywords: ['activities', 'adventure', 'trekking', 'hiking', 'sports'],
    response: "🏃‍♂️ **Adventure Activities:**\n\n**Trekking:** Netarhat hills, forest trails\n**Water Sports:** Boating at Patratu Valley\n**Wildlife Safari:** Betla National Park\n**Rock Climbing:** Tagore Hill, Ranchi\n**Photography:** Waterfalls, tribal villages\n**Cultural Tours:** Village visits, art workshops\n\nWhich adventure activity excites you?",
    category: "activities"
  },

  // Default responses for unmatched queries
  {
    keywords: ['default'],
    response: "I'd love to help you with that! 🤔 \n\nI can provide information about:\n• 🏞️ Destinations and attractions\n• 🎭 Culture and tribal heritage\n• 👨‍🏫 Local guides and tours\n• 🏠 Accommodation options\n• 🚗 Transportation and travel tips\n• 🍛 Local cuisine and food\n• 🎉 Festivals and events\n\nWhat specific aspect of Jharkhand tourism interests you?",
    category: "general"
  }
];

// Quick reply suggestions
export const quickReplies = [
  "Popular destinations",
  "Local guides",
  "Tribal culture",
  "Best time to visit",
  "Homestays",
  "Adventure activities",
  "Festival dates",
  "Food recommendations"
];

// Chat flow for specific scenarios
export const chatFlows = {
  planning: [
    "Great! Let's plan your Jharkhand trip. How many days do you have?",
    "What interests you most? (Nature, Culture, Adventure, or Mix of all)",
    "Perfect! Based on your preferences, I'd recommend..."
  ],
  
  booking: [
    "I'll help you with bookings! What would you like to book?",
    "Let me connect you with our verified partners...",
    "Your booking details have been noted. Our team will contact you shortly!"
  ]
};

// Function to find matching FAQ
export const findMatchingFAQ = (userInput) => {
  const input = userInput.toLowerCase().trim();
  
  // Find the best matching FAQ based on keywords
  for (const faq of faqData) {
    for (const keyword of faq.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        return faq;
      }
    }
  }
  
  // Return default response if no match found
  return faqData.find(faq => faq.keywords.includes('default'));
};