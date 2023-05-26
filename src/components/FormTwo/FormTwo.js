import React from "react";
import Header from "../Header/Header";
// import validator from 'validator';
// import InputError from '../InputError/InputError';
// import {Link} from 'react-router-dom';
import "./FormTwo.scss";
import three from "../../asset/images/icons/Circle 3.png";
import four from "../../asset/images/icons/Circle 4.png";
// import axios from 'axios';
import { Link } from "react-router-dom";
function FormOne() {
  return (
    <>
      <Header />
      <div className="form-page-two">
        <form id="entire-second-form">
          <div className="Wellness Survey">
            <div className="wellness-survey-section">
              <form>
                <div className="question-three">
                  <img src={three} alt="number three" />
                  <label htmlFor="thoughts">
                    What are your current needs and priorites in your personal
                    and professional life ?
                  </label>
                </div>
                <input
                  className="thoughts-input"
                  type="textarea"
                  id="thoughts"
                  name="thoughts"
                  placeholder="I would love to have more family time."
                />

                <div className="question-three">
                  <img src={four} alt="number four" />
                  <label htmlFor="wellbeing">
                    Have you expereinced any barriers to your productivity or
                    success in your current role?
                  </label>
                </div>
                <input
                  className="wellbeing-input"
                  type="textarea"
                  id="wellbeing"
                  name="wellbeing"
                  placeholder="The amount of hours dedicated to a project are limited"
                />
              </form>
            </div>
          </div>

          <div className="form-next-button">
            {/* <Link to={'/'} className='next-button-link'> */}
            <Link to={"/thankyou"}>
              <button className="next-button" type="submit">
                Finish
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormOne;
