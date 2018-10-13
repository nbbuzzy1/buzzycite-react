import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './containers/LoadingPage';


const jsx = (
  <div>
    <AppRouter />
  </div>
);
// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById('app'));
//     hasRendered = true;
//   }
// };

// renderApp();

ReactDOM.render(jsx, document.getElementById('app'));
