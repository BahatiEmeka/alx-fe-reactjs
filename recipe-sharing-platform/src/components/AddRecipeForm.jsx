import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (ingredientList.length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError("");

    // Create a new recipe object (you can modify this to send the data to a server or state management system)
    const newRecipe = {
      id: Date.now(), // Temporary ID
      title,
      ingredients: ingredientList,
      steps,
    };

    console.log("New Recipe:", newRecipe);

    // Clear form fields
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
