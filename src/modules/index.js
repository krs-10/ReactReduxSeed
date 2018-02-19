import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import accordion from './accordion';

export default combineReducers({
	accordion: accordion,
  router: routerReducer
})