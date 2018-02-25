import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';

import styles from './text-area.css';


const propTypes = {
	name: PropTypes.string.isRequired, 
	id: PropTypes.string.isRequired, 
	placeholder: PropTypes.string, 
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	error: PropTypes.bool
};

const defaultProps = {
	placeholder: null,
	required: false,
	disabled: false,
	error: false
}

class TextArea extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps 
	render(){
		const {className, children, error, ...rest} = this.props; 
		const classes = cx(
			// {[`${styles.error}`]: error},
			{'error': error},		
			className
		);
		return (
			<textarea styleName="root" className={classes} {...rest}></textarea>
		)
	}
	
};
export default CSSModules(TextArea, styles, {handleNotFoundStyleName: 'log'});