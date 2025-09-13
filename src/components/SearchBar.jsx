import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-6 flex items-center gap-2">
      <input
        type="text"
        className="input input-bordered w-full max-w-md"
        placeholder="Search dresses, tops, or brands..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button className="btn btn-primary" type="button" onClick={() => setSearch("")}>Clear</button>
    </div>
  );
}

