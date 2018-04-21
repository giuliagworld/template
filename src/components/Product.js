import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

function Product(props) {
  return (
    <section className="product">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              <h2 className="heading-2">Product</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product;