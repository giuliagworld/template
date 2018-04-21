import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

import Header from './Header';
import Product from './Product';
import Team from './Team';
import Links from './Links';
import Footer from './Footer';

const App = createReactClass({
  render: function() {
    return (
      <div>
        <Header />
        <Product />
        <Team />
        <Links />
        <Footer />
      </div>
    )
  }
})

export default App;
