// src/components/RecipeDetails.jsx
import { useRecipeStore } from '../recipeStore';
import { Link, useParams, useNavigate } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === parseInt(recipeId)));
  const navigate = useNavigate();

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <div>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
      <Link to="/">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;
