import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './button.css';

import Group from './group';


const propTypes = {
	label: PropTypes.string,
	primary: PropTypes.oneOf([true, false, 'true', 'false']),
	secondary: PropTypes.oneOf([true, false, 'true', 'false']), 
	tertiary: PropTypes.oneOf([true, false, 'true', 'false']),
	icon: PropTypes.oneOf([true, false, 'true', 'false']),
	disabled: PropTypes.oneOf([true, false, 'true', 'false']),
	small: PropTypes.oneOf([true, false, 'true', 'false']),
	onClick: PropTypes.func,
	// element: PropTypes.oneOf([PropTypes.instanceOf(Link), false, null])
	as: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.string, PropTypes.oneOf([true, false, 'true', 'false']), PropTypes.func])
};

const defaultProps = {
	label: 'Button',
	primary: true,
	secondary: false,
	tertiary: false,
	icon: false,
	disabled: false,
	small: false,
	as: false
};

class Button extends Component{
	static propTypes = propTypes; 
	static defaultProps = defaultProps; 
	render() {
		const {label, primary, secondary, tertiary, icon, small, as, className, children, ...rest} = this.props; 
		const classes = cx(
			styles.root,
			{[`${styles.primary}`]: primary},
			{[`${styles.secondary}`]: secondary},
			{[`${styles.tertiary}`]: tertiary},
			{[`${styles.small}`]: small},
			{[`${styles.link}`]: as},
			className
		);

		const Element = as ? as : 'button'; 

		return (
			<Element className={classes} {...rest}>
				{children}
			</Element> 
		)
	}
}

Button.Group = Group; 
export default CSSModules(Button, styles, {handleNotFoundStyleName: 'log'});