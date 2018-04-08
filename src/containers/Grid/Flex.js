import CSSModules from 'react-css-modules';
import { reflex, ReflexProvider } from 'reflexbox';
import { css } from 'glamor';

const Sizes = require('styles/variables/Sizes.js');
const { 
	'gutter-margin-mobile' : margin, 
	'gutter-margin-desktop': marginDesktop,
	'bp-desktop': bpDesktop, 
	'bp-tablet': bpTablet,
	'bp-mobile': bpMobile

} = Sizes; 

const breakpoints = [64, 37, 30];

const margins = [
	'-1rem', 
	'-2rem', 
	'-2rem'
];

const rhythmMargins = [
	margin, 
	marginDesktop, 
	marginDesktop
];

const Defaults = {
	mx: margins
}

const marginRhythm = () => { return css({'> *': { marginBottom: '0' } }) };
const flexProp = (arg) => { return css({'flex': `${arg}`})}
// const mapSpaces = (spaces, dict) => {
// 	if (!spaces) return dict; 
// 	if (Array.isArray(spaces)) {
// 		return spaces.map((s, i) => {

// 		})
// 	}
// }


class Flex extends Component {
	render(){
		const {children, className, dynamic = false, wrap = true, column = false, mx = margins, ...rest} = this.props; 
		const setFlex = dynamic ? flexProp(dynamic) : '';
		const classes = cx(
			{[`${marginRhythm()}`]: !column}, 
			[`${setFlex}`], 
			className
		);

		// console.log("Flex.js - flex :", flex);
		return (
			<ReflexProvider breakpoints={breakpoints} space={[0,0,0,0]}>
				<_Flex className={classes} column={column} wrap={wrap} mx={mx} {...rest}>{children}</_Flex>
			</ReflexProvider>
		)
	}
}

export default Flex; 

