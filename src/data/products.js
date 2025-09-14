// Centralized sample product data used by Catalog and ProductDetails
export const products = [
  {
    id: 1,
    name: "Floral Dress",
    description: "Lightweight cotton, perfect for spring.",
    images: [
      "/asset/03f4c187-4a6e-4e70-9f5f-d19715c86a70.jpg",
      "/asset/04c5d728-f04a-4277-91ea-0419c50bc97d.jpg",
      "/asset/09422c10-4172-4a18-9c52-d91de4941baa.jpg"
    ],
    image: "/asset/03f4c187-4a6e-4e70-9f5f-d19715c86a70.jpg",
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
      "/asset/105672b2-fb3e-4c96-b9da-cc8550d438cb.jpg",
      "/asset/129e0046-a188-43ae-b2d4-f36cf676c5bd.jpg"
    ],
    image: "/asset/105672b2-fb3e-4c96-b9da-cc8550d438cb.jpg",
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
      "/asset/259d3d9a-02a1-45d2-a1ff-5f2284b5096e.jpg",
      "/asset/2604fd7c-d562-4d5b-8be2-7801f8d26645.jpg"
    ],
    image: "/asset/259d3d9a-02a1-45d2-a1ff-5f2284b5096e.jpg",
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
      "/asset/2a122335-736b-4936-bc2e-8e75d8045b6f.jpg",
      "/asset/2bf89d0d-affa-40d4-8b24-773cb53b41c5.jpg",
      "/asset/3a446802-48b2-48d3-9859-c1f7663f6287.jpg"
    ],
    image: "/asset/2a122335-736b-4936-bc2e-8e75d8045b6f.jpg",
    category: "outerwear",
    size: "M",
    color: "Green",
    isNew: true,
    isSale: true,
    details: "Lightweight waterproof shell with soft lining.",
    reviews: [{ user: "Lily", text: "Great for rainy days." }]
  }
];
