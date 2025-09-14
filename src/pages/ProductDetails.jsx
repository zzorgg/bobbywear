import React, { useState, useRef, useCallback, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [showPreview, setShowPreview] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const images = (product?.images?.length ? product.images : [product?.image]).filter(Boolean);
  const imageColors = Array.isArray(product?.imageColors) ? product.imageColors : null;
  const displayedColor = imageColors && imageColors[activeIndex] ? imageColors[activeIndex] : (product?.color || "");

  useEffect(() => {
    // Reset active index when product changes
    setActiveIndex(0);
  }, [id]);

  const openPreview = useCallback(() => {
    setShowPreview(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closePreview = useCallback(() => {
    setShowPreview(false);
    document.body.style.overflow = 'unset';
  }, []);

  const prevImage = useCallback(() => {
    setActiveIndex(i => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const nextImage = useCallback(() => {
    setActiveIndex(i => (i + 1) % images.length);
  }, [images.length]);

  // Keyboard navigation on details page (not inside preview)
  useEffect(() => {
    const onKey = (e) => {
      if (showPreview) return; // no switch inside preview
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showPreview, prevImage, nextImage]);

  // Touch swipe on main image area
  const onTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? touchStartX.current;
    const dx = endX - touchStartX.current;
    const threshold = 40; // px
    if (dx > threshold) prevImage();
    if (dx < -threshold) nextImage();
    touchStartX.current = null;
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="alert alert-error shadow-lg max-w-md mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Product not found</span>
        </div>
        <div className="mt-6">
          <Link to="/catalog" className="btn btn-primary">Back to Catalog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-base-100 shadow-2xl rounded-2xl max-w-6xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Image Gallery Section */}
            <div className="space-y-4">
              {/* Main Image Display */}
              <div className="relative group">
                <div
                  className="aspect-square bg-base-200 rounded-xl overflow-hidden"
                  onTouchStart={onTouchStart}
                  onTouchEnd={onTouchEnd}
                >
                  <img
                    src={images[activeIndex] || images[0]}
                    alt={`${product.name} ${activeIndex + 1}`}
                    className="w-full h-full object-contain cursor-zoom-in transition-transform duration-300 group-hover:scale-105"
                    onClick={openPreview}
                    loading="lazy"
                  />
                  <button
                    onClick={openPreview}
                    className="absolute top-4 right-4 btn btn-circle btn-sm bg-base-100/80 hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm"
                    aria-label="Open preview"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        activeIndex === index
                          ? 'border-primary ring-2 ring-primary/30'
                          : 'border-base-300 hover:border-base-400'
                      }`}
                      aria-label={`Show image ${index + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-base-content mb-3">{product.name}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge badge-outline capitalize font-medium">{product.category}</span>
                  <span className="badge badge-outline font-medium">Size: {product.size}</span>
                  <span className="badge badge-outline font-medium">Color: {displayedColor}</span>
                </div>
                <p className="text-base-content/80 text-lg leading-relaxed">{product.description}</p>
              </div>

              <div className="space-y-3">
                <div className="collapse collapse-plus bg-base-200/50 rounded-xl">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-lg font-semibold peer-checked:bg-base-200/80 transition-colors">
                    Product Details
                  </div>
                  <div className="collapse-content">
                    <p className="text-base-content/80 pt-2">{product.details}</p>
                  </div>
                </div>

                <div className="collapse collapse-plus bg-base-200/50 rounded-xl">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-lg font-semibold peer-checked:bg-base-200/80 transition-colors">
                    Customer Reviews
                  </div>
                  <div className="collapse-content">
                    <div className="pt-2 space-y-3">
                      {product.reviews?.length ? (
                        product.reviews.map((review, index) => (
                          <div key={index} className="bg-base-100 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="badge badge-info font-medium">{review.user}</span>
                            </div>
                            <p className="text-base-content/80">{review.text}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-base-content/60">No reviews yet. Be the first to review this product!</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link to="/catalog" className="btn btn-outline btn-lg flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Back to Catalog
                </Link>
                <Link to="/contact" className="btn btn-primary btn-lg flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Preview Modal - single image only */}
      {showPreview && (
        <div className="fixed inset-0 z-50 bg-black/90" onClick={closePreview}>
          <button
            className="absolute top-4 right-4 btn btn-circle btn-sm bg-white/10 hover:bg-white/20 text-white border-white/20"
            aria-label="Close preview"
            onClick={closePreview}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[activeIndex]}
              alt={`${product.name} preview ${activeIndex + 1}`}
              className="object-contain"
              style={{ maxHeight: '90vh', maxWidth: '95vw' }}
            />
          </div>
        </div>
      )}
    </>
  );
}
