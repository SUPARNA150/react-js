import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1
        className="font-bold text-center text-4xl 
     text-slate-800 py-14"
      >
        Change Background Color
      </h1>
      <div
        className="fixed flex flex-wrap justify-center 
      bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center gap-4
        shadow-lg bg-white px-3 py-2 rounded-full
         border-black border-2"
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-2xl
           shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-2xl
           shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-2xl
          shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-2xl
           shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-2xl
           shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-2xl
           shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
