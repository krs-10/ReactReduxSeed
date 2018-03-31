import { Navigation } from 'containers';
import { RoutesObject } from 'routes';

import styles from './page.css';

class Page extends Component {
	render(){
		const { children, className, ...rest} = this.props; 
		const classes = cx(
			className
		);

		return ( 
			<div styleName="root">
				<header styleName="header">
					{/*<Navigation links={RoutesObject.children} />*/}
					<Navigation />
				</header>
				<main styleName="main" className={classes} {...rest}>
					{children}
				</main>
			</div>
		)
	}
}

export default CSSModules(Page, styles, {handleNotFoundStyleName: 'log'});