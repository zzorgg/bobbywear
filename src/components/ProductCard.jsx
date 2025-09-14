import React, { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const images = (product.images && product.images.length ? product.images : [product.image]).filter(Boolean);
  const imageColors = Array.isArray(product?.imageColors) ? product.imageColors : (product?.color ? [product.color] : []);

  // Map some common color names to nice swatch colors
  const colorMap = useMemo(() => ({
    pink: "#f472b6",
    blue: "#60a5fa",
    green: "#34d399",
    yellow: "#f59e0b",
    red: "#ef4444",
    black: "#111827",
    white: "#ffffff",
    purple: "#a78bfa",
    orange: "#fb923c",
    brown: "#a16207",
    grey: "#9ca3af",
    gray: "#9ca3af",
  }), []);

  const [coverIndex, setCoverIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = useCallback(() => {
    setIndex(coverIndex);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, [coverIndex]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const currentSrc = images[coverIndex] || images[0];

  return (
    <>
      <div className="group bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-base-300/50 hover:border-primary/30">
        {/* Image Container */}
        <div className="relative aspect-square bg-base-200 overflow-hidden">
          <img
            src={currentSrc}
            alt={`${product.name} ${coverIndex + 1}`}
            className="w-full h-full object-contain cursor-pointer transition-transform duration-300 group-hover:scale-105"
            onClick={openModal}
            loading="lazy"
          />

          {/* Overlay Button */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button
              onClick={openModal}
              className="btn btn-circle btn-primary btn-sm backdrop-blur-sm bg-primary/90 hover:bg-primary text-white border-none transform scale-90 group-hover:scale-100 transition-transform duration-300"
              aria-label="Open preview"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Color options mapped to images */}
        {imageColors.length > 0 && (
          <div className="px-5 pt-3 flex flex-wrap items-center gap-2">
            {imageColors.map((c, i) => {
              const key = String(c || '').toLowerCase();
              const swatch = colorMap[key] || undefined;
              const isActive = i === coverIndex;
              return (
                <button
                  key={`${product.id}-${i}-${c}`}
                  className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs border ${isActive ? 'border-primary text-primary' : 'border-base-300 text-base-content/80 hover:border-base-400'}`}
                  onClick={() => setCoverIndex(i)}
                  aria-label={`Show ${c}`}
                >
                  <span
                    className="inline-block w-3.5 h-3.5 rounded-full border"
                    style={{ backgroundColor: swatch || '#e5e7eb', borderColor: swatch ? 'rgba(0,0,0,0.1)' : '#d1d5db' }}
                  />
                  <span className="capitalize">{c}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Content */}
        <div className="p-5 space-y-3">
          <div className="flex gap-2 flex-wrap">
            <span className="badge badge-outline badge-sm capitalize font-medium">{product.category}</span>
            <span className="badge badge-ghost badge-sm">{product.size}</span>
          </div>
          <h3 className="font-bold text-lg text-base-content leading-tight line-clamp-2">{product.name}</h3>
          <p className="text-base-content/70 text-sm leading-relaxed line-clamp-2">{product.description}</p>
          <div className="flex gap-2 pt-2">
            <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm flex-1 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              View Details
            </Link>
            <button onClick={openModal} className="btn btn-outline btn-sm" aria-label="Quick view">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Simple single-image Preview Modal (no arrows, no thumbnails) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute -top-2 -right-2 btn btn-circle btn-sm bg-white/10 hover:bg-white/20 text-white border-white/20" aria-label="Close preview">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <img src={images[index]} alt={`${product.name} preview`} className="object-contain" style={{ maxHeight: '85vh', maxWidth: '95vw' }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
