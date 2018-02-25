import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import styles from './input.css';


const propTypes = {
	name: PropTypes.string.isRequired, 
	id: PropTypes.string.isRequired, 
	type: PropTypes.string,
	placeholder: PropTypes.string, 
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	prefix: PropTypes.string, 
	suffix: PropTypes.string
};

const defaultProps = {
	type: 'text',
	placeholder: null,
	required: false,
	disabled: false,
	error: false,
	prefix: null, 
	suffix: null
}

class Input extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps
	render(){
		const {className, children, id, error, prefix, suffix, disabled,  ...rest} = this.props; 
		const classes = cx(
			{ 'error': error },
			{ 'disabled': disabled },

			// {[`${styles.error}`]: error},
			// {[`${styles.disabled}`]: disabled},
			className
		);

		return (
				<div styleName="wrapper" >
					<input id={id} styleName="input" className={classes} disabled={disabled}  {...rest} />
					{prefix && <span styleName="prefix">{prefix}</span>}
					{suffix && <span styleName="suffix">{suffix}</span>}
				</div>
		)
	}
	
};

export default CSSModules(Input, styles, {handleNotFoundStyleName: 'log'});