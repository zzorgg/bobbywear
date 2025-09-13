import React from "react";

export default function FilterBar({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      <select
        className="select select-bordered"
        value={filters.category}
        onChange={e => setFilters(f => ({ ...f, category: e.target.value }))}
      >
        <option value="">All Categories</option>
        <option value="dresses">Dresses</option>
        <option value="tops">Tops & Tees</option>
        <option value="bottoms">Bottoms</option>
        <option value="outerwear">Outerwear</option>
      </select>
      <select
        className="select select-bordered"
        value={filters.size}
        onChange={e => setFilters(f => ({ ...f, size: e.target.value }))}
      >
        <option value="">All Sizes</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <select
        className="select select-bordered"
        value={filters.color}
        onChange={e => setFilters(f => ({ ...f, color: e.target.value }))}
      >
        <option value="">All Colors</option>
        <option value="Pink">Pink</option>
        <option value="Blue">Blue</option>
        <option value="Yellow">Yellow</option>
        <option value="White">White</option>
        <option value="Green">Green</option>
      </select>
      <div className="flex gap-2">
        {Object.entries(filters).map(([key, value]) =>
          value ? (
            <span key={key} className="badge badge-outline badge-lg">
              {key}: {value}
            </span>
          ) : null
        )}
      </div>
    </div>
  );
}

