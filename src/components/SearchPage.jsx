import React, { useState } from "react";
import SearchBox from "./SearchBox";
import ResultsDisplay from "./ResultDisplay";
import FilterOptions from "./FilterOptions";

const mockData = [
  { id: 1, title: "React.js Frontend", category: "Frontend" },
  { id: 2, title: "Node.js Backend", category: "Backend" },
  { id: 3, title: "Tailwind CSS", category: "Frontend" },
  { id: 4, title: "Express.js", category: "Backend" },
  { id: 5, title: "Shadcn UI", category: "Design" },
  { id: 6, title: "MongoDB", category: "Database" },
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [results, setResults] = useState(mockData);

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterResults(query, filter);
  };

  const handleFilter = (category) => {
    setFilter(category);
    filterResults(searchQuery, category);
  };

  const filterResults = (query, category) => {
    let filtered = mockData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }
    setResults(filtered);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          🔎 Search Articles
        </h1>
        <SearchBox value={searchQuery} onSearch={handleSearch} />
        <FilterOptions selected={filter} onFilterChange={handleFilter} />
        <ResultsDisplay results={results} />
      </div>
    </div>
  );
};

export default SearchPage;
