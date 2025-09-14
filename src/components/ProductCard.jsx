import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const images = (product.images && product.images.length ? product.images : [product.image]).filter(Boolean);

  const openModal = (i = 0) => {
    setIndex(i);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);
  const prev = (e) => {
    e?.stopPropagation();
    setIndex((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e?.stopPropagation();
    setIndex((i) => (i + 1) % images.length);
  };

  return (
    <div className="group cursor-pointer">
      <div className="rounded-lg mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-contain block"
          onClick={() => openModal(0)}
        />
      </div>
      <div className="space-y-2">
        <div className="flex gap-2 flex-wrap">
          {product.isNew && <span className="badge badge-success badge-sm">New</span>}
          {product.isSale && <span className="badge badge-warning badge-sm">Sale</span>}
          <span className="badge badge-outline badge-sm capitalize">{product.category}</span>
        </div>
        <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
        <div className="flex gap-2 pt-2">
          <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm flex-1">View Details</Link>
          <button onClick={() => openModal(0)} className="btn btn-outline btn-sm">
            📷
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img src={images[index]} alt={`${product.name} ${index+1}`} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
            {images.length > 1 && (
              <>
                <button aria-label="Previous" className="btn btn-circle btn-sm absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white" onClick={prev}>
                  ❮
                </button>
                <button aria-label="Next" className="btn btn-circle btn-sm absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white" onClick={next}>
                  ❯
                </button>
              </>
            )}
            <button aria-label="Close" className="btn btn-sm btn-ghost absolute right-4 top-4 bg-white/90 hover:bg-white text-black" onClick={closeModal}>✕</button>
            {images.length > 1 && (
              <div className="mt-4 flex justify-center gap-2 flex-wrap">
                {images.map((src, i) => (
                  <button key={src} className={`w-16 h-16 rounded border-2 overflow-hidden ${i===index? 'border-white' : 'border-gray-400'}`} onClick={() => setIndex(i)}>
                    <img src={src} alt={`${product.name} thumb ${i+1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
