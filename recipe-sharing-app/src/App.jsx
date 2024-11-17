// src/App.jsx
import React, { useEffect } from 'react';
import './App.css';
import { useRecipeStore } from './components/recipeStore';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  // Generate recommendations when the app is loaded or when favorites change
  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
