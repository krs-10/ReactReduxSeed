import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './button.css';

const Group = (props) => {
	const { children, ...rest } = props; 
	return (
		<div styleName="group" {...rest}>
			{children}
		</div> 
	)
}
export default CSSModules(Group, styles, {handleNotFoundStyleName: 'log'});