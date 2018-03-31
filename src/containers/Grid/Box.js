import CSSModules from 'react-css-modules';
import { reflex } from 'reflexbox';
import {Sizes as s} from 'styles/variables';
import styles from 'styles/grid.css';

const defaults = {
	breakpoints: [s['bp-mobile'], s['bp-tablet'], s['bp-desktop']]
}
console.log("hi - defaults :", defaults);

class Box extends Component{
	render(){
		const {children, ...rest} = this.props; 
		return (
			<div className="box" {...defaults} {...rest}>{children}</div>
		)
	}
}

export default reflex(Box);
