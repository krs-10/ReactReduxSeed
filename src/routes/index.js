import { Route } from 'react-router-dom';

import Home from './Home';
import About from './About';

const RoutesObject = {
	base: '', 
	pages: {
		home: { path: '/', name: 'Home', exact: true },
		menu: [
			{ path: '/about', name: 'About', component: About}
		]
	}
}

class Routes extends Component { 

	render(){
		return (
			<Fragment>
				<Route exact path="/" component={Home}/>
				<Route path="/about" component={About}/>
			</Fragment>
		)
	}
}



export { Routes as default, RoutesObject};


