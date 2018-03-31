import CSSModules from 'react-css-modules';
import { reflex } from 'reflexbox';

console.log("BEFORE FOOBAR GETS CALLED");
// var Foobar = require('./../../styles/variables/Sizes.js');
// import Colors from './../../styles/variables/Colors.js';



const spacing = [];
const breakpoints = []; 

class Flex extends Component{
	render(){
		const {children, ...rest} = this.props; 
		return (
			<div className="flex" {...rest}>{children}</div>
		)
	}
}

export default reflex(Flex);
