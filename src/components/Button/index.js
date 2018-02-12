import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './button.css';

import Group from './group';

const propTypes = {
	label: PropTypes.string,
	primary: PropTypes.bool,
	icon: PropTypes.bool,
	disabled: PropTypes.bool,
	small: PropTypes.bool,
	element: PropTypes.oneOf(['button', PropTypes.element]),
	onClick: PropTypes.func
};

const defaultProps = {
	label: 'Button',
	primary: false,
	icon: false,
	disabled: false,
	element: 'button',
	small: false
}

class Button extends Component{
	static propTypes = propTypes; 
	static defaultProps = defaultProps; 
	render() {
		const {label, primary, icon, small, element, className, children, href = null, ...rest} = this.props; 
		const classes = cx(
			styles.root,
			{[`${styles.primary}`]: primary},
			{[`${styles.small}`]: small},
			className
		);
		return (
			<button {...rest} className={classes}>
				{children}
			</button> 
		)
	}
}

Button.Group = Group; 
export default CSSModules(Button, styles, {handleNotFoundStyleName: 'log'});