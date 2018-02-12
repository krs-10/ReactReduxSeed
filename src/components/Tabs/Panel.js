import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './tabs.css';

const Panel = (props) => {
	const {className, children, active, title, ...rest} = props; 
	const classes = cx(
		className,
		{[`${styles.active}`]: active},
	);
	return (
		<div styleName="panel" role="tabpanel" id={`tab-${title}`} className={classes}>
			{children}
		</div>
	)
};

const propTypes = { title: PropTypes.string.isRequired };
const defaultProps = {};

Panel.propTypes = propTypes; 
Panel.defaultProps = defaultProps; 

export default CSSModules(Panel, styles, {handleNotFoundStyleName: 'log'});