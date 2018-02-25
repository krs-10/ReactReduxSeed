import { NavLink } from 'react-router-dom';
import styles from './navigation.css';

const generateLinks = (links) => {
	return links.map((link, index) => {
		const { name = `Page ${index}`, path,  ...rest} = link; 
		return (
			<div key={`navlink-${index}`} styleName="item">
				<NavLink styleName="link" to={path} {...rest}>{name}</NavLink>
			</div>
		)
	})
}

class Navigation extends Component{
	state = {};
	render() {
		const { className, children, links, ...rest } = this.props; 
		const cxb = cx.bind(styles);
		const classes = cxb(
			className
		);
		return (
			<div styleName="root" className={classes} {...rest}>
				<div styleName="inner" >
					{generateLinks(links)}
				</div>
			</div>
		)
	}
}



 
export default CSSModules(Navigation, styles, {handleNotFoundStyleName: 'log'});