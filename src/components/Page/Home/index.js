import React from 'react';
import PropTypes from 'prop-types';

import RecipeCard from './RecipeCard';

import './home.css';

const Home = ({ recipes }) => (
  <section className="home">
    <p>Bienvenue sur mon site de recettes. Régalez-vous !</p>
    <div className="recipes-small">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          {...recipe}
        />
      ))}
    </div>
  </section>
);

Home.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Home;
