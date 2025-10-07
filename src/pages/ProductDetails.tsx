import { useState, useRef, useCallback, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const [showPreview, setShowPreview] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const images = product?.images?.length ? product.images : product?.image ? [product.image] : [];
  const imageColors = Array.isArray(product?.imageColors) ? product.imageColors : null;
  const displayedColor =
    imageColors && imageColors[activeIndex]
      ? imageColors[activeIndex]
      : product?.color || '';

  useEffect(() => {
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
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const nextImage = useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (showPreview) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showPreview, prevImage, nextImage]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? touchStartX.current;
    const dx = endX - touchStartX.current;
    const threshold = 40;
    if (dx > threshold) prevImage();
    if (dx < -threshold) nextImage();
    touchStartX.current = null;
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-error/20 flex items-center justify-center">
            <X className="w-10 h-10 text-error" />
          </div>
          <h2 className="text-3xl font-bold">Product Not Found</h2>
          <p className="text-base-content/70">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/catalog" className="btn btn-primary gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-base-100">
        <div className="container mx-auto px-4 pt-12 pb-8">
          <div className="bg-base-100 shadow-2xl rounded-3xl max-w-7xl mx-auto overflow-hidden border border-base-300/50">
            <div className="grid lg:grid-cols-2 gap-8 p-6 lg:p-10">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative group">
                  <div
                    className="aspect-square bg-base-200 rounded-2xl overflow-hidden shadow-lg"
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                  >
                    <img
                      src={images[activeIndex] || images[0]}
                      alt={`${product.name} - view ${activeIndex + 1}`}
                      className="w-full h-full object-contain cursor-zoom-in transition-transform duration-500 group-hover:scale-110"
                      onClick={openPreview}
                      loading="eager"
                    />

                    {/* Navigation arrows */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-base-100/80 hover:bg-primary hover:text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-base-100/80 hover:bg-primary hover:text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    <button
                      onClick={openPreview}
                      className="absolute top-4 right-4 btn btn-circle btn-sm bg-base-100/80 hover:bg-primary hover:text-white transition-all backdrop-blur-sm"
                      aria-label="Open preview"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                          activeIndex === index
                            ? 'border-primary ring-4 ring-primary/30 scale-105'
                            : 'border-base-300 hover:border-base-400 hover:scale-105'
                        }`}
                        aria-label={`View image ${index + 1}`}
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

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-base-content mb-4 leading-tight">
                    {product.name}
                  </h1>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="badge badge-primary badge-lg capitalize font-medium">
                      {product.category}
                    </span>
                    <span className="badge badge-outline badge-lg font-medium">
                      Size: {product.size}
                    </span>
                    <span className="badge badge-outline badge-lg font-medium">
                      #{product.designNumber}
                    </span>
                    {displayedColor && (
                      <span className="badge badge-outline badge-lg font-medium capitalize">
                        Color: {displayedColor}
                      </span>
                    )}
                  </div>

                  <p className="text-base-content/80 text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Collapsible sections */}
                <div className="space-y-3">
                  <div className="collapse collapse-plus bg-base-200 rounded-2xl border border-base-300">
                    <input type="checkbox" defaultChecked />
                    <div className="collapse-title text-lg font-bold">
                      Product Details
                    </div>
                    <div className="collapse-content">
                      <p className="text-base-content/80 leading-relaxed">
                        {product.details}
                      </p>
                    </div>
                  </div>

                  <div className="collapse collapse-plus bg-base-200 rounded-2xl border border-base-300">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-bold">
                      Customer Reviews ({product.reviews?.length || 0})
                    </div>
                    <div className="collapse-content">
                      <div className="space-y-4">
                        {product.reviews?.length ? (
                          product.reviews.map((review, index) => (
                            <div
                              key={index}
                              className="bg-base-100 p-4 rounded-xl border border-base-300"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <div className="avatar placeholder">
                                  <div className="bg-primary text-primary-content rounded-full w-8">
                                    <span className="text-xs">
                                      {review.user.charAt(0)}
                                    </span>
                                  </div>
                                </div>
                                <span className="font-semibold">{review.user}</span>
                              </div>
                              <p className="text-base-content/80">{review.text}</p>
                            </div>
                          ))
                        ) : (
                          <p className="text-base-content/60 text-center py-4">
                            No reviews yet. Be the first to review this product!
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6">
                  <Link to="/catalog" className="btn btn-outline btn-lg flex-1 gap-2">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Catalog
                  </Link>
                  <Link to="/contact" className="btn btn-primary btn-lg flex-1 gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closePreview}
        >
          <button
            className="absolute top-4 right-4 btn btn-circle bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm z-10"
            aria-label="Close preview"
            onClick={closePreview}
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIndex]}
              alt={`${product.name} preview ${activeIndex + 1}`}
              className="object-contain max-h-[90vh] max-w-[95vw] rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}