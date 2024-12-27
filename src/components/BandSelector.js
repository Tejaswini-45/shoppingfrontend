import React from "react";

const bands = ["Solo Loop", "Braided Solo Loop", "Leather", "Sport Band"];

const BandSelector = ({ selectedBand, onSelectBand }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Select Your Band</h3>
      <div className="flex space-x-4 overflow-x-scroll">
        {bands.map((band) => (
          <button
            key={band}
            className={`p-2 rounded-md border ${
              selectedBand === band ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => onSelectBand(band)}
          >
            {band}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BandSelector;
