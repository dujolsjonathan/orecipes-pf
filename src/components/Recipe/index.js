// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { getRecipeBySlug } from 'src/utils/selectors';

// == Import : local
// Composants
import Header from './Header';
import Ingredients from './Ingredients';
import Steps from './Steps';

// Style
import './styles.css';

// == Composant
function Recipe({ recipes }) {
  const { slug } = useParams();
  
  const recipeFound = getRecipeBySlug(slug, recipes);

  return (
    <div className="recipe">
      <Header
        title={recipeFound.title}
        thumbnail={recipeFound.thumbnail}
        author={recipeFound.author}
        difficulty={recipeFound.difficulty}
      />
      <Ingredients
        ingredients={recipeFound.ingredients}
      />
      <Steps
        steps={recipeFound.instructions}
      />
    </div>
  );
}

Recipe.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      ingredients: PropTypes.array.isRequired,
      instructions: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Recipe;
