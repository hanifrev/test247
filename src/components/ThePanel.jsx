import React, { useState } from "react";

const FirstTab = ({ onNext, disabled }) => {
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext(Number(number));
  };

  return (
    <div>
      <h2>Input The Number</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          min="1"
          max="100000"
          className="bg-white border-2 text-black"
          disabled={disabled}
        />
        <button
          type="submit"
          disabled={disabled}
          className={` ${disabled ? "bg-indigo-200" : "bg-indigo-700"}`}
        >
          Next
        </button>
      </form>
    </div>
  );
};

const SecondTab = ({ numberA, onNext, randomNum }) => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateRandomNumbers = () => {
    const numbers = Array.from(
      { length: numberA },
      () => Math.floor(Math.random() * 2000001) - 1000000
    );
    setRandomNumbers(numbers);
  };

  return (
    <div>
      <h2>Second Tab</h2>
      <button onClick={generateRandomNumbers}>Generate Random Numbers</button>
      <div>
        <div className="flex flex-col py-2">
          {randomNumbers.map((number, index) => (
            <ul key={index}>
              <li>{number}</li>
            </ul>
          ))}
        </div>
      </div>
      <button
        onClick={() =>
          onNext(Math.max(...randomNumbers.filter((num) => num > 0)))
        }
      >
        Next
      </button>
    </div>
  );
};

const ThirdTab = ({ numberB }) => {
  return (
    <div>
      <h2>Third Tab</h2>
      <p>Number B: {numberB}</p>
    </div>
  );
};

const ThePanel = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [numberA, setNumberA] = useState(null);
  const [numberB, setNumberB] = useState(null);

  const handleNextTab = (number) => {
    setCurrentTab(currentTab + 1);
    if (currentTab === 1) {
      setNumberA(number);
    } else if (currentTab === 2) {
      setNumberB(number);
    }
  };

  const isFirstTabDisabled = currentTab > 1;

  return (
    <div>
      <div className="flex flex-row mx-auto justify-center pt-3 gap-28">
        <div
          className={`tab ${
            currentTab === 1 ? "border-yellow-300" : ""
          } border w-[400px] p-3 rounded-md`}
        >
          <FirstTab onNext={handleNextTab} disabled={isFirstTabDisabled} />
        </div>
        <div
          className={`tab ${
            currentTab === 2 ? "border-yellow-300" : ""
          } border w-[400px] p-3 rounded-md`}
        >
          <SecondTab numberA={numberA} onNext={handleNextTab} />
        </div>
        <div
          className={`tab ${
            currentTab === 3 ? "border-yellow-300" : ""
          } border w-[400px] p-3 rounded-md`}
        >
          <ThirdTab numberB={numberB} />
        </div>
      </div>
    </div>
  );
};

export default ThePanel;
