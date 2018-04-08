import { Flex, Box } from 'containers/Grid';
import styles from './block.css';

const propTypes = {
	full: PropTypes.oneOf([true, false, 'true', 'false']),
	primary: PropTypes.oneOf([true, false, 'true', 'false']), 
	secondary: PropTypes.oneOf([true, false, 'true', 'false']), 
	tertiary: PropTypes.oneOf([true, false, 'true', 'false'])

};

const defaultProps = {
	full: false,
	primary: false, 
	secondary: false,
	tertiary: false
}

class Block extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps
	render(){
		const { children, className, full, primary, secondary, tertiary, center = false, mx = 0,  ...rest} = this.props; 
		const cxb = cx.bind(styles);

		const classes = cxb(
			{'primary': primary},
			{'secondary': secondary},
			{'tertiary': tertiary},
			{'center': center},
			className
		);



		return (
			<Flex styleName="root" column={true} mx={mx} className={classes} {...rest}>
				{children}
			</Flex>
		)
	}
}

export default CSSModules(Block, styles, {handleNotFoundStyleName: 'log'});