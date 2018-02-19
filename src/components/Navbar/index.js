import styles from './navbar.css';

class Navbar extends Component{
	state = {};
	render() {
		const { className, children, ...rest } = this.props; 
		console.log("Navbar - rest :", rest);
		const cxb = cx.bind(styles);
		const classes = cxb(
			className
		);

		return (
			<div className={classes} {...rest}>
			Hey these are some kids
				{ children }
			</div>
		)
	}
}


export default CSSModules(Navbar, styles, {handleNotFoundStyleName: 'log'});