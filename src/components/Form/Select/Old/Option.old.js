import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './select.css';

const propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	group: PropTypes.bool, 
	label: PropTypes.string,
	role: PropTypes.string,
	selected: PropTypes.bool
};

const defaultProps = {
	value: null,
	role: "option",
	options: null,
	group: false,
	selected: false
}

const Option = (props) => {
	const {children, className, value, group, selected, label = value, ...rest} = props; 
	const classes = cx(
			{[`${styles.selected}`]: selected},
			className
		);
	return (
		<div styleName="option"  className={classes} 
				data-value={value} 
				data-group={group}
				{...rest}>
					{label}
					{children}
		</div>
	)
}

Option.propTypes = propTypes; 
Option.defaultProps = defaultProps;



export default CSSModules(Option, styles, {handleNotFoundStyleName: 'log'});