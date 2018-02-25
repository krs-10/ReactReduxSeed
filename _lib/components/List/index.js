import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './list.css';

const propTypes = {
	format: PropTypes.oneOf(['ordered', 'unordered', 'plain'])
};

const defaultProps = {
	format: 'unordered'
}

const ListItem = (props) => {
	const {children, className, ...rest} = props; 
	const classes = cx(
		styles.item, 
		className
	);

	return <li className={classes} {...rest}>{children}</li>;
}

const List = (props) => {
	const {format, children, className, ...rest} = props; 
	const classes = cx(
		styles[format],
		className
	);

	const Element = format === 'ordered' 
		? <ol {...rest} className={classes} styleName="root">{children}</ol>
		: <ul {...rest} className={classes} styleName="root">{children}</ul>;

	return Element; 
}

List.Item = ListItem; 

List.propTypes = propTypes; 
List.defaultProps = defaultProps; 

export default CSSModules(List, styles, {handleNotFoundStyleName: 'log'});

