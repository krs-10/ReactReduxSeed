import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import styles from './select.css';

import Option from './Option';
import OptionList from './OptionList';
import Icon from 'components/Icon';

const propTypes = {
	name: PropTypes.string.isRequired, 
	id: PropTypes.string.isRequired, 
	options: PropTypes.array.isRequired,
	initialOption: PropTypes.object,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	multiple: PropTypes.bool,
	placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};


const defaultProps = {
	initialOption: null,
	required: false,
	disabled: false,
	error: false,
	multiple: false,
	placeholder: null
}



class Select extends Component{
	static propTypes = propTypes
	static defaultProps = defaultProps 
	state = {
		active: this.props.initialOption,
		open: false,
		position: null,
		showPlaceholder: !this.props.placeholder && this.props.initialOption
	}
	setOptionRefs = (el) => {
		if (!this.optionEl) this.optionEl = [];
		if (el) this.optionEl.push(el);
	}
	handleBlur = (event, open) => {
		this.setState({open: false});
		if (this.props.onBlur) this.props.onBlur(event, this.state);
	}
	handleKeyPress = (event) => {
		// console.log("this.optionEl: ", this.optionEl);
	}
	handleToggle = (event, open) => {
		event.stopPropagation();
		if (event && !this.props.disabled){
			const { target: { dataset: {
				type, value, label, placeholder, position
			}} = {dataset: { 
				type: null, value: null, label: null, placeholder: false, position: null
			}}} = event; 

			let newActive = (type === "option") 
				? { label: label, value: Number(value) || value, position: Number(position) || position }
				: this.state.active;

			// console.log("type :", type);
			// console.log("is placeholder :", placeholder);
			// console.log("newActive :", newActive);
			// console.log("before state :", this.state);

			this.setState({
				open: !this.state.open,
				active: newActive,
				showPlaceholder: placeholder,
				position: newActive && newActive.position
			});
			// console.log("after state :", this.state);
			// console.log("==============================================");
		}
		if (this.props.onClick) this.props.onClick(event, this.state);
	}

	render(){
		const {id, error, disabled, options, placeholder, multiple, initialOption, className, children,  ...rest} = this.props; 
		const { open, active, showPlaceholder } = this.state; 
		const classes = cx(
			{'error': error},
			{'disabled': disabled},
			{[`${styles.open}`]: open},
			className
		);
		return (
			<div 
				id={id}
				styleName="root" 
				tabIndex="0" 
				role="listbox" 
				className={classes} 
				onKeyDown={this.handleKeyPress}
				onClick={this.handleToggle} 
				onBlur={this.handleBlur}
				{...rest}>
					<Icon name="expand" styleName="button" />
					<input 
						styleName="input" 
						role="combobox" 
						type="hidden"
						data-type="input" 
						aria-owns={open && active && active.value} 
						id={`${id}_input`} 
						value={active && active.value || ''}
					/>
					<div data-type="placeholder" styleName="label">{(active) ? active.label : placeholder}</div>
					<OptionList 
						optionRef={this.setOptionRefs}
						placeholder={placeholder}
						showPlaceholder={showPlaceholder}
						id={id}
						disabled={disabled} 
						active={active} 
						options={options} 
						multiple={multiple} />
			</div>
		)
	}
}

Select.Option = Option; 
Select.OptionList = OptionList; 

export default CSSModules(Select, styles, {handleNotFoundStyleName: 'log'});