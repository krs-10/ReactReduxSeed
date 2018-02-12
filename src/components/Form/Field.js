import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './form.css';

const Field = (props) => {
	const {className, children, label, id, errorMessage, infoMessage,  ...rest} = props; 
	const classes = cx(
		className
	);
	return (
		<div styleName="field" className={classes} {...rest}>
			{label && <label htmlFor={id} styleName="label">{label}</label>}
			{children}
			{infoMessage &&  <span styleName="infoMessage">{infoMessage}</span>}
			{errorMessage &&  <span styleName="errorMessage">{errorMessage}</span>}
		</div>
	)
};

const propTypes = {
	id: PropTypes.string,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	errorMessage: PropTypes.oneOfType([
		PropTypes.string, PropTypes.element, PropTypes.oneOf([false, null])
	]),
	infoMessage: PropTypes.oneOfType([
		PropTypes.string, PropTypes.element, PropTypes.oneOf([false, null])
	]),
	tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

const defaultProps = {
	label: null
};

Field.propTypes = propTypes; 
Field.defaultProps = defaultProps; 


export default CSSModules(Field, styles, {handleNotFoundStyleName: 'log'});