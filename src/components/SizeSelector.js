import React from "react";

const sizes = ["42mm", "46mm"];

const SizeSelector = ({ selectedSize, onSelectSize }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Select Your Size</h3>
      <div className="flex space-x-4">
        {sizes.map((size) => (
          <button
            key={size}
            className={`p-2 rounded-md border ${
              selectedSize === size ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => onSelectSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
