import React, { useState } from "react";
import PreviewPane from "./PreviewPane";
import CaseSelector from "./CaseSelector";
import SizeSelector from "./SizeSelector";
import BandSelector from "./BandSelector";

const CustomizationPage = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-4">
      <PreviewPane
        selectedCase={selectedCase}
        selectedSize={selectedSize}
        selectedBand={selectedBand}
      />
      <div className="flex flex-col gap-4">
        <CaseSelector selectedCase={selectedCase} onSelectCase={setSelectedCase} />
        <SizeSelector selectedSize={selectedSize} onSelectSize={setSelectedSize} />
        <BandSelector selectedBand={selectedBand} onSelectBand={setSelectedBand} />
      </div>
    </div>
  );
};

export default CustomizationPage;
