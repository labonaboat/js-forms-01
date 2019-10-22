import React from 'react';
import logo from './logo.svg';
import './App.css';

import './helper.css';
import { MoreResources, DisplayFormikState } from './helper';

import { render } from 'react-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

const App = () => (
  <div className="app">
    <h1>

      {' '}
        <a href="https://digitaliscommons.org/" target="_blank" rel="noopener">
          Commons | UHS Testbed
        </a>
      {' '}

      Form Component

    </h1>

    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required('Required'),
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: 'block' }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email ? 'text-input error' : 'text-input'
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

            <DisplayFormikState {...props} />
          </form>
        );
      }}
    </Formik>

    <MoreResources />
  </div>
);

/*

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <a
          className="App-link"
          href="https://digitaliscommons.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Commons | UHS Testbed
        </a>
      </header>
    </div>
  );
}

*/

export default App;
