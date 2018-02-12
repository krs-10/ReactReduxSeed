import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import styles from './checkBox.css';

const propTypes = {
	name: PropTypes.string.isRequired, 
	id: PropTypes.string.isRequired, 
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	placeholder: PropTypes.string, 
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	defaultChecked: PropTypes.bool
};

const defaultProps = {
	label: 'Default Label',
	placeholder: null,
	required: false,
	disabled: false,
	error: false,
	defaultChecked: false
}

class CheckBox extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps
	
	render(){
		const {className, children, id, error, label,...rest} = this.props; 
		const classes = cx(
			{[`${styles.error}`]: error},
			className
		);
		return (
			<div styleName="root">
				<input id={id} className={classes} type="checkbox" {...rest} />
				<label styleName="label" htmlFor={id}>{label}</label>
			</div>
		)
	}
};


export default CSSModules(CheckBox, styles, {handleNotFoundStyleName: 'log'});