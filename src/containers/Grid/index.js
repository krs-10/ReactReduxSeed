import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './grid.css';

import Row from './Row';
import Column from './Column';


const Grid = (props) => {
	const { className, children, ...rest} = props; 
	const classes = cx( 
		className
	);

	return (
		<div styleName="grid" className={classes} {...rest}>
			{children}
		</div>
	)
};


Grid.Row = Row; 
Grid.Column = Column;

export default CSSModules(Grid, styles, {handleNotFoundStyleName: 'log'});