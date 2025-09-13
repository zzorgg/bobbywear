// Centralized sample product data used by Catalog and ProductDetails
export const products = [
  {
    id: 1,
    name: "Floral Dress",
    description: "Lightweight cotton, perfect for spring.",
    images: [
      "https://picsum.photos/seed/dress1-1/600/420",
      "https://picsum.photos/seed/dress1-2/600/420",
      "https://picsum.photos/seed/dress1-3/600/420"
    ],
    image: "https://picsum.photos/seed/dress1/300/200",
    category: "dresses",
    size: "M",
    color: "Pink",
    isNew: true,
    isSale: false,
    details: "100% cotton. Machine washable. Available in XS-XL.",
    reviews: [
      { user: "Ava", text: "My daughter loves it!" },
      { user: "Mia", text: "Great quality and fit." }
    ]
  },
  {
    id: 2,
    name: "Party Top",
    description: "Sparkly top for celebrations.",
    images: [
      "https://picsum.photos/seed/top1-1/600/420",
      "https://picsum.photos/seed/top1-2/600/420"
    ],
    image: "https://picsum.photos/seed/top1/300/200",
    category: "tops",
    size: "S",
    color: "Blue",
    isNew: false,
    isSale: true,
    details: "Poly-cotton blend with sequins. Hand wash recommended.",
    reviews: [{ user: "Zoe", text: "Sparkly and comfy!" }]
  },
  {
    id: 3,
    name: "Comfy Leggings",
    description: "Stretchy and soft for all-day play.",
    images: [
      "https://picsum.photos/seed/bottom1-1/600/420",
      "https://picsum.photos/seed/bottom1-2/600/420"
    ],
    image: "https://picsum.photos/seed/bottom1/300/200",
    category: "bottoms",
    size: "L",
    color: "Yellow",
    isNew: false,
    isSale: false,
    details: "95% cotton, 5% elastane. Breathable and durable.",
    reviews: []
  },
  {
    id: 4,
    name: "Rain Jacket",
    description: "Waterproof and stylish.",
    images: [
      "https://picsum.photos/seed/outer1-1/600/420",
      "https://picsum.photos/seed/outer1-2/600/420",
      "https://picsum.photos/seed/outer1-3/600/420"
    ],
    image: "https://picsum.photos/seed/outerwear1/300/200",
    category: "outerwear",
    size: "M",
    color: "Green",
    isNew: true,
    isSale: true,
    details: "Lightweight waterproof shell with soft lining.",
    reviews: [{ user: "Lily", text: "Great for rainy days." }]
  }
];

