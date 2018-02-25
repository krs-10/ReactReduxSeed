import { NavLink } from 'react-router-dom';
import styles from './navbar.css';

class Navigation extends Component{
	state = {};
	render() {
		const { className, children, ...rest } = this.props; 
		const cxb = cx.bind(styles);
		const classes = cxb(
			className
		);
		return (
			<div styleName="root" className={classes} {...rest}>
				<div className="container">
					<NavLink to="/" exact={true}>Home</NavLink>
					<NavLink to="/details">Program Details</NavLink>
					<NavLink to="/day-in-the-life">Day in the Life</NavLink>
					<NavLink to="/requirements">Requirements</NavLink>
				</div>
			</div>
		)
	}
}


export default CSSModules(Navigation, styles, {handleNotFoundStyleName: 'log'});