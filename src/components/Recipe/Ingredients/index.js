import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';

import './ingredients.css';

const Ingredients = ({ ingredients }) => (
  <ul className="ingredients">
    {ingredients.map((ingredient) => (
      <Ingredient
        key={ingredient.id}
        {...ingredient}
      />
    ))}
  </ul>
);

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Ingredients;
