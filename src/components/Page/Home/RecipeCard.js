import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { slugifyTitle } from '../../../utils/selectors';

const RecipeCard = ({ thumbnail, title, difficulty }) => (
  <div className="recipe-small">
    <img src={thumbnail} alt="" />
    <div className="recipe-small-content">
      <h2>{title}</h2>
      <p>Difficulté : {difficulty}</p>
      <Link to={`/recipe/${slugifyTitle(title)}`}>Voir la recette</Link>
    </div>
  </div>
);

RecipeCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default RecipeCard;
