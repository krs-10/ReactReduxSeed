const path = require('path');
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { history } from './store';

import Page from 'pages/Page';

const App = (props) => {
	return (
		<ConnectedRouter history={history}>
	      <div>
	        <Route exact path="/" component={Page}/>
	        <Route path="/about" component={Page}/>
	        <Route path="/topics" component={Page}/>
	      </div>
	     </ConnectedRouter>
	  );
}

export default App; 

