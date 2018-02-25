const path = require('path');
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { history } from './store';

import { Navigation } from 'containers';
import Routes, { RoutesObject } from 'routes';



const App = (props) => {
	return (
		<ConnectedRouter history={history}>
		      <div>
			      	<Navigation links={RoutesObject.children} />
			      	<Routes />
		      </div>
	     </ConnectedRouter>
	  );
}

export default App; 

