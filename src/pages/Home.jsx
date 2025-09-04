// Home.jsx
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeGrid from "../components/RecipeGrid";

export default function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecipes = async (ingredient) => {
    if (!ingredient) {
      setError("Please enter an ingredient.");
      return;
    }

    setLoading(true);
    setError("");
    setRecipes([]);

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();

      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setError(`No recipes found for "${ingredient}".`);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} onSearch={fetchRecipes} />

      {loading && <p className="text-center text-gray-600">Loading recipes...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && recipes.length > 0 && (
        <RecipeGrid recipes={recipes} />
      )}
    </div>
  );
}
