import { Row as R, Column as C} from 'containers/Grid';
import { Button, Link } from 'components';

import { NavLink } from 'react-router-dom';
import styles from './navigation.css';

import { RoutesObject } from 'routes';

const generateLinks = (links) => {
	return links.map((link, index) => {
		const { name = `Page ${index}`, path, component, ...rest} = link; 
		
		return (
				<div key={`navlink-${index}`} styleName="item">
					<NavLink styleName="link" activeClassName={styles.active} to={path} {...rest}>
						{name}
						
					</NavLink>
						
				</div>
		)
	})
}


class Navigation extends Component{
	state = {
		open: false
	}
	handleToggle = (event) => {

		this.setState(state => {
			return {
				open: !this.state.open 
			}
		});
	}
	render() {
		const { className, children, links, ...rest } = this.props; 
		const cxb = cx.bind(styles);

		const classes = cxb(
			{'open': this.state.open},
			className
		);

		const { home, menu } = RoutesObject.pages; 
		
		return (
			<div styleName="root" className={classes} {...rest}>
				<div styleName="inner">
					<div styleName="left">
						<div styleName="logo">
							<NavLink styleName="link" activeClassName={styles.active} to={home.path} {...home}></NavLink>
						</div>
						<div styleName="items">
							{generateLinks(menu)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}



 
export default CSSModules(Navigation, styles, {handleNotFoundStyleName: 'log'});