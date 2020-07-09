// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';

// == Composant
const App = ({ loadRecipes, loading, checkLogged }) => {
  // lancer la récupération des recettes directement après le premier rendu de App
  useEffect(() => {
    console.log('après le premier rendu');
    // store.dispatch(fetchRecipes());
    // si on veut envoyer une action au store => ajout d'une prop, et on la remplit
    // dans le container, avec mapDispatchToProps
    loadRecipes();
    checkLogged();
  }, []);

  return (
    <div className="app">
      {loading && <div>Chargement en cours</div>}
      {!loading && (
        <>
          <Nav />
          <Page />
        </>
      )}
    </div>
  );
};

App.propTypes = {
  loadRecipes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  checkLogged: PropTypes.func.isRequired,
};

// == Export
export default App;
