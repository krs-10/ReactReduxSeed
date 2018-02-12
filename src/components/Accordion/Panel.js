import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './accordion.css';

import Icon from 'components/Icon';

const propTypes = {
		open: PropTypes.bool,
		position: PropTypes.number,
		onToggle: PropTypes.func
};

const defaultProps = {
	open: false
}

const Panel = (props) => {
	const {open, position, title, children, className, ariaLabel, onClick, onKeyDown, ...rest} = props; 
	const classes = cx(
			{[`${styles.closed}`]: !open},
			className
		);
	
	return (
		<article aria-label={ariaLabel} className={classes} styleName="panel" {...rest}>
			<div 
				role="tab" 
				styleName='header' 
				tabIndex="0" 
				aria-expanded={open.toString()} 
				onClick={onClick}
				onKeyDown={onKeyDown}
			>
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

Panel.propTypes = propTypes; 
Panel.defaultProps = defaultProps;



export default CSSModules(Panel, styles, {handleNotFoundStyleName: 'log'});