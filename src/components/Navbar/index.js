import styles from './navbar.css';

class Navbar extends Component{
	state = {};
	render() {
		const { className, children, ...rest } = this.props; 
		const cxb = cx.bind(styles);
		const classes = cxb(
			className
		);

		return (
			<div styleName="root" className={classes} {...rest}>
				{ children }
			</div>
		)
	}
}


export default CSSModules(Navbar, styles, {handleNotFoundStyleName: 'log'});