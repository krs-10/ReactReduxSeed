import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './paragraph.css';

const Paragraph = (props) => {
	const {className, children, align, ...rest} = props; 
	const classes = cx(
		styles[align],
		className
	);
	return (
		<p styleName="root" className={classes}>
			{children}
		</p>
	)
};

const propTypes = {
	align: PropTypes.oneOf(['inherit', 'left', 'right', 'center', 'justify', 'justify-all'])
};

const defaultProps = {
	align: 'inherit'
}

Paragraph.propTypes = propTypes; 
Paragraph.defaultProps = defaultProps; 

export default CSSModules(Paragraph, styles, {handleNotFoundStyleName: 'log'});