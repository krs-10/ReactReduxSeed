import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './tag.css';

import Icon from 'components/Icon';

const propTypes = {
	status: PropTypes.oneOf(['info', 'success', 'warning', 'error', 'default']),
	show: PropTypes.bool,
	label: PropTypes.string,
	small: PropTypes.bool
};

const defaultProps = {
	status: 'default',
	show: true,
	small: false,
	label: 'Tag'
}

class Tag extends Component{
	static propTypes = propTypes
	static defaultProps = defaultProps
	state = {open: true}
	handleClose = () => {
		this.setState({open: false});
	}
	render() {
		const {children, status, show, small, label, className, ...rest} = this.props;
		const {open} = this.state; 
		const dismissable = status !== 'default';
		const classes = cx(
		    styles[status],
		    {[`${styles.small}`]: small},
		    {[`${styles.closed}`]: (!open || !show)},
		    className
		);
		return (
			<div aria-label={`Dismiss ${label}`} styleName="root" className={classes} {...rest}>
				{dismissable &&
					<button styleName='button' onClick={this.handleClose} aria-label={`Close ${status} Tag`}>
						<Icon name="close" />
					</button>
				}
				{children}
			</div>
		)
	}
}


export default CSSModules(Tag, styles, {handleNotFoundStyleName: 'log'});