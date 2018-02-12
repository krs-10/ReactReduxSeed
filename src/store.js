import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducers from 'modules';

export const history = createHistory({basename: '/'});
const logger = createLogger();

const middleware = [
  thunk
  // routerMiddleware(history),
]

const createStoreWithMiddleware = applyMiddleware(
	thunk, 
	routerMiddleware(history),
	// logger
)(createStore);

const store = createStoreWithMiddleware(rootReducers);

export default store;