import React from "react";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className="mb-6 relative w-full">
      <input
        type="text"
        placeholder="Type to search..."
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full py-3 pl-10 pr-4 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />
      <svg
        className="w-6 h-6 absolute left-3 top-3 text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11 4a7 7 0 104.95 12.95l4.38 4.38a1 1 0 001.41-1.41l-4.38-4.38A7 7 0 0011 4zM2 11a9 9 0 1118 0A9 9 0 012 11z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default SearchBox;
