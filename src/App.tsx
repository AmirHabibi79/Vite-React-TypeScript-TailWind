import { useState } from "react";
import reactLogo from "./assets/react.svg";
import typeLogo from "./assets/typescript.svg";
import viteLogo from "./assets/vite.svg";
import tailWindLogo from "./assets/tailwind.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo" alt="React logo" />
        <img src={typeLogo} className="logo" alt="TypeScript logo" />
        <img src={tailWindLogo} className="logo" alt="TailWind logo" />
      </div>
      <h1>Vite + React + TypeScript + Tailwind </h1>
      <div className="mt-4">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
