import { connect } from 'react-redux';

import Recipe from 'src/components/Recipe';

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes,
});

const mapDispatchToProps = {};

const RecipeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recipe);

export default RecipeContainer;
