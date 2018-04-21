import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

function Team(props) {
  return (
    <section className="team box-small">
      <div className="container-fluid">
        <div className="container">
          <h2 className="heading-2">Team</h2>
          <div className="row">
            <div className="col-xs-12 col-md-4 box-small">
              <p className="body-1">Person 1</p>
              <p className="body-2 languages-min-height">Languages</p>
              <ul className="expertise">
                <li className="single body-2">Finance</li>
                <li className="single body-2">Qualified Life Coach</li>
              </ul>
            </div>
            <div className="col-xs-12 col-md-4 box-small">
              <p className="body-1">Person 2</p>
              <p className="body-2 languages-min-height">Languages</p>
              <ul className="expertise">
                <li className="single body-2">Marketing</li>
                <li className="single body-2">Mother of 9 &amp; 5 year olds</li>
              </ul>
            </div>
            <div className="col-xs-12 col-md-4 box-small">
              <p className="body-1">Person 3</p>
              <p className="body-2 languages-min-height">Languages</p>
              <ul className="expertise">
                <li className="single body-2">PhD Neuroscience</li>
                <li className="single body-2">Software Engineer and AI expert</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team;