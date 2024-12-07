import React from "react";

const categories = [
  { name: "Frontend", color: "bg-blue-500 text-white hover:bg-blue-600" },
  { name: "Backend", color: "bg-green-500 text-white hover:bg-green-600" },
  { name: "Design", color: "bg-pink-500 text-white hover:bg-pink-600" },
  { name: "Database", color: "bg-purple-500 text-white hover:bg-purple-600" },
];

const FilterOptions = ({ selected, onFilterChange }) => {
  return (
    <div className="mb-6 flex flex-wrap space-x-3 justify-center">
      {categories.map(({ name, color }) => (
        <button
          key={name}
          onClick={() => onFilterChange(name)}
          className={`px-4 py-2 rounded-full font-medium shadow mb-2 sm:mb-0 ${selected === name
            ? `${color} ring-2 ring-offset-2 ring-gray-300`
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
        >
          {name}
        </button>
      ))}
      <button
        onClick={() => onFilterChange("")}
        className="px-4 py-2 rounded-full font-medium bg-red-500 text-white hover:bg-red-600 shadow"
      >
        Clear
      </button>
    </div>
  );
};

export default FilterOptions;
