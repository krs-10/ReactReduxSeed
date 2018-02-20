// require('@babel/polyfill');

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store';

import App from './App';

import 'styles/app.css';
import 'styles/normalize.css';
import 'styles/layout.css';
import 'styles/typography.css';


render(
	<Provider store={store}>
	  	<App history={history} />
  	</Provider>,
  document.getElementById('root')
);
