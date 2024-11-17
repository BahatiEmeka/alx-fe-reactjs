// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // Trigger filtering when search term is updated
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearchChange}
      style={{ marginBottom: '20px', padding: '8px', width: '300px' }}
    />
  );
};

export default SearchBar;
