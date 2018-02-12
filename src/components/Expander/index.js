import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './expander.css';

import Icon from 'components/Icon';

const propTypes = {
	title: PropTypes.string,
	ariaLabel: PropTypes.string, 
	active: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
};

const defaultProps = {
	title: 'Collapsible Section',
	ariaLabel: 'Collapsible Section',
	active: false
}

class Expander extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps
	state = {open: this.props.active || false}
	handleToggle = (event) => {
		// console.log("Expander handle toggle - event :", event);
		this.setState({open: !this.state.open});
		if (this.props.onClick) this.props.onClick(event, this.state);
	}
	handleKeyDown = (event) => {
		if (event.which && event.which === 13 || event.which === 32){
			this.setState({open: !this.state.open}); 
		}
		if (this.props.onKeyDown) this.props.onKeyDown(event, this.state);
	}
	render(){
		const {children, className, active, title, ariaLabel, ...rest} = this.props; 
		const classes = cx(
				{[`${styles.closed}`]: !this.state.open},
				className
			);
		return (
			<article aria-label={ariaLabel} className={classes} styleName="root" {...rest}>
				<div 
					role="tab"
					tabIndex="0"  
					aria-expanded={open.toString()} 
					onClick={this.handleToggle} 
					onKeyPress={this.handleKeyDown} 
					styleName='header'>
					<button tabIndex="-1" styleName="button">
						<Icon name='expand' />
					</button>
					<span styleName="title">{title}</span>
				</div>
				<div styleName="content">
					{children}
				</div>
			</article>
		)
	}
}



export default CSSModules(Expander, styles, {handleNotFoundStyleName: 'log'});