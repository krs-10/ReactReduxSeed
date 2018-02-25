import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './grid.css';


const aligns = ['top', 'middle', 'bottom', 'baseline', 'stretch', null];
const justifies = ['start', 'end', 'center', 'around', 'between', 'evenly', null];
const alignsWrapped = ['start', 'end', 'center', 'stretch', 'around', 'between', null]; 

const oneOfChecker = (against, props, name, component) => {
	let prop = props[name], passes; 
	if (!prop && prop !== null) return false; 
	let item = Array.isArray(prop) ? item : [item];
	passes = against.some(x => item.includes[x]);
	return passes; 
}

const propTypes = {
	align: (...args) => { oneOfChecker(aligns, ...args)},
	justify: (...args) => { oneOfChecker(justifies, ...args)},
	alignWrapped: (...args) => { oneOfChecker(alignsWrapped, ...args)},
	nowrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]),
	vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)]), 
	reverse: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.bool)])
}

const defaultProps = {
	justify: null,
	align: null,
	alignWrapped: null,
	nowrap: false,
	vertical: false,
	reverse: false,
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
		return template; 
	}
	const classes = Object.assign({}, 
			{[bpTemplate('sm', sm)] : sm},
			{[bpTemplate('md', md)] : md},
			{[bpTemplate('lg', lg)] : lg},
		); 
	return classes; 
}

const Row = (props) => {
	const {className, children, align, justify, alignWrapped, nowrap, inner, vertical, reverse, ...rest} = props; 
	const cxb = cx.bind(styles);

	const boundClasses = cxb(
		Responsive(align, {format: align, multiformat: align }),
		Responsive(justify, {format: justify, multiformat: justify }),
		Responsive(alignWrapped, {format: `wrapped-${alignWrapped}`, multiformat: 'wrapped-' }),
		Responsive(vertical, {format: 'vertical', override: 'vertical' }),
		Responsive(reverse, {format: 'reverse', override: 'reverse' }),
		Responsive(nowrap, {format: 'nowrap', override: 'nowrap' }),
		Responsive(inner, {format: 'inner', override: 'inner' })
	);

	const classes = cx(
		boundClasses,
		className
	);

	return (
		<div styleName="row" className={classes} {...rest}>
			{children}
		</div>
	)
}




Row.propTypes = propTypes; 
Row.defaultProps = defaultProps; 

export default CSSModules(Row, styles, {handleNotFoundStyleName: 'log'});