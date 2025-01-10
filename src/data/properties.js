export const properties = [
  // Rooms
  {
    id: 1,
    type: 'rent',
    name: "Cozy Single Room in Kadıköy",
    price: 4500,
    roomType: 'individual',
    preference: 'male',
    location: "Kadıköy, Istanbul",
    coordinates: { lat: 40.9918, lng: 29.0299 },
    googleMapsUrl: "https://www.google.com/maps?q=40.9918,29.0299",
    description: "A beautiful and cozy single room in the vibrant district of Kadıköy. Perfect for students or young professionals. The room comes fully furnished with a comfortable bed, study desk, and wardrobe. Easy access to public transportation and walking distance to Kadıköy's famous markets.",
    amenities: ["Furnished", "WiFi", "Air Conditioning", "Study Desk", "Shared Kitchen", "Laundry"],
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    ]
  },
  {
    id: 2,
    type: 'rent',
    name: "Shared Student Room in Beşiktaş",
    price: 3500,
    roomType: 'shared',
    preference: 'female',
    location: "Beşiktaş, Istanbul",
    coordinates: { lat: 41.0422, lng: 29.0083 },
    googleMapsUrl: "https://www.google.com/maps?q=41.0422,29.0083",
    description: "Comfortable shared room in a student-friendly neighborhood in Beşiktaş. The room includes two beds, study areas, and shared closet space. Perfect for students looking for an affordable living option near universities.",
    amenities: ["Furnished", "WiFi", "Study Area", "Shared Kitchen", "Laundry", "Heating"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    ]
  },
  {
    id: 3,
    type: 'rent',
    name: "Premium Single Room in Üsküdar",
    price: 5500,
    roomType: 'individual',
    preference: 'male',
    location: "Üsküdar, Istanbul",
    coordinates: { lat: 41.0234, lng: 29.0152 },
    googleMapsUrl: "https://www.google.com/maps?q=41.0234,29.0152",
    description: "Luxurious single room in Üsküdar with private bathroom. Modern furnishings and plenty of natural light. Located in a quiet residential area with easy access to public transportation and the Bosphorus.",
    amenities: ["Private Bathroom", "Furnished", "WiFi", "Air Conditioning", "Study Area", "Balcony"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
    ]
  },
  // Apartments
  {
    id: 4,
    type: 'buy',
    name: "Modern 1+1 in Beylikdüzü",
    price: 1200000,
    apartmentArea: '1 + 1',
    location: "Beylikdüzü, Istanbul",
    coordinates: { lat: 41.0029, lng: 28.8072 },
    googleMapsUrl: "https://www.google.com/maps?q=41.0029,28.8072",
    description: "Contemporary 1+1 apartment in Beylikdüzü's modern district. Features an open-plan living area, modern kitchen, and a spacious bedroom. Perfect for young professionals or small families.",
    amenities: ["Modern Kitchen", "Built-in Wardrobes", "Central Heating", "Air Conditioning", "Elevator", "Parking"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    ]
  },
  {
    id: 5,
    type: 'buy',
    name: "Spacious 2+1 in Bahçeşehir",
    price: 1800000,
    apartmentArea: '2 + 1',
    location: "Bahçeşehir, Istanbul",
    coordinates: { lat: 41.0683, lng: 28.6764 },
    googleMapsUrl: "https://www.google.com/maps?q=41.0683,28.6764",
    description: "Elegant 2+1 apartment in Bahçeşehir's prime location. Features two large bedrooms, a modern kitchen, spacious living room, and a balcony with city views. Close to parks and shopping areas.",
    amenities: ["Balcony", "Modern Kitchen", "Built-in Wardrobes", "Central Heating", "Underground Parking", "Storage Room"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    ]
  },
  {
    id: 6,
    type: 'buy',
    name: "Family 3+1 in Ataşehir",
    price: 2200000,
    apartmentArea: '3 + 1',
    location: "Ataşehir, Istanbul",
    coordinates: { lat: 40.9923, lng: 29.1244 },
    googleMapsUrl: "https://www.google.com/maps?q=40.9923,29.1244",
    description: "Luxurious 3+1 family apartment in Ataşehir's exclusive neighborhood. Features three spacious bedrooms, a large living room, modern kitchen, and two bathrooms. Includes a private terrace with city views.",
    amenities: ["Terrace", "Modern Kitchen", "2 Bathrooms", "Central Heating", "Air Conditioning", "Private Parking", "Storage", "Security System"],
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    ]
  }
]

export const findPropertyById = (id) => {
  return properties.find(property => property.id === Number(id))
} 