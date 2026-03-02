const resList = [
  {
    restaurantID: 1,
    restaurantName: "1135 AD",
    address: "Jaipur, Amber Fort, Rajasthan",
    type: "Rajasthani",
    parkingLot: true,
    image: "https://i.pinimg.com/736x/d0/8a/b7/d08ab759572ca8db140486a0a7a8b4aa.jpg",
    rating: 4.6,
    deliveryTime: "40-50 mins"
  },
  {
    restaurantID: 2,
    restaurantName: "6 Ballygunge Place",
    address: "Kolkata, Ballygunge, West Bengal",
    type: "Bengali Cuisine",
    parkingLot: true,
    image: "https://www.awesomecuisine.com/wp-content/uploads/2024/02/Bengali-Cuisine.jpg",
    rating: 4.5,
    deliveryTime: "30-40 mins"
  },
  {
    restaurantID: 3,
    restaurantName: "Agashiye",
    address: "Ahmedabad, House of MG, Gujarat",
    type: "Gujarati",
    parkingLot: true,
    image: "https://static.toiimg.com/photo/61915645.cms",
    rating: 4.7,
    deliveryTime: "35-45 mins"
  },
  {
    restaurantID: 4,
    restaurantName: "Alhamdulillah Hotel",
    address: "Hyderabad, Sultan Shahi, Telangana",
    type: "Mughlai",
    parkingLot: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtv8fEWDjaQ-At_Ajwx6RNu8x8ed4UnMp4A&s",
    rating: 4.1,
    deliveryTime: "20-30 mins"
  },
  {
    restaurantID: 5,
    restaurantName: "Bawarchi",
    address: "Hyderabad, RTC Cross Road, Telangana",
    type: "Biryani",
    parkingLot: true,
    image: "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg",
    rating: 4.4,
    deliveryTime: "25-35 mins"
  },
  {
    restaurantID: 6,
    restaurantName: "Benjarong",
    address: "Chennai, Alwarpet, Tamil Nadu",
    type: "Thai",
    parkingLot: true,
    image: "https://www.thespruceeats.com/thmb/D9hctWPH31A5oiQ34J4Hknc6x0Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg",
    rating: 4.5,
    deliveryTime: "40-50 mins"
  },
  {
    restaurantID: 7,
    restaurantName: "Britannia & Co.",
    address: "Mumbai, Ballard, Maharashtra",
    type: "Parsi Cuisine",
    parkingLot: false,
    image: "https://images.indianexpress.com/2018/08/bhonufeat.jpg",
    rating: 4.6,
    deliveryTime: "35-45 mins"
  },
  {
    restaurantID: 8,
    restaurantName: "Bukhara",
    address: "Delhi, Chanakyapuri, Delhi",
    type: "North Indian",
    parkingLot: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpcSzZN17HIvaKESF_4vB2qtScpkEr-bOFZA&s",
    rating: 4.8,
    deliveryTime: "45-55 mins"
  },
  {
    restaurantID: 9,
    restaurantName: "Dakshin",
    address: "Chennai, ITC Grand Chola, Tamil Nadu",
    type: "South Indian",
    parkingLot: true,
    image: "https://d34vm3j4h7f97z.cloudfront.net/original/4X/2/f/4/2f4280545f6df361c42ba1d0bb0dde37a1868876.jpeg",
    rating: 4.6,
    deliveryTime: "35-45 mins"
  },
  {
    restaurantID: 10,
    restaurantName: "Gopi Dining Hall",
    address: "Ahmedabad, Ashram Road, Gujarat",
    type: "Gujarati Thali",
    parkingLot: false,
    image: "https://4.imimg.com/data4/AP/VG/ANDROID-37526939/product-500x500.jpeg",
    rating: 4.3,
    deliveryTime: "25-35 mins"
  },
  {
    restaurantID: 11,
    restaurantName: "Grand Hotel",
    address: "Hyderabad, Abids, Telangana",
    type: "Multi-cuisine",
    parkingLot: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiH0uu8AJA8AzmPBpjgcEz4a8B639HbCQZxQ&s",
    rating: 4.2,
    deliveryTime: "30-40 mins"
  },
  {
    restaurantID: 12,
    restaurantName: "Indian Accent",
    address: "Delhi, Lodhi, Delhi",
    type: "Modern Indian",
    parkingLot: true,
    image: "https://i.pinimg.com/736x/e3/ac/a4/e3aca4310acc6d2a0712baf724e64041.jpg",
    rating: 4.9,
    deliveryTime: "45-60 mins"
  },
  {
    restaurantID: 13,
    restaurantName: "Jewel of Nizam",
    address: "Hyderabad, Golkonda, Telangana",
    type: "Hyderabadi Cuisine",
    parkingLot: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45QoUxdPvkW7iThCGWpRz73aCdXjKS-TiaA&s",
    rating: 4.5,
    deliveryTime: "35-45 mins"
  },
  {
    restaurantID: 14,
    restaurantName: "Karim’s",
    address: "Delhi, Jama Masjid, Delhi",
    type: "Mughlai",
    parkingLot: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5NsYIsQAiuYQzVYAmgbO69w3_NQvL52qoXw&s",
    rating: 4.4,
    deliveryTime: "25-35 mins"
  },
  {
    restaurantID: 15,
    restaurantName: "Koshy’s",
    address: "Bangalore, St. Marks, Karnataka",
    type: "Indian Cafe",
    parkingLot: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCx_G4L3FLwWoIo2JwCVvq1rAhuE4T1oVQg&s",
    rating: 4.3,
    deliveryTime: "30-40 mins"
  },
  {
    restaurantID: 16,
    restaurantName: "Masala Library",
    address: "Mumbai, Bandra, Maharashtra",
    type: "Modern Indian",
    parkingLot: true,
    image: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/9e3cd0fe-e0fe-4ed1-aad3-db04fc8df730-deliciousdishes_bunnychow_ss.jpg",
    rating: 4.6,
    deliveryTime: "40-50 mins"
  },
  {
    restaurantID: 17,
    restaurantName: "Mavalli Tiffin Room (MTR)",
    address: "Bangalore, Lal Bagh, Karnataka",
    type: "South Indian",
    parkingLot: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMzpHpy95I_7oZWoK7OfxRO54OiPurcvLtQ&s",
    rating: 4.4,
    deliveryTime: "20-30 mins"
  },
  {
    restaurantID: 18,
    restaurantName: "Mumtaz Restaurant",
    address: "Hyderabad, Mallepally, Telangana",
    type: "Hyderabadi Cuisine",
    parkingLot: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7qQpd7d8-XFqRrsLdAlw01pU6vGnIlFjPg&s",
    rating: 4.2,
    deliveryTime: "25-35 mins"
  },
  {
    restaurantID: 19,
    restaurantName: "Murugan Idli Shop",
    address: "Chennai, T. Nagar, Tamil Nadu",
    type: "South Indian",
    parkingLot: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhbjqQVLUFWAve4S-kaWOR8TFNoXPjcp5ng&s",
    rating: 4.5,
    deliveryTime: "20-30 mins"
  },
  {
    restaurantID: 20,
    restaurantName: "Oh! Calcutta",
    address: "Kolkata, Elgin, West Bengal",
    type: "Bengali Cuisine",
    parkingLot: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQp1UjrLf9j067-_uni-MrHCnx0hg8HhUvbw&s",
    rating: 4.6,
    deliveryTime: "35-45 mins"
  },
  {
    restaurantID: 21,
    restaurantName: "Paradise Biryani",
    address: "Hyderabad, Secunderabad, Telangana",
    type: "Biryani",
    parkingLot: true,
    image: "https://purendesi.in/wp-content/uploads/2024/12/Andhra-Style-Chicken-Biryani.jpg",
    rating: 4.4,
    deliveryTime: "25-35 mins"
  },
  {
    restaurantID: 22,
    restaurantName: "Peacock Rooftop Restaurant",
    address: "Jaipur, C Scheme, Rajasthan",
    type: "Multi-cuisine",
    parkingLot: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoez5Pu80BEEeQRAwVTnSoHiNy08RzeRY0Q&s",
    rating: 4.5,
    deliveryTime: "40-50 mins"
  },
  {
    restaurantID: 23,
    restaurantName: "Peter Cat",
    address: "Kolkata, Park Street, West Bengal",
    type: "Continental",
    parkingLot: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGBumVrRxp40d2_OxHulHAb7QXCki_t0HLg&s",
    rating: 4.6,
    deliveryTime: "35-45 mins"
  },
  {
    restaurantID: 24,
    restaurantName: "Pista House",
    address: "Hyderabad, Charminar, Telangana",
    type: "Biryani",
    parkingLot: false,
    image: "https://purendesi.in/wp-content/uploads/2024/12/Andhra-Style-Chicken-Biryani.jpg",
    rating: 4.3,
    deliveryTime: "25-35 mins"
  },
  {
    restaurantID: 25,
    restaurantName: "Rajwadu",
    address: "Ahmedabad, Vejalpur, Gujarat",
    type: "Gujarati",
    parkingLot: true,
    image: "https://static.toiimg.com/photo/61915645.cms",
    rating: 4.5,
    deliveryTime: "30-40 mins"
  },
  {
    restaurantID: 26,
    restaurantName: "Rawat Mishtan Bhandar",
    address: "Jaipur, Station Road, Rajasthan",
    type: "Rajasthani",
    parkingLot: false,
    image: "https://chokhidhani.com/welcome-indore/wp-content/uploads/elementor/thumbs/DAL-BAATI-CHURMA-1-r7wvfnqtjacvxpyjlcmrra6cvu5ohh4vwjcqk6czhc.jpg",
    rating: 4.4,
    deliveryTime: "20-30 mins"
  },
  {
    restaurantID: 27,
    restaurantName: "Sarvi Restaurant",
    address: "Hyderabad, Shah Ali Banda, Telangana",
    type: "Mughlai",
    parkingLot: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5NsYIsQAiuYQzVYAmgbO69w3_NQvL52qoXw&s",
    rating: 4.2,
    deliveryTime: "25-35 mins"
  },
  {
    restaurantID: 28,
    restaurantName: "Shah Ghouse",
    address: "Hyderabad, Tolichowki, Telangana",
    type: "Biryani",
    parkingLot: false,
    image: "https://cdn.siasat.com/wp-content/uploads/2025/06/mutabbaq.jpg",
    rating: 4.4,
    deliveryTime: "20-30 mins"
  },
  {
    restaurantID: 29,
    restaurantName: "The Fisherman’s Wharf",
    address: "Hyderabad, Necklace Road, Telangana",
    type: "Seafood",
    parkingLot: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWH9JRrx4g46qTS8NzQlr_INiUp-eyQEVaiQ&s",
    rating: 4.5,
    deliveryTime: "35-45 mins"
  },
  {
    restaurantID: 30,
    restaurantName: "The Table",
    address: "Mumbai, Colaba, Maharashtra",
    type: "Fine Dining",
    parkingLot: true,
    image: "https://www.aperitif.com/wp-content/uploads/2024/03/Aperitif-Restaurant-Food-Jackfruit-scaled.jpg",
    rating: 4.7,
    deliveryTime: "40-50 mins"
  }
];

export default resList;