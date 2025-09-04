import React from "react";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-500 text-white text-center py-4 text-xl font-semibold shadow-md">
        🍲 Recipe Ideas
      </header>
      <main className="p-4">
        <Home />
      </main>
    </div>
  );
}
