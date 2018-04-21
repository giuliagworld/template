import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

function Links(props) {
  return (
    <section className="links">
      <div className="container-fluid">
        <div className="container">
          <h2 className="heading-2">Links</h2>
          <a className="link" href="/example1">example1</a><br />
          <a className="link" href="/example2">example2</a>
        </div>
      </div>
    </section>
  )
}

export default Links;