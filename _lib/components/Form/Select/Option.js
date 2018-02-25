import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './select.css';

const propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	label: PropTypes.string,
	selected: PropTypes.bool
};

const defaultProps = {
	value: null,
	selected: false
}

class Option extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps
	render(){
		const {children, className, id, label, value, selected, position, optionRef, options, ...rest} = this.props; 
		const classes = cx(
				{[`${styles.selected}`]: selected},
				className
			);
		return (
			<div 
				styleName="option"  
				className={classes} 
				data-type="option"
				ref={optionRef}
				id={`${id}_option-${position}`}
				data-position={`${position}`}
				data-value={`${value}`} 
				data-label={`${label}`}
				{...rest} >
					{label}
			</div>
		)
	}
}




export default CSSModules(Option, styles, {handleNotFoundStyleName: 'log'});