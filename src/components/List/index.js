import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './list.css';

import { Icon } from 'components'; 

const propTypes = {
	format: PropTypes.oneOf(['ordered', 'unordered', 'plain', 'checked']),
	collapsed: PropTypes.oneOf([true, false, 'true', 'false'])
};

const defaultProps = {
	format: 'unordered', 
	collapsed: false
}

const ListItem = (props) => {
	const {children, className, ...rest} = props; 
	const classes = cx(
		styles.item, 
		className
	);

	return <li className={classes} {...rest}>{children}</li>;
}

const formatCheckedItems = (children) => {

	return React.Children.map(children, (child, index) => {		
		return (
			<div key={`listitem${index}`} className={styles.checkedItem}>
				<span className={styles.icon}><Icon name="check" /></span>
				{child}
			</div>
		) 
	})
}


const List = (props) => {
	const {format, collapsed, children, className, ...rest} = props; 
	const classes = cx(
		styles[format],
		{[`${styles.collapsed}`]: collapsed},
		className
	);

	const Element = format !== 'ordered' 
		? <ul {...rest} className={classes} styleName="root">{formatCheckedItems(children)}</ul>
		: <ol {...rest} className={classes} styleName="root">{children}</ol>;

	return Element; 
}

List.Item = ListItem; 

List.propTypes = propTypes; 
List.defaultProps = defaultProps; 

export default CSSModules(List, styles, {handleNotFoundStyleName: 'log'});

