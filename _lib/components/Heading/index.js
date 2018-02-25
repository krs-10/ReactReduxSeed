import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './heading.css';

const Heading = (props) => {
	const {className, children, tag: Element, sub, align, ...rest} = props; 
	const classes = cx(
		styles[Element],
		styles[align],
		className
	);
	return (
		<Element styleName="root" className={classes} {...rest}>
			{children}
		</Element>
	)
};

const propTypes = {
	tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
	align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
	sub: PropTypes.bool, 
};

const defaultProps = {
	tag: 'h1',
	align: 'left',
	sub: false
}

Heading.propTypes = propTypes; 
Heading.defaultProps = defaultProps;

export default CSSModules(Heading, styles, {handleNotFoundStyleName: 'log'});