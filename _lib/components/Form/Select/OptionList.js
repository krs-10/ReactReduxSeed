import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './select.css';

import Option from './Option';

const propTypes = {
	id: PropTypes.string.isRequired,
	options: PropTypes.array,
	active: PropTypes.object,
	multiple: PropTypes.bool,
	// showPlaceholder: PropTypes.bool
};

const defaultProps = {
	options: null, 
	active: {label: null, value: null}, 
	multiple: false,
	// showPlaceholder: false
};

const OptionGroup = (props) => {
	const { id, label, children, options, ...rest} = props; 
	return (
		<div className={styles.optgroup} data-type="optgroup" role="listbox" id={`${id}_optgroup`}>
			<div data-type="label" className={styles.groupLabel}>{label}</div>
			{children}
		</div>
	);
}

class OptionList extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps
	state = {}
	renderOptions = (options) => {
		const { id, multiple, active, optionRef, value, showPlaceholder, placeholder, ...rest } = this.props; 
		const optionsEl = options.map((option, index) => {
			const { label, value} = option; 
			if (option.options){
				return (
					<OptionGroup key={`optgroup-${index}`} id={id} label={label}>
						{this.renderOptions(option.options)}
					</OptionGroup>
				)
			}

			return (
				<Option 
					key={`opt-${index}-${value}`}
					id={id}
					position={index}
					label={label} 
					value={value}
					optionRef={optionRef}
					selected={active && value === active.value}
					{...rest} />
			)
		})
		return optionsEl; 
	}
	render(){
		const {id, active, options, children, className, placeholder, showPlaceholder, optionRef, ...rest} = this.props; 
		const classes = cx(
				className
			);
		return (
			<div styleName="list" data-type="list" className={classes} id={`${id}_list`} {...rest}>
				{(placeholder) && (
					<Option 
						key={`opt-placeholder-${placeholder}`}
						id={id}
						position={-1}
						label={placeholder} 
						value={null}
						optionRef={optionRef}
						data-placeholder={true}
						selected={active && active.position < 0}
						/>
				)}
				{this.renderOptions(options)}
			</div>
		)
	}
}





export default CSSModules(OptionList, styles, {handleNotFoundStyleName: 'log'});