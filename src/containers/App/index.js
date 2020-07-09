import { connect } from 'react-redux';

import App from 'src/components/App';

import { fetchRecipes } from 'src/actions/recipes';
import { checkLogged } from 'src/actions/login';

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadRecipes: () => {
    dispatch(fetchRecipes());
  },
  checkLogged: () => {
    dispatch(checkLogged());
  },
});

// création du composant container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
