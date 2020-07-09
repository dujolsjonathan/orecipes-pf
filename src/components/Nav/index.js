import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { slugifyTitle } from 'src/utils/selectors';

import './nav.css';

const Nav = ({ recipes }) => (
  <nav className="navigation">
    <NavLink
      to="/"
      className="navigation-item"
      activeClassName="navigation-item-active"
      exact
    >
      Accueil
    </NavLink>
    {recipes.map((recipe) => {
      const slug = slugifyTitle(recipe.title);

      return (
        <NavLink
          key={recipe.id}
          to={`/recipe/${slug}`}
          className="navigation-item"
          activeClassName="navigation-item-active"
        >
          {recipe.title}
        </NavLink>
      );
    })}
  </nav>
);

Nav.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Nav;
