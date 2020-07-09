import { connect } from 'react-redux';

import Home from 'src/components/Page/Home';

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes,
});

const mapDispatchToProps = {};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
