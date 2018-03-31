import styles from './section.css';

const propTypes = {
	full: PropTypes.oneOf([true, false, 'true', 'false']),
	primary: PropTypes.oneOf([true, false, 'true', 'false']), 
	secondary: PropTypes.oneOf([true, false, 'true', 'false']), 
	bleed: PropTypes.oneOf([true, false, 'true', 'false'])

};

const defaultProps = {
	primary: false, 
	secondary: false,
	contained: false,
	bleed: false
}


class Section extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps
	render(){
		const { children, className, contained, bleed, primary, secondary, ...rest} = this.props; 
		const cxb = cx.bind(styles);


		const classes = cxb(
			[{'primary': primary}], 
			[{'secondary': secondary}], 
			[{'bleed': bleed}], 
			className
		);

		const hasInner = contained || bleed;
		return (
			<section styleName="root" className={classes} {...rest}>
				{hasInner 
					? <div styleName="inner">{children}</div>
				    : children
				}
			</section>
		)
	}
}

export default CSSModules(Section, styles, {handleNotFoundStyleName: 'log'});