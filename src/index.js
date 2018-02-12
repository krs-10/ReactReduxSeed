require('babel-polyfill');

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './App';

import 'styles/app.css';
import 'styles/normalize.css';
import 'styles/layout.css';
import 'styles/typography.css';

// render(
// 	<App />,
//   document.getElementById('root')
// );

render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  document.getElementById('root')
);
