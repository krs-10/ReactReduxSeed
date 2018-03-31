import { css } from 'glamor';

import styles from './hero.css';


const propTypes = {
	src: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	element: PropTypes.oneOf([true, false, 'true', 'false']),
	contained: PropTypes.oneOf([true, false, 'true', 'false']),
	// bleed: PropTypes.oneOf([true, false, 'true', 'false'])
};

const defaultProps = {
	src: null,
	element: false,
	contained: true,
	// bleed: true
}

const dynamicBackground = (src) => {
	return css(
		{
			position: 'relative',
			'&::after': {
				content: '" "', 
				display: 'block', 
				'backgroundImage': `url(${src})`,
				backgroundSize: 'cover', 
				position: 'absolute', 
				left: 0, 
				right: 0, 
				top: 0, 
				bottom: 0,
				zIndex: -1
			}
		}
	)
}

const dynamicBackgroundMain = (src) => {
	return css(
		{
			'backgroundImage': `url(${src})`,
			backgroundSize: 'cover', 
			position: 'relative',
			backgroundRepeat: 'no-repeat'
		}
	)
}

class Hero extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps
	render(){
		const { children, className, src, contained, element = false, ...rest} = this.props; 
		const cxb = cx.bind(styles);

		const heroImage = dynamicBackground(src).toString();
		const heroImageMain = dynamicBackgroundMain(src).toString();

		const classes = cxb(
			[`${heroImageMain}`],
			'mask',
			className
		);

		return (
			<section styleName="root" className={classes} {...rest}>
				<div styleName="inner">
						{children}
					</div>
			</section>
		)
	}
}
export default CSSModules(Hero, styles, {handleNotFoundStyleName: 'log'});