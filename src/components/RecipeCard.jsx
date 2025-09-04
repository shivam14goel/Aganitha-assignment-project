import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-3 text-center font-medium text-gray-800">
        {recipe.strMeal}
      </div>
    </div>
  );
}
