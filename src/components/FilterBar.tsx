import { Filter, X } from 'lucide-react';
import type { Filters } from '@/types';

interface FilterBarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  const hasActiveFilters = Object.values(filters).some(Boolean);

  const clearAllFilters = () => {
    setFilters({ category: '', size: '', color: '' });
  };

  return (
    <div className="mb-8 space-y-6">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <div className="flex items-center gap-3 text-base-content/70">
          <Filter className="w-6 h-6 text-primary" />
          <span className="font-bold text-lg">Filter By:</span>
        </div>

        <select
          className="select select-bordered select-lg border-2 focus:border-primary rounded-xl shadow-md font-semibold min-w-[180px]"
          value={filters.category}
          onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}
        >
          <option value="">All Categories</option>
          <option value="dresses">Dresses</option>
          <option value="tops">Tops & Tees</option>
          <option value="bottoms">Bottoms</option>
          <option value="outerwear">Outerwear</option>
        </select>

        <select
          className="select select-bordered select-lg border-2 focus:border-primary rounded-xl shadow-md font-semibold min-w-[150px]"
          value={filters.size}
          onChange={(e) => setFilters((f) => ({ ...f, size: e.target.value }))}
        >
          <option value="">All Sizes</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <select
          className="select select-bordered select-lg border-2 focus:border-primary rounded-xl shadow-md font-semibold min-w-[150px]"
          value={filters.color}
          onChange={(e) => setFilters((f) => ({ ...f, color: e.target.value }))}
        >
          <option value="">All Colors</option>
          <option value="Pink">Pink</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
          <option value="White">White</option>
          <option value="Green">Green</option>
        </select>

        {hasActiveFilters && (
          <button
            className="btn btn-outline btn-lg gap-2 border-2 rounded-xl shadow-md font-semibold"
            onClick={clearAllFilters}
            aria-label="Clear all filters"
          >
            <X className="w-5 h-5" />
            Clear All
          </button>
        )}
      </div>

      {/* Active filters display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-3 justify-center">
          {Object.entries(filters).map(([key, value]) =>
            value ? (
              <span
                key={key}
                className="badge badge-lg badge-primary gap-2 capitalize font-semibold shadow-lg px-4 py-4"
              >
                <span className="text-sm">{key}:</span>
                <span className="font-bold">{value}</span>
                <button
                  onClick={() => setFilters((f) => ({ ...f, [key]: '' }))}
                  className="hover:scale-110 transition-transform"
                  aria-label={`Remove ${key} filter`}
                >
                  <X className="w-4 h-4" />
                </button>
              </span>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}