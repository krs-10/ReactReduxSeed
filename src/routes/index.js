import { Route } from 'react-router-dom';

import About from './About';
import Details from './Details';
import Home from './Home';

const RoutesObject = {
	base: '', 
	children: [
		{ path: '/', name: 'Home', component: Home, exact: true },
		{ path: '/about', name: 'About', component: About },
		{ path: '/details', name: 'Details', component: Details }
	]
}

class Routes extends Component { 
	render(){
		return (
			<Fragment>
				<Route exact path="/" component={Home}/>
				<Route path="/about" component={About}/>
				<Route path="/details" component={Details}/>
			</Fragment>
		)
	}
}



export { Routes as default, RoutesObject};


