import { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, X } from 'lucide-react';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const COLOR_MAP: Record<string, string> = {
  pink: '#f472b6',
  blue: '#87CEEB',
  olive: '#cedcb9',
  yellow: '#f59e0b',
  red: '#ef4444',
  black: '#111827',
  white: '#ffffff',
  purple: '#dcb9ce',
  orange: '#fb923c',
  brown: '#a16207',
  grey: '#9ca3af',
  gray: '#9ca3af',
  green: '#10b981',
};

export default function ProductCard({ product }: ProductCardProps) {
  const images = useMemo(
    () => (product.images?.length ? product.images : [product.image]).filter(Boolean),
    [product.images, product.image]
  );

  const imageColors = useMemo(
    () => Array.isArray(product?.imageColors) 
      ? product.imageColors 
      : product?.color 
        ? [product.color] 
        : [],
    [product.imageColors, product.color]
  );

  const [coverIndex, setCoverIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const currentSrc = images[coverIndex] || images[0];

  return (
    <>
      <article className="group bg-base-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-base-300/50 hover:border-primary/50 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-square bg-base-200 overflow-hidden">
          <img
            src={currentSrc}
            alt={`${product.name} - ${imageColors[coverIndex] || 'variant'}`}
            className="w-full h-full object-contain cursor-pointer transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            onClick={openModal}
            loading="lazy"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <button
              onClick={openModal}
              className="btn btn-circle btn-lg bg-white text-primary hover:bg-white/90 border-none shadow-2xl transform scale-0 group-hover:scale-100 transition-all duration-500"
              aria-label="Quick preview"
            >
              <Eye className="w-6 h-6" />
            </button>
          </div>

          {/* Badge */}
          <div className="absolute top-4 right-4 badge badge-primary badge-lg font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Quick View
          </div>
        </div>

        {/* Color Variants */}
        {imageColors.length > 0 && (
          <div className="px-6 pt-5 flex flex-wrap items-center gap-2">
            {imageColors.map((color, i) => {
              const key = String(color || '').toLowerCase();
              const swatch = COLOR_MAP[key];
              const isActive = i === coverIndex;
              
              return (
                <button
                  key={`${product.id}-${i}-${color}`}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-300 ${
                    isActive 
                      ? 'border-primary bg-primary text-white shadow-lg scale-110' 
                      : 'border-base-300 text-base-content/80 hover:border-primary/50 hover:bg-base-200 hover:scale-105'
                  }`}
                  onClick={() => setCoverIndex(i)}
                  aria-label={`Show ${color} variant`}
                >
                  <span
                    className="inline-block w-5 h-5 rounded-full border-2 shadow-md"
                    style={{ 
                      backgroundColor: swatch || '#e5e7eb', 
                      borderColor: isActive ? 'white' : (swatch ? 'rgba(0,0,0,0.15)' : '#d1d5db')
                    }}
                  />
                  <span className="capitalize">{color}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex gap-2 flex-wrap">
            <span className="badge badge-lg badge-primary capitalize font-semibold shadow-md">
              {product.category}
            </span>
            <span className="badge badge-lg badge-outline border-2 font-semibold">
              {product.size}
            </span>
            <span className="badge badge-lg badge-ghost font-semibold">
              #{product.designNumber}
            </span>
          </div>
          
          <h3 className="font-bold text-2xl text-base-content leading-tight line-clamp-2 min-h-[3.5rem] group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <p className="text-base-content/60 text-base leading-relaxed line-clamp-2 min-h-[3rem]">
            {product.description}
          </p>
          
          <div className="flex gap-3 pt-3">
            <Link 
              to={`/product/${product.id}`} 
              className="btn btn-primary flex-1 font-semibold shadow-lg hover:shadow-xl group/btn"
            >
              <span>View Details</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </Link>
            <button 
              onClick={openModal} 
              className="btn btn-outline btn-square border-2 hover:bg-primary hover:border-primary hover:text-white" 
              aria-label="Quick view"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>
        </div>
      </article>

      {/* Preview Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300" 
          onClick={closeModal}
        >
          <div 
            className="relative max-w-6xl w-full animate-in zoom-in-95 duration-300" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal} 
              className="absolute -top-16 right-0 btn btn-circle btn-lg bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 backdrop-blur-sm shadow-xl" 
              aria-label="Close preview"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="bg-base-100 rounded-3xl p-6 md:p-8 shadow-2xl">
              <img 
                src={currentSrc} 
                alt={`${product.name} preview`} 
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl" 
              />
              
              <div className="mt-6 text-center space-y-3">
                <h3 className="font-bold text-2xl md:text-3xl">{product.name}</h3>
                <p className="text-base md:text-lg text-base-content/70 max-w-2xl mx-auto">{product.description}</p>
                <div className="flex gap-3 justify-center pt-2">
                  <Link 
                    to={`/product/${product.id}`}
                    className="btn btn-primary btn-lg gap-2"
                  >
                    <span>View Full Details</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}