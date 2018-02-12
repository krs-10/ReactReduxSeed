import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './badge.css';



const propTypes = {
	status: PropTypes.oneOf(['info', 'success', 'warning', 'error', 'default'])
}

const defaultProps = { 
	status: 'default'
}

const Badge = (props) => {
	const {status, className, children, ...rest} = props; 
	const classes = cx(
		styles[status],
		className
	);
	return (
		<div styleName="root" className={classes}>
			{children}
		</div>
	)
};

Badge.propTypes = propTypes; 
Badge.defaultProps = defaultProps;

export default CSSModules(Badge, styles, {handleNotFoundStyleName: 'log'});