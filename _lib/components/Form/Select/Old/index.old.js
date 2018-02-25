import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import styles from './select.css';

import Option from './Option';
import Icon from 'components/Icon';

const propTypes = {
	name: PropTypes.string.isRequired, 
	id: PropTypes.string.isRequired, 
	defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	options: PropTypes.array.isRequired,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	multiple: PropTypes.bool
};

console.log("Select Styles: ", styles);

const defaultProps = {
	defaultValue: null,
	required: false,
	disabled: false,
	error: false,
	multiple: false
}

class Select extends Component{
	static propTypes = propTypes
	static defaultProps = defaultProps 
	state = { 
		active: this.props.defaultValue,
		value: this.props.defaultValue,
		open: false
	}
	handleBlur = (event, open) => {
		this.setState({open: false});
	}
	handleToggle = (event, open) => {
		const { target, currentTarget } = event;
		event.stopPropagation();
		let newActive = target.id; 
		if (!(target.dataset.option)) newActive = this.state.active; 
		this.setState({
			open: !this.state.open,
			active: newActive,
			value: target.dataset.value
		});

		// console.log("=============================");
	}
	renderOptions = (opts, optgroup=false) => {
		const {defaultValue} = this.props; 
		const optionGroup = opts.map((option, index) => {
			let suboptions;
			const {id = option, 
					   value = option, 
					   label = option, 
					   group = optgroup,
					   options,
					   ...rest} = option; 
			if (options){
				suboptions = this.renderOptions(options, true);
			}
			const selected = id === this.state.active; 
			return (
				<Option 
					key={index} 
					id={id}  
					value={value} 
					label={label} 
					data-option={!(optgroup)}
					aria-selected={selected}
					selected={selected} 
					{...rest}>
					 	{suboptions}
				 </Option>
			)
		})
		return optionGroup;
	}
	render(){
		const {id, error, disabled, options, className, children,  ...rest} = this.props; 
		const { open, active, value } = this.state; 
		const classes = cx(
			// {[`${styles.error}`]: error},
			// {[`${styles.disabled}`]: disabled},
			{'error': error},
			{'disabled': disabled},
			{[`${styles.open}`]: this.state.open},
			className
		);

		return (
			<div 
				styleName="root" 
				onClick={(e) => this.handleToggle(e, true)}
				onBlur={(e) => this.handleBlur(e)}
				tabIndex="0"
				role="listbox" className={classes} {...rest}>
					<Icon name="expand" styleName="button" />
					<input styleName="input" role="combobox" aria-owns={open && active} id={`select-${id}`} value={value} />
					{this.renderOptions(options)}
			</div>
		)
	}
}

Select.Option = Option; 

export default CSSModules(Select, styles, {handleNotFoundStyleName: 'log'});