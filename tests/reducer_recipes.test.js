// import d'une syntaxe Chai
import { expect } from 'chai';

// import de la fonction à tester
import reducer from '../src/reducers/recipes';

import { saveRecipes } from '../src/actions/recipes';


describe('reducer for recipes', () => {
  it('is a function', () => {
    expect(reducer).to.exist;

    expect(reducer).to.be.a('function');
  });

  it('check initial state', () => {

    expect(reducer()).to.be.eql({
      recipes: null,
      loading: true,
    });

  });

  it('check treatment of action SAVE_RECIPES', () => {
    expect(saveRecipes).to.be.a('function');

    const stateBefore = {
      recipes: null,
      loading: true,
    };

    const newRecipes = [
      { a: 1 },
      { b: 2 },
    ];
    const action = saveRecipes(newRecipes);

    expect(reducer(stateBefore, action)).to.be.eql({
      recipes: newRecipes,
      loading: false,
    });
  });
});
