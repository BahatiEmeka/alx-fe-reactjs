import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title is required.";
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (formData.ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please include at least two ingredients.";
    }
    if (!formData.steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value from the event target
    setFormData({
      ...formData,
      [name]: value, // Update the appropriate field
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // Clear the form
      setFormData({ title: "", ingredients: "", steps: "" });
      setErrors({});
      alert("Recipe added successfully!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} noValidate>
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange} // Correct use of target.value
            className={`mt-1 block w-full border rounded-md shadow-sm p-2 focus:ring focus:ring-green-300 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients (separate with commas)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange} // Correct use of target.value
            className={`mt-1 block w-full border rounded-md shadow-sm p-2 focus:ring focus:ring-green-300 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            rows="3"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange} // Correct use of target.value
            className={`mt-1 block w-full border rounded-md shadow-sm p-2 focus:ring focus:ring-green-300 ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            rows="5"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
