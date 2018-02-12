import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './link.css';

const propTypes = {
	path: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
	ariaLabel: PropTypes.string,
	target: PropTypes.oneOf(['__self', '__blank', '__parent', '__top'])

};

const defaultProps = {
	ariaLabel: 'Link',
	target: '__self'
}

const Link = (props) => {
	const {path, ariaLabel, children, target, ...rest} = props; 
	return (
		<a href={path} aria-label={ariaLabel} target={target} styleName="root" {...rest}>
			{children}
		</a>
	)
};

Link.propTypes = propTypes; 
Link.defaultProps = defaultProps; 


export default CSSModules(Link, styles, {handleNotFoundStyleName: 'log'});