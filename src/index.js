import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store';

import 'styles/root.css';
import 'styles/normalize.css';
import 'styles/app.css';
import 'styles/typography.css';
import 'styles/layout.css';

import App from './App';

render(
	<Provider store={store}>
	  	<App history={history} />
  	</Provider>,
  document.getElementById('root')
);
