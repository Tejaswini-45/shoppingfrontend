import React from "react";

const cases = ["Aluminum", "Stainless Steel", "Titanium"];

const CaseSelector = ({ selectedCase, onSelectCase }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Select Your Case</h3>
      <div className="flex space-x-4">
        {cases.map((watchCase) => (
          <button
            key={watchCase}
            className={`p-2 rounded-md border ${
              selectedCase === watchCase ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => onSelectCase(watchCase)}
          >
            {watchCase}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CaseSelector;
