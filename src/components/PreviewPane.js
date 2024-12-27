import React from "react";

const PreviewPane = ({ selectedCase, selectedSize, selectedBand }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-lg flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4">Your Watch Preview</h2>
      <div className="w-64 h-64 bg-white flex justify-center items-center border">
        {/* Simulate watch preview */}
        <div className="text-center">
          <p className="text-gray-700">{selectedCase || "Select a case"}</p>
          <p className="text-gray-500">{selectedSize || "Select a size"}</p>
          <p className="text-gray-500">{selectedBand || "Select a band"}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewPane;
