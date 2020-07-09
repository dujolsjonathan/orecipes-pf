import { SAVE_RECIPES } from '../actions/recipes';

const initialState = {
  recipes: null,
  loading: true,
};

const recipes = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        recipes: action.newRecipes,
        loading: false,
      };

    default:
      return state;
  }
};

export default recipes;
