import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "semantic-ui-css/semantic.min.css"
import reportWebVitals from './reportWebVitals';
import CurrentWeather from './components/CurrentWeather';

ReactDOM.render(
  <div>
    <CurrentWeather />
  </div>,
  document.getElementById('root')
);


reportWebVitals();
