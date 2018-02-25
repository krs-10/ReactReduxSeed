import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import styles from './popover.css';

const positions = ['top', 'bottom', 'left', 'right'];

const propTypes = {
	title: PropTypes.string, 
	content: PropTypes.any,
	position: PropTypes.oneOf(positions),
	hoverable: PropTypes.bool, 
	active: PropTypes.bool
};

const defaultProps = {
	position: 'top',
	hoverable: true,
	active: false
}

class Popover extends Component{
	static propTypes = propTypes
	static defaultProps = defaultProps
	render() {
		const {children, className, position, hoverable, active, title, content, ...rest} = this.props;
		const cxb = cx.bind(styles);
		const containerClasses = cxb(
			{'hoverable': hoverable}
		);
		const popoverClasses = cxb(
			{'active': active},
			position
		);

		const classes = cx(containerClasses, className);
		return (
			<div styleName="container" className={classes} {...rest}>
				{children}
				<div styleName="root" className={popoverClasses}>
					<div styleName="header">{title}</div>
					<div styleName="content">{content}</div>
				</div>
			</div>
		)
	}}



export default CSSModules(Popover, styles, {handleNotFoundStyleName: 'log'});