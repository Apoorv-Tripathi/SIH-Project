// Culture and heritage data for Jharkhand
export const tribesData = [
  {
    id: 1,
    name: "Santhal",
    population: "2.8 million",
    language: "Santhali",
    region: "Santhal Pargana",
    image: "https://images.unsplash.com/photo-1594736797933-d0a3ba9b2d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "The largest tribal community in Jharkhand, known for their rich cultural heritage and traditional music.",
    traditions: [
      "Sohrai Festival - Harvest celebration",
      "Baha Festival - Spring celebration", 
      "Traditional Santhal dance",
      "Bamboo and wood crafts"
    ],
    artForms: ["Traditional paintings", "Folk music", "Dance forms", "Handicrafts"],
    festivals: ["Sohrai", "Baha", "Karam", "Jatra"],
    occupation: ["Agriculture", "Animal husbandry", "Handicrafts", "Forest products"]
  },
  {
    id: 2,
    name: "Munda",
    population: "1.2 million",
    language: "Mundari",
    region: "Southern Jharkhand",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Famous for their freedom fighter Birsa Munda, they have a rich tradition of governance and agriculture.",
    traditions: [
      "Sarhul Festival - Nature worship",
      "Traditional village councils",
      "Sacred groves protection",
      "Traditional farming methods"
    ],
    artForms: ["Dokra metal casting", "Traditional songs", "Ritual dances", "Wood carving"],
    festivals: ["Sarhul", "Karma", "Jani Shikar"],
    occupation: ["Agriculture", "Iron smelting", "Traditional medicine", "Cattle rearing"]
  },
  {
    id: 3,
    name: "Oraon (Kurukh)",
    population: "1.8 million",
    language: "Kurukh",
    region: "Central and Western Jharkhand",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Known for their vibrant festivals and traditional agricultural practices, they are skilled in various art forms.",
    traditions: [
      "Karma Festival - Worship of Karma tree",
      "Traditional weaving",
      "Community fishing",
      "Ancestral worship"
    ],
    artForms: ["Sohrai wall paintings", "Traditional textiles", "Basket weaving", "Folk songs"],
    festivals: ["Karma", "Sarhul", "Jani Shikar", "Phagu"],
    occupation: ["Agriculture", "Weaving", "Fishing", "Seasonal migration"]
  },
  {
    id: 4,
    name: "Ho",
    population: "0.7 million",
    language: "Ho",
    region: "Singhbhum districts",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Known for their expertise in iron and metal work, they have contributed significantly to Jharkhand's mining heritage.",
    traditions: [
      "Maghe Festival - New year celebration",
      "Traditional iron smelting",
      "Sacred forest conservation",
      "Clan-based social organization"
    ],
    artForms: ["Metal crafts", "Traditional jewelry", "Folk dances", "Oral literature"],
    festivals: ["Maghe", "Baha", "Hero", "Jom Nawa"],
    occupation: ["Mining", "Metal work", "Agriculture", "Forest gathering"]
  }
];

export const artFormsData = [
  {
    id: 1,
    name: "Sohrai Painting",
    tribe: "Multiple Tribes",
    type: "Wall Art",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Traditional wall paintings made during the Sohrai harvest festival using natural colors and mud.",
    materials: ["Natural pigments", "Mud", "Cow dung", "Rice paste"],
    significance: "Celebrates fertility, prosperity, and the bond between humans and animals",
    regions: ["Hazaribagh", "Ranchi", "Ramgarh"],
    colors: ["Red ochre", "White kaolin", "Black manganese", "Yellow ochre"],
    patterns: ["Geometric designs", "Animal figures", "Nature motifs", "Sacred symbols"]
  },
  {
    id: 2,
    name: "Kohvar Painting",
    tribe: "Multiple Tribes",
    type: "Ritualistic Art",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Marriage ritual art painted in the nuptial chamber, symbolizing fertility and prosperity.",
    materials: ["Natural earth pigments", "Bamboo brushes", "Fingers", "Clay base"],
    significance: "Ensures marital happiness, fertility, and protection of the newlyweds",
    regions: ["Hazaribagh", "Chatra", "Koderma"],
    colors: ["Red", "Black", "White", "Yellow"],
    patterns: ["Bamboo motifs", "Lotus designs", "Geometric patterns", "Fertility symbols"]
  },
  {
    id: 3,
    name: "Dokra Art",
    tribe: "Munda, Ho",
    type: "Metal Craft",
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Ancient lost-wax casting technique used to create beautiful brass and bronze artifacts.",
    materials: ["Brass", "Bronze", "Wax", "Clay"],
    significance: "Represents the ancient metallurgical skills and artistic traditions",
    regions: ["Khunti", "Ranchi", "West Singhbhum"],
    colors: ["Golden brass", "Bronze patina", "Natural metal finish"],
    patterns: ["Animal figures", "Human forms", "Decorative vessels", "Religious symbols"]
  },
  {
    id: 4,
    name: "Bamboo Craft",
    tribe: "Santhal, Oraon",
    type: "Utility Craft",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Intricate bamboo products ranging from daily utilities to decorative items.",
    materials: ["Bamboo", "Natural dyes", "Cane", "Grass"],
    significance: "Sustainable livelihood and eco-friendly traditional practices",
    regions: ["Throughout Jharkhand", "Dumka", "Godda"],
    colors: ["Natural bamboo", "Dyed variants", "Woven patterns"],
    patterns: ["Woven designs", "Geometric patterns", "Functional shapes", "Decorative motifs"]
  }
];

export const festivalsData = [
  {
    id: 1,
    name: "Sarhul",
    season: "Spring (March-April)",
    tribes: ["Munda", "Oraon", "Ho"],
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "The most important festival celebrating the worship of Sal trees and nature.",
    significance: "Marks the beginning of the new year and celebrates the bond between humans and nature",
    rituals: [
      "Worship of Sal trees",
      "Traditional dance and music",
      "Community feasting",
      "Offering of flowers and rice beer"
    ],
    duration: "3 days",
    specialFood: ["Handia (rice beer)", "Traditional sweets", "Seasonal fruits"],
    activities: ["Folk dances", "Traditional games", "Community gathering", "Cultural programs"]
  },
  {
    id: 2,
    name: "Karma",
    season: "Monsoon (August-September)",
    tribes: ["Oraon", "Munda", "Ho"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Festival dedicated to the Karma tree, celebrating fertility and prosperity.",
    significance: "Seeks blessings for good harvest, prosperity, and well-being of family",
    rituals: [
      "Karma tree worship",
      "Karma dance around the tree",
      "Fasting by unmarried girls",
      "Community prayers"
    ],
    duration: "1 day",
    specialFood: ["Thekua", "Rice preparations", "Seasonal vegetables"],
    activities: ["Karma dance", "Folk songs", "Community celebration", "Cultural exchange"]
  },
  {
    id: 3,
    name: "Sohrai",
    season: "Post-harvest (October-November)",
    tribes: ["Santhal", "Munda", "Ho"],
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Harvest festival celebrating cattle and agricultural prosperity.",
    significance: "Honors cattle for their contribution to agriculture and celebrates good harvest",
    rituals: [
      "Cattle decoration and worship",
      "Traditional wall paintings",
      "Community dancing",
      "Sharing of harvest"
    ],
    duration: "5 days",
    specialFood: ["New rice", "Traditional cakes", "Milk products"],
    activities: ["Wall painting", "Cattle decoration", "Folk performances", "Community feasts"]
  }
];

export const heritageData = [
  {
    id: 1,
    name: "Birsa Munda Movement",
    period: "1895-1900",
    type: "Freedom Struggle",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "The tribal freedom movement led by Birsa Munda against British colonial rule.",
    significance: "First major tribal uprising against British colonialism in India",
    locations: ["Khunti", "Ranchi", "Chaibasa"],
    impact: "Led to recognition of tribal rights and land reforms",
    legacy: "Birsa Munda is remembered as 'Bhagwan' (God) by tribal communities"
  },
  {
    id: 2,
    name: "Ancient Rock Paintings",
    period: "Prehistoric times",
    type: "Archaeological Heritage",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Ancient rock art found in caves and rock shelters across Jharkhand.",
    significance: "Evidence of prehistoric human habitation and artistic expression",
    locations: ["Hazaribagh", "Chaibasa", "Ranchi"],
    impact: "Provides insights into ancient tribal life and beliefs",
    legacy: "UNESCO recognition and preservation efforts ongoing"
  }
];