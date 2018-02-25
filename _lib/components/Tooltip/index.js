import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import styles from './tooltip.css';

const positions = ['top', 'bottom', 'left', 'right'];

const propTypes = {
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

class Tooltip extends Component{
	static propTypes = propTypes
	static defaultProps = defaultProps
	render() {
		const {position, hoverable, active, content, children, className, ...rest} = this.props;
		const cxb = cx.bind(styles);
		const containerClasses = cxb(
			{'hoverable': hoverable}
		);
		const TooltipClasses = cxb(
			{'active': active},
			position
		);

		const classes = cx(containerClasses, className);
		return (
			<div styleName="container" className={classes} {...rest}>
				{children}
				<div styleName="root" className={TooltipClasses}>
					{content}
				</div>
			</div>
		)
	}}



export default CSSModules(Tooltip, styles, {handleNotFoundStyleName: 'log'});