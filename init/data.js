const sampleVenues = [
  {
    name: "The Sunset Rooftop",
    location: "Los Angeles, CA",
    pricePerHour: 12000,
    images: ["https://i.pinimg.com/736x/30/a5/d0/30a5d0cf5cb64b443578f5d214cf934a.jpg"],
    amenities: ["WiFi", "Bar Service", "Outdoor Space", "Sound System"],
    capacity: 150,
    rating: 5,
    description: "Scenic rooftop with city views — perfect for parties and receptions."
  },
  {
    name: "Lakeside Banquet Hall",
    location: "Udaipur, India",
    pricePerHour: 8000,
    images: ["https://i.pinimg.com/474x/94/66/ac/9466ac06c72943d316f1bc3ab6a16d50.jpg"],
    amenities: ["Catering", "Parking", "Air Conditioning", "WiFi"],
    capacity: 300,
    rating: 4,
    description: "Traditional banquet hall with serene lakefront views."
  },
  {
    name: "City Lights Lounge",
    location: "Mumbai, India",
    pricePerHour: 10000,
    images: ["https://i.pinimg.com/736x/65/6f/d4/656fd475230c2da7b829bab1c59ebc0c.jpg"],
    amenities: ["WiFi", "Bar Service", "Sound System", "Parking"],
    capacity: 120,
    rating: 5,
    description: "Stylish indoor venue with a contemporary vibe."
  },
  {
    name: "Garden Party Grounds",
    location: "San Francisco, CA",
    pricePerHour: 7000,
    images: ["https://i.pinimg.com/474x/ca/41/39/ca41399a95274dc1551a7b18f1a371de.jpg"],
    amenities: ["Outdoor Space", "Catering", "Decor Services"],
    capacity: 200,
    rating: 4,
    description: "Open garden venue ideal for casual events and gatherings."
  },
  {
    name: "Sky High Terrace",
    location: "Bangalore, India",
    pricePerHour: 9000,
    images: ["https://i.pinimg.com/474x/dc/40/e1/dc40e12ecd63efdf47869a9efba925b1.jpg"],
    amenities: ["WiFi", "Outdoor Space", "Sound System", "Air Conditioning"],
    capacity: 180,
    rating: 5,
    description: "Terrace venue with stunning city skyline views."
  },
  {
    name: "Ocean View Deck",
    location: "Goa, India",
    pricePerHour: 11000,
    images: ["https://i.pinimg.com/474x/11/c0/e9/11c0e9467c48ec3deec10bbad49d48c6.jpg"],
    amenities: ["Outdoor Space", "Bar Service", "Sound System"],
    capacity: 100,
    rating: 5,
    description: "Beachfront deck with mesmerizing sunset views."
  },
  {
    name: "Vintage Ballroom",
    location: "New York, NY",
    pricePerHour: 15000,
    images: ["https://i.pinimg.com/474x/67/59/8f/67598ff1b40e4aaede10364fb577034c.jpg"],
    amenities: ["WiFi", "Catering", "Sound System", "Air Conditioning"],
    capacity: 350,
    rating: 5,
    description: "Elegant ballroom for weddings and corporate functions."
  },
  {
    name: "Poolside Pavilion",
    location: "Jaipur, India",
    pricePerHour: 7500,
    images: ["https://source.unsplash.com/800x600/?pool,party"],
    amenities: ["WiFi", "Catering", "Outdoor Space"],
    capacity: 80,
    rating: 4,
    description: "Poolside venue for intimate parties and gatherings."
  },
  {
    name: "The Creative Loft",
    location: "Austin, TX",
    pricePerHour: 5000,
    images: ["https://i.pinimg.com/474x/c7/cf/3d/c7cf3da45f97a12142cdd1516376ce48.jpg"],
    amenities: ["WiFi", "Decor Services", "Sound System"],
    capacity: 50,
    rating: 4,
    description: "Trendy loft space for workshops and pop-ups."
  },
  {
    name: "Mountain View Lodge",
    location: "Manali, India",
    pricePerHour: 6000,
    images: ["https://i.pinimg.com/474x/45/7e/49/457e49805efde8c251a770016405b0ef.jpg"],
    amenities: ["Outdoor Space", "WiFi", "Catering"],
    capacity: 120,
    rating: 5,
    description: "Rustic lodge with panoramic mountain views."
  },
  {
    name: "City Central Studio",
    location: "Delhi, India",
    pricePerHour: 4000,
    images: ["https://i.pinimg.com/474x/af/41/b7/af41b7bd584b8a98805b54fbd2392d61.jpg"],
    amenities: ["WiFi", "Sound System", "Air Conditioning"],
    capacity: 40,
    rating: 3,
    description: "Compact studio for workshops and networking events."
  },
  {
    name: "Emerald Banquet",
    location: "Chandigarh, India",
    pricePerHour: 9500,
    images: ["https://i.pinimg.com/474x/3d/e3/90/3de390bb4431d0206f02d7c39f3e7917.jpg"],
    amenities: ["WiFi", "Catering", "Air Conditioning", "Parking"],
    capacity: 220,
    rating: 5,
    description: "Luxury banquet hall for premium celebrations."
  },
  {
    name: "Open Sky Arena",
    location: "Hyderabad, India",
    pricePerHour: 8500,
    images: ["https://i.pinimg.com/474x/3e/ea/3c/3eea3cbc670b00f06094a373d488b25c.jpg"],
    amenities: ["Outdoor Space", "Sound System", "Bar Service"],
    capacity: 300,
    rating: 4,
    description: "Vast open-air arena for live shows and large parties."
  },
  {
    name: "Cosy Café Venue",
    location: "Mumbai, India",
    pricePerHour: 3000,
    images: ["https://i.pinimg.com/474x/8d/33/17/8d33178293c21bba0210db900acd2e0b.jpg"],
    amenities: ["WiFi", "Sound System"],
    capacity: 30,
    rating: 3,
    description: "Small café setting for casual events and book readings."
  },
  {
    name: "Royal Heritage Haveli",
    location: "Jaipur, India",
    pricePerHour: 14000,
    images: ["https://i.pinimg.com/474x/ce/35/5e/ce355e2efd8370a94c835b7880e95028.jpg"],
    amenities: ["WiFi", "Catering", "Decor Services", "Parking"],
    capacity: 250,
    rating: 5,
    description: "Historic haveli venue rich with royal Rajasthani charm."
  },
  {
    name: "Dockside Pavilion",
    location: "Kochi, India",
    pricePerHour: 6500,
    images: ["https://i.pinimg.com/474x/38/69/ad/3869adf76d7e76644740f5fe33d950c7.jpg"],
    amenities: ["Private Dock", "Outdoor Space", "WiFi"],
    capacity: 90,
    rating: 4,
    description: "Waterfront pavilion perfect for evening parties."
  },
  {
    name: "The Modern Art Space",
    location: "Delhi, India",
    pricePerHour: 5000,
    images: ["https://i.pinimg.com/474x/67/c6/c6/67c6c6579eb98b2fdac98984f1595f29.jpg"],
    amenities: ["WiFi", "Sound System", "Decor Services"],
    capacity: 60,
    rating: 4,
    description: "Minimalist art gallery space for exhibitions."
  },
  {
    name: "Skyline Banquets",
    location: "Gurgaon, India",
    pricePerHour: 10500,
    images: ["https://i.pinimg.com/474x/14/21/b0/1421b0c766b19920a23aca724f1cb451.jpg"],
    amenities: ["WiFi", "Air Conditioning", "Catering", "Parking"],
    capacity: 280,
    rating: 5,
    description: "Modern banquet with full city skyline views."
  },
  {
    name: "The Party Dome",
    location: "Pune, India",
    pricePerHour: 8000,
    images: ["https://i.pinimg.com/474x/0d/ab/ca/0dabcad5ac447c23f39d3d799baba7fb.jpg"],
    amenities: ["Sound System", "WiFi", "Bar Service", "Outdoor Space"],
    capacity: 200,
    rating: 4,
    description: "Unique dome-shaped venue ideal for themed parties."
  },
  {
    name: "Seaside Deck",
    location: "Goa, India",
    pricePerHour: 11500,
    images: ["https://i.pinimg.com/474x/56/a4/e4/56a4e447e0ee1f28c5360d6b0d68fe3e.jpg"],
    amenities: ["Outdoor Space", "WiFi", "Bar Service", "Sound System"],
    capacity: 130,
    rating: 5,
    description: "Chill beachside deck for tropical parties and sunset weddings."
  },{
    name: "Palm Tree Courtyard",
    location: "Goa, India",
    pricePerHour: 9500,
    images: ["https://i.pinimg.com/474x/f2/2f/27/f22f27f2c21f8018f0f6c1c151dfd0ef.jpg"],
    amenities: ["Outdoor Space", "Catering", "WiFi", "Decor Services"],
    capacity: 150,
    rating: 5,
    description: "Charming courtyard surrounded by palm trees — perfect for tropical gatherings."
  },
  {
    name: "Starry Night Terrace",
    location: "Hyderabad, India",
    pricePerHour: 8800,
    images: ["https://i.pinimg.com/474x/95/dd/42/95dd42cd67fe9f0b35c9b2fb6a4101c5.jpg"],
    amenities: ["WiFi", "Sound System", "Outdoor Space"],
    capacity: 120,
    rating: 4,
    description: "Rooftop space under the stars with ambient lighting and open-air seating."
  },
  {
    name: "Heritage Garden Hall",
    location: "Chennai, India",
    pricePerHour: 8000,
    images: ["https://i.pinimg.com/474x/30/2b/59/302b590174d760bb1145d18a2a0f9f7d.jpg"],
    amenities: ["Catering", "Decor Services", "Parking", "Outdoor Space"],
    capacity: 220,
    rating: 5,
    description: "Blend of tradition and modernity for weddings and family celebrations."
  },
  {
    name: "The Urban Deck",
    location: "Delhi, India",
    pricePerHour: 6000,
    images: ["https://i.pinimg.com/474x/d4/f5/f5/d4f5f53ed9e2fc30e38fa68387dc6418.jpg"],
    amenities: ["WiFi", "Sound System", "Air Conditioning"],
    capacity: 70,
    rating: 4,
    description: "Trendy deck venue for urban hangouts and birthday parties."
  },
  {
    name: "Crystal Banquets",
    location: "Bhopal, India",
    pricePerHour: 9700,
    images: ["https://i.pinimg.com/474x/86/9d/d8/869dd8e2c0e246ca5d4980ce0cdb240d.jpg"],
    amenities: ["Catering", "WiFi", "Air Conditioning", "Parking"],
    capacity: 300,
    rating: 5,
    description: "Spacious banquet hall with shimmering chandeliers."
  },
  {
    name: "The Pavilion Hall",
    location: "Ludhiana, India",
    pricePerHour: 7800,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfSgQ-MndG7hm5L4BNZMMZFfhjeDRiW9fDYA&s"],
    amenities: ["Sound System", "Catering", "WiFi"],
    capacity: 180,
    rating: 4,
    description: "Ideal for wedding receptions and engagement parties."
  },
  {
    name: "Mystic Lawn",
    location: "Nagpur, India",
    pricePerHour: 7200,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ER1mqAIzmAdy8dUAJLaqmkgQPJwc5kkkKw&s"],
    amenities: ["Outdoor Space", "Catering", "WiFi"],
    capacity: 250,
    rating: 5,
    description: "Open green lawn for evening get-togethers and festive events."
  },
  {
    name: "Riverside Retreat",
    location: "Rishikesh, India",
    pricePerHour: 8500,
    images: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/11/9d/8f/caption.jpg?w=900&h=-1&s=1"],
    amenities: ["Outdoor Space", "WiFi", "Bar Service"],
    capacity: 90,
    rating: 5,
    description: "Scenic riverside venue for peaceful gatherings and spiritual retreats."
  },
  {
    name: "Galaxy Event Dome",
    location: "Pune, India",
    pricePerHour: 10500,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04eL3Vl9l79bb-AMgEDfSLqRU8zkNwXOCVg&s"],
    amenities: ["Sound System", "WiFi", "Catering", "Bar Service"],
    capacity: 250,
    rating: 5,
    description: "Futuristic dome setup with ambient lighting for epic parties."
  },
  {
    name: "Cityscape Terrace",
    location: "Mumbai, India",
    pricePerHour: 9800,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WKzp3z5RNvJDuxz3ZOmV2Xk_CPYA2KaGYg&s"],
    amenities: ["WiFi", "Outdoor Space", "Sound System"],
    capacity: 120,
    rating: 4,
    description: "Chic rooftop terrace overlooking the city skyline."
  },
  {
    name: "Rustic Woods Venue",
    location: "Shimla, India",
    pricePerHour: 9000,
    images: ["https://i.pinimg.com/474x/5c/69/42/5c694259f4bfcfe2d59b87480bb5cdd7.jpg"],
    amenities: ["Outdoor Space", "Catering", "Decor Services"],
    capacity: 160,
    rating: 5,
    description: "Nature-themed venue surrounded by tall pine trees."
  },
  {
    name: "The Grand Ballroom",
    location: "Chandigarh, India",
    pricePerHour: 15000,
    images: ["https://i.pinimg.com/474x/8b/ca/11/8bca1159693a4f8adcdda95d66db9552.jpg"],
    amenities: ["WiFi", "Catering", "Sound System", "Air Conditioning"],
    capacity: 350,
    rating: 5,
    description: "Elegant ballroom for grand weddings and corporate events."
  },
  {
    name: "Pearl Garden",
    location: "Lucknow, India",
    pricePerHour: 6800,
    images: ["https://i.pinimg.com/474x/e0/79/8f/e0798f1dc82e9520ab0682e018feca61.jpg"],
    amenities: ["Catering", "WiFi", "Outdoor Space"],
    capacity: 180,
    rating: 4,
    description: "Garden venue with charming decor for day and evening events."
  },
  {
    name: "Skyline Lounge",
    location: "Gurgaon, India",
    pricePerHour: 11000,
    images: ["https://i.pinimg.com/474x/27/bf/dc/27bfdc590c2a6f263c5fe71b18d0e9cd.jpg"],
    amenities: ["WiFi", "Sound System", "Bar Service"],
    capacity: 200,
    rating: 5,
    description: "Lounge-style rooftop venue perfect for sundowner parties."
  },
  {
    name: "Blue Water Dock",
    location: "Kochi, India",
    pricePerHour: 8900,
    images: ["https://i.pinimg.com/474x/bb/b8/d0/bbb8d0814a994123c81b2a1a043a4f04.jpg"],
    amenities: ["Private Dock", "Outdoor Space", "WiFi"],
    capacity: 120,
    rating: 5,
    description: "Beautiful dock venue for sunset cruises and waterfront events."
  },
  {
    name: "Vintage Art Café",
    location: "Delhi, India",
    pricePerHour: 4500,
    images: ["https://i.pinimg.com/474x/e4/04/56/e404562da396246274b1893f420d903a.jpg"],
    amenities: ["WiFi", "Sound System"],
    capacity: 40,
    rating: 4,
    description: "Artistic café with vintage interiors for book launches and poetry nights."
  },
  {
    name: "Celebration Plaza",
    location: "Indore, India",
    pricePerHour: 8200,
    images: ["https://i.pinimg.com/474x/ce/5c/90/ce5c9094afe8f82d1a9d0a23b7589653.jpg"],
    amenities: ["Catering", "Sound System", "WiFi"],
    capacity: 280,
    rating: 5,
    description: "Large open space perfect for wedding receptions and public shows."
  },
  {
    name: "Serene Hilltop",
    location: "Mussorie, India",
    pricePerHour: 7500,
    images: ["https://i.pinimg.com/474x/46/7e/eb/467eeb170c4f296b9f401d1eb3aa6a44.jpg"],
    amenities: ["Outdoor Space", "Catering", "WiFi"],
    capacity: 100,
    rating: 4,
    description: "Hilltop venue offering scenic mountain views and fresh air."
  },
  {
    name: "Twilight Terrace",
    location: "Bangalore, India",
    pricePerHour: 9600,
    images: ["https://i.pinimg.com/474x/48/2a/e5/482ae5b0c7e953d5a839248a4d560664.jpg"],
    amenities: ["Outdoor Space", "Sound System", "WiFi"],
    capacity: 150,
    rating: 5,
    description: "Evening terrace parties made magical with ambient lighting."
  },
  {
    name: "The Classic Banquet",
    location: "Kanpur, India",
    pricePerHour: 9200,
    images: ["https://i.pinimg.com/474x/b3/84/0c/b3840c0012428e535b878d206f904afc.jpg"],
    amenities: ["Catering", "Air Conditioning", "WiFi", "Parking"],
    capacity: 220,
    rating: 5,
    description: "Traditional banquet hall with classic interiors and spacious seating."
  }
]

  

  
  export const modules={
    data:sampleVenues,
  };
  
  
  