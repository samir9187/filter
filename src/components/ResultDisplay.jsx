import React from "react";

const ResultsDisplay = ({ results }) => {
  if (!results.length) {
    return (
      <p className="text-center text-gray-500 font-semibold">
        No results found. Try a different search!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map((item) => (
        <div
          key={item.id}
          className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
          <p className="text-sm text-gray-500">{item.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultsDisplay;
