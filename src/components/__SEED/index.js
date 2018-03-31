import styles from './styles.css';

const propTypes = {
	full: PropTypes.oneOf([true, false, 'true', 'false']),
	primary: PropTypes.oneOf([true, false, 'true', 'false']), 
	secondary: PropTypes.oneOf([true, false, 'true', 'false']), 

};

const defaultProps = {
	full: false,
	primary: false, 
	secondary: false
}


class SEED extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps
	render(){
		const { children, className, ...rest} = this.props; 
		const cxb = cx.bind(styles);

		const classes = cxb(
			className
		);

		return (
			<div styleName="root" className={classes} {...rest}>
				{children}
			</div>
		)
	}
}

export default CSSModules(SEED, styles, {handleNotFoundStyleName: 'log'});