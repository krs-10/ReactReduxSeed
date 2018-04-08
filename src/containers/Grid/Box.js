import CSSModules from 'react-css-modules';
import { reflex } from 'reflexbox';
import { css } from 'glamor';


const Sizes = require('styles/variables/Sizes.js');
const { 'gutter-mobile' : gutter, 'gutter-desktop': gutterDesktop } = Sizes; 

// const padding = [ gutter, gutterDesktop, gutterDesktop ];
const padding = [
'1rem', 
'2rem', 
'2rem'
];

const demoStyles = {
	// 'background': 'lavender'
};


const marginRhythm = () => {
	return css(
		{
			'> *': {
				marginBottom: '0'
			}
		}
	)
}


const flexProp = (arg) => {
	return css(
		{
		'flex': `${arg}`
		}
	);
};

class Box extends Component{
	render(){
		const {children, className, px = padding, dynamic = false, ...rest} = this.props; 
		const setFlex = dynamic ? flexProp(dynamic) : '';
		const classes = cx(
			[`${setFlex}`], 
			"box",
			className
		);

		return (
			<_Box
				className={classes}
				style={demoStyles}
				px={px}
				{...rest}>
					{children}
			</_Box>
		)
	}
}

export default reflex(Box);
