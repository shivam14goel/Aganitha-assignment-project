import React from "react";

export default function SearchBar({ query, setQuery, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center gap-2 mb-6 flex-wrap"
    >
      <input
        type="text"
        className="w-64 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
        placeholder="Enter ingredient (e.g., chicken)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Search
      </button>
    </form>
  );
}
