import React, { useState } from "react";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Catalog() {
  const [filters, setFilters] = useState({ category: "", size: "", color: "" });
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = !filters.category || product.category === filters.category;
    const matchesSize = !filters.size || product.size === filters.size;
    const matchesColor = !filters.color || product.color === filters.color;
    const q = search.trim().toLowerCase();
    const matchesSearch = !q || product.name.toLowerCase().includes(q) || product.description.toLowerCase().includes(q);
    return matchesCategory && matchesSize && matchesColor && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Girls' Wear Catalog</h1>
        <p className="text-base-content/70">Search and filter to find the right styles.</p>
      </div>
      <SearchBar search={search} setSearch={setSearch} />
      <FilterBar filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length ? (
          filteredProducts.map(product => <ProductCard key={product.id} product={product} />)
        ) : (
          <div className="col-span-full text-center text-base-content/70 py-12">
            <span className="badge badge-warning badge-lg mb-4">No products found</span>
            <div className="divider" />
            <p>Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
}
