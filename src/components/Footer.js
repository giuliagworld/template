import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

function Footer(props) {
  return (
    <section className="footer">
      <div className="container-fluid">
        <div className="container">
          <h2 className="heading-2">Contact</h2>
          <a className="contact email" href="mailto:test@bla.com">test@bla.com</a><br />
          <a className="contact phone" href="tel:+441234567890">01234567890</a>
        </div>
      </div>
    </section>
  )
}

export default Footer;