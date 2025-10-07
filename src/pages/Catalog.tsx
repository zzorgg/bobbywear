import { useState, useMemo } from 'react';
import { Package, ArrowRight } from 'lucide-react';
import FilterBar from '@/components/FilterBar';
import SearchBar from '@/components/SearchBar';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import type { Filters } from '@/types';

export default function Catalog() {
  const [filters, setFilters] = useState<Filters>({ 
    category: '', 
    size: '', 
    color: '' 
  });
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesSize = !filters.size || product.size === filters.size;
      const matchesColor = !filters.color || product.color === filters.color;
      
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.designNumber.toLowerCase().includes(q);
      
      return matchesCategory && matchesSize && matchesColor && matchesSearch;
    });
  }, [filters, search]);

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 pt-12 pb-16">
        {/* Header */}
        <div className="mb-12 text-center fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <Package className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wide">Our Collection</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-base-content">
            Girls' Wear Catalog
          </h1>
          <p className="text-base md:text-lg text-base-content/70 max-w-2xl mx-auto">
            Discover the perfect styles for your brand
          </p>
        </div>

        {/* Search & Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <SearchBar search={search} setSearch={setSearch} />
          <FilterBar filters={filters} setFilters={setFilters} />
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="badge badge-lg badge-primary gap-2 font-semibold shadow-lg">
            <Package className="w-4 h-4" />
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 scale-in">
            <div className="max-w-lg mx-auto space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-warning/20 to-warning/10 flex items-center justify-center">
                <Package className="w-16 h-16 text-warning" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">No Products Found</h3>
              <p className="text-lg text-base-content/60">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <button
                className="btn btn-primary btn-lg gap-2 shadow-lg"
                onClick={() => {
                  setSearch('');
                  setFilters({ category: '', size: '', color: '' });
                }}
              >
                <span>Clear All Filters</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}