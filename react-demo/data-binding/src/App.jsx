import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  return (
    <main>
      {/* Container */}
      <div className="max-w-lg mx-auto px-4">
        {/* Layout */}
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center gap-8 w-full">
            <input
              type="text"
              className="outline-none rounded py-4 px-3 w-full bg-white shadow text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
              placeholder="Enter the name..."
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <h1 className="text-2xl font-semibold uppercase">
              Hello {name}, nice to meet you guys!
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
