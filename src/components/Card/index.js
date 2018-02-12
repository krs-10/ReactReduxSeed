import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './card.css';

import Icon from 'components/Icon';

const propTypes = {
	status: PropTypes.oneOf(['success', 'warning', 'error', 'default']),
	title: PropTypes.string.isRequired
};

const defaultProps = {
	status: 'default'
}

const Card = (props) => {
	const {className, children, status, plain, title, ...rest} = props; 
	const classes = cx(
		styles[status],
		className
	);
	const iconName = status === 'warning' || status === 'error' ? status : false; 
	return (
		<div styleName="root" className={classes}>
			<div styleName="header">
					<span styleName="title">{title}</span>
					{(iconName) && <Icon styleName='icon' name={iconName} /> }
		     </div>
			<div styleName="content">
				{children}
			</div>
		</div>
	)
};

Card.propTypes = propTypes; 
Card.defaultProps = defaultProps; 

export default CSSModules(Card, styles, {handleNotFoundStyleName: 'log'});