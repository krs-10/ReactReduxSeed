import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './alert.css';

import Icon from 'components/Icon';

const propTypes = {
     status: PropTypes.oneOf(['success', 'warning', 'error', 'default']),
     dismissable: PropTypes.bool,
     label: PropTypes.string,
     show: PropTypes.bool,
     onClick: PropTypes.func
};

const defaultProps = {
	status: 'default',
	dismissable: false,
    show: true,
    onClick: ((e) => e)
}


class Alert extends Component {
	state = {show: true}
	static propTypes = propTypes
	static defaultProps = defaultProps
	handleClick = (event) => {
		this.setState({show: false});
	}
	render() {
		const {children, status, dismissable, label, className, ...rest} = this.props;
		const role = dismissable ? "alert" : "alertdialog";
		const classes = cx(
		    styles[status],
		    {[`${styles.dismissable}`]: dismissable},
		    {[`${styles.closed}`]: (dismissable && (!this.state.show))},
		    className
		);
		return (
		    <div className={classes} role={role} aria-live="assertive">
		        {dismissable &&
		            <button styleName='button' onClick={this.handleClick} aria-label={`Close ${status} Message`}>
		            	<Icon name="close" />
		            </button>
		        }
		        {children}
		    </div>
		)
	}
}

export default CSSModules(Alert, styles, {handleNotFoundStyleName: 'log'});
