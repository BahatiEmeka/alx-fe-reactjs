// src/components/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Stores the list of all recipes
  favorites: [], // Stores the list of favorite recipe IDs
  recommendations: [], // Stores the list of recommended recipes

  // Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // Generate personalized recommendations based on favorites
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Example logic for recommendation
    );
    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };
