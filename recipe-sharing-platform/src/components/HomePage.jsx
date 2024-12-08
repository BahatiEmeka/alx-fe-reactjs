import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load the mock data from the static JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="text-center mb-6">
        <Link
          to="/add-recipe"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
        >
          Add a New Recipe
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-700 mb-4">{recipe.summary}</p>
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
