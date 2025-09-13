import React from "react";

// DaisyUI carousel for hero section
export default function CarouselHero() {
  return (
    <div className="carousel w-full rounded-box mb-8">
      <div className="carousel-item w-full relative h-[320px] md:h-[420px]">
        <img src="https://picsum.photos/seed/bw-1/1200/500" className="w-full h-full object-cover" alt="Featured Dress 1" />
        <div className="absolute left-6 top-6 bg-base-200/80 p-4 rounded-box shadow-lg max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Spring Collection</h2>
          <p className="text-base-content/70">Bright, comfy, and stylish dresses for every girl.</p>
        </div>
      </div>
      <div className="carousel-item w-full relative h-[320px] md:h-[420px]">
        <img src="https://picsum.photos/seed/bw-2/1200/500" className="w-full h-full object-cover" alt="Featured Dress 2" />
        <div className="absolute left-6 top-6 bg-base-200/80 p-4 rounded-box shadow-lg max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Party Wear</h2>
          <p className="text-base-content/70">Twirl-ready party dresses for special occasions.</p>
        </div>
      </div>
      <div className="carousel-item w-full relative h-[320px] md:h-[420px]">
        <img src="https://picsum.photos/seed/bw-3/1200/500" className="w-full h-full object-cover" alt="Featured Dress 3" />
        <div className="absolute left-6 top-6 bg-base-200/80 p-4 rounded-box shadow-lg max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Casual Comfort</h2>
          <p className="text-base-content/70">Soft fabrics and playful prints for everyday fun.</p>
        </div>
      </div>
    </div>
  );
}
