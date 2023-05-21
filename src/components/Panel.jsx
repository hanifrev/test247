import React, { useState } from "react";

const Panel = () => {
  const [number, setNumber] = useState("");
  const [panelIndex, setPanelIndex] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPanelIndex(panelIndex + 1);
  };

  const generateNumber = () => {};

  return (
    <div className="flex mx-auto justify-center pt-3 gap-28">
      <div>
        <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
          <label>Input The Number</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="bg-white border-2 text-black"
            min="1"
            max="100000"
          />
          <button>Submit</button>
        </form>
      </div>
      <div>
        <button onClick={generateNumber}>Generate Number</button>
      </div>
    </div>
  );
};

export default Panel;
