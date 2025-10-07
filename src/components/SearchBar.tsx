import { Search, X } from 'lucide-react';

interface SearchBarProps {
  search: string;
  setSearch: (search: string) => void;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div className="mb-6">
      <div className="relative max-w-3xl mx-auto">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
        <input
          type="text"
          className="input input-lg w-full pl-16 pr-24 border-2 border-base-300 focus:border-primary rounded-2xl shadow-lg focus:shadow-xl transition-all text-lg"
          placeholder="Search dresses, tops, or brands..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button
            className="btn btn-ghost btn-sm absolute right-3 top-1/2 -translate-y-1/2 gap-1"
            type="button"
            onClick={() => setSearch('')}
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
            <span className="font-semibold">Clear</span>
          </button>
        )}
      </div>
    </div>
  );
}