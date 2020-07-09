import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// import du composant à tester
import RecipeCard from '../src/components/Page/Home/RecipeCard';

describe('<RecipeCard />', () => {
  it('RecipeCard uses information given as props', () => {
    const wrapper = shallow(<RecipeCard thumbnail="img1.png" title="Pizza" difficulty="Facile" />);

    const elementsH2 = wrapper.find('h2');

    expect(elementsH2).to.have.lengthOf(1);

    expect(elementsH2.text()).to.equal('Pizza');
  });
});
