import React from 'react';
import { Route } from 'react-router-dom';

import Recipe from 'src/containers/Recipe';
import Home from 'src/containers/Page/Home';
import Header from 'src/components/Page/Header';

import './page.css';

const Page = () => (
  <div className="page">
    <Header />
    <div className="page-content">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/recipe/:slug">
        <Recipe />
      </Route>
    </div>
  </div>
);

export default Page;
