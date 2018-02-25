import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import Panel from './Panel.js';
import styles from './accordion.css';


const propTypes = {
	/**  Aria Label for Accordion */
	ariaLabel: PropTypes.string,
	/** Initial index of open panel */
	active: PropTypes.oneOfType([
		PropTypes.string, 
		PropTypes.number,
		PropTypes.oneOf([
			false, 
			null
		])
	])
}


const defaultProps = { active: false }

class Accordion extends Component {
	state = { 
		s_active: this.props.active,
		s_open: Number.isInteger(+this.props.active)
	}
	static propTypes = propTypes
	static defaultProps = defaultProps 
	handlePanelClick = (event, position) => {
		const {s_active: active, s_open: open } = this.state; 
		this.setState({
			s_active: position,
			s_open: active !== position || !open
		});
		if (this.props.onClick) this.props.onClick(event, this.state);
	}
	handlePanelKeyDown = (event, position) => {
		if (event.which && event.which === 13 || event.which === 32){
			const {s_active: active, s_open: open } = this.state; 
			this.setState({
				s_active: position,
				s_open: active !== position || !open
			});
		}
		if (this.props.onKeyDown) this.props.onKeyDown(event, this.state);
	}
	generatePanels = (children) => {
			return React.Children.map(children, (child, index) => {
				return React.cloneElement(child, {
					open: this.state.s_active === index && this.state.s_open,
					position: index,
					ariaLabel: `panel_${index}`,
					onClick: ((e) => this.handlePanelClick(e, index)),
					onKeyDown: ((e) => this.handlePanelKeyDown(e, index))
				});  
		});
	}
	render() {
		const {children, className, ariaLabel, active, ...rest} = this.props;
		const classes = cx( className );
		return (
		    <section styleName="root" role="tablist" aria-label={ariaLabel} {...rest}>
		    	{this.generatePanels(children)}
		    </section>
		)
	}
}

Accordion.Panel = Panel;


export default CSSModules(Accordion, styles, {handleNotFoundStyleName: 'log'});
