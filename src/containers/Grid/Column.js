import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './grid.css';

const colSizes = [1,2,3,4,5,6,7,8,9,10,11,12];
const colSizesStr = colSizes.map(String);
const sizes = [...colSizes, ...colSizesStr, null];
const offsets = ['left', 'right', null];
const orders = ['first', 'last', null];

console.log("COLUMN STYLES: ", styles);

const oneOfChecker = (against, props, name, component) => {
	let prop = props[name], passes; 
	if (!prop && prop !== null) return false; 
	let item = Array.isArray(prop) ? item : [item];
	passes = against.some(x => item.includes[x]);
	return passes; 
}

const propTypes = {
	/* Processed as [sm, md, lg]; put 'null' to skip a breakpoint (e.g., [12, null, 6]) */
	size: (...args) => { oneOfChecker(sizes, ...args)},
	/* Processed as [sm, md, lg]; put 'null' to skip a breakpoint (e.g., [12, null, 6]) */
	offset: (...args) => {oneOfChecker(offsets, ...args)},
	order: (...args) => {oneOfChecker(orders, ...args)},
	sm: PropTypes.oneOf(sizes),
	md: PropTypes.oneOf(sizes),
	lg: PropTypes.oneOf(sizes),
	// order: PropTypes.oneOf([PropTypes.number, null])
}

const defaultProps = {
	size: null,
	sm: null, 
	md: null, 
	lg: null,
	offset: null,
	order: null
}


const Responsive = (props=false, {format = false, multiformat = false, override = false} = {}) => {
	if ((!format && !props) || (!format && !multiformat)) return false; 
	if (!Array.isArray(props)){
		return { [format]: props };
	}
	let [sm=false, md=false, lg=false] = props; 
	const bpTemplate = (bp, val) => {
		const template = override 
		? `${bp}-${override}` 
		: `${bp}-${multiformat || ''}${val}`;
		console.log("hi - template :", template);
		return template; 

	}
	const classes = Object.assign({}, 
			{[bpTemplate('sm', sm)] : sm},
			{[bpTemplate('md', md)] : md},
			{[bpTemplate('lg', lg)] : lg},
		); 
	return classes; 
}

const Column = (props) => {
	const {className, children, size, sm, md, lg, offset, order, ...rest} = props; 
	const cxb = cx.bind(styles);

	const boundClasses = cxb(
		Responsive(offset, {format: `offset-${offset}`, multiformat: 'offset-'}),
		Responsive(order),
		// Responsive(size, {format: `size-${size}`, multiformat: 'size-'})
		{[`size-${size}`]: size},
		{[`sm-size-${sm}`]: sm},
		{[`md-size-${md}`]: md},
		{[`lg-size-${lg}`]: lg}
	);



	const classes = cx( boundClasses, className);
	return (
		<div styleName="column" className={boundClasses} {...rest}>
			{children}
		</div>
	)
}

Column.propTypes = propTypes; 
Column.defaultProps = defaultProps; 

export default CSSModules(Column, styles, {handleNotFoundStyleName: 'log'});