import styles from 'styles/grid.css';

const aligns = ['top', 'middle', 'bottom', 'baseline', 'stretch', null];
const justifies = ['start', 'end', 'center', 'around', 'between', 'evenly', null];
const alignsWrapped = ['start', 'end', 'center', 'stretch', 'around', 'between', null]; 

const oneOfChecker = (against, props, name, component) => {
	console.log("==============================================");
	// console.log("Row.js oneOfChecker - against, props, name, component :", against, props, name, component);
	console.log("against: ", against);
	console.log("props :", props);
	console.log("name: ", name);
	let prop = props[name], passes; 
	console.log("props[name], passes :", props[name], passes);
	console.log("prop: ", prop); 
	if (!prop && prop !== null) return false; 
	let item = Array.isArray(prop) ? item : [item];
	console.log("item: ", item);
	passes = against.some(x => item.includes[x]);
	return passes; 
}

const propTypes = {
	// align: (...args) => { oneOfChecker(aligns, ...args)},
	// justify: (...args) => { oneOfChecker(justifies, ...args)},
	// alignWrapped: (...args) => { oneOfChecker(alignsWrapped, ...args)},
	// nowrap: PropTypes.oneOfType([PropTypes.oneOf([true, false, 'true', 'false']), PropTypes.arrayOf(PropTypes.oneOf([true, false, 'true', 'false']))]),
	// horizontal: PropTypes.oneOfType([PropTypes.oneOf([true, false, 'true', 'false']), PropTypes.arrayOf(PropTypes.oneOf([true, false, 'true', 'false']))]), 
	// vertical: PropTypes.oneOfType([PropTypes.oneOf([true, false, 'true', 'false']), PropTypes.arrayOf(PropTypes.oneOf([true, false, 'true', 'false']))]), 
	// reverse: PropTypes.oneOfType([PropTypes.oneOf([true, false, 'true', 'false']), PropTypes.arrayOf(PropTypes.oneOf([true, false, 'true', 'false']))]),
	// inline: PropTypes.oneOfType([PropTypes.oneOf([true, false, 'true', 'false']), PropTypes.string]),
	// collapse: PropTypes.oneOfType([PropTypes.oneOf([true, false, 'true', 'false']), PropTypes.string]),
}

const defaultProps = {
	justify: null,
	align: null,
	alignWrapped: null,
	nowrap: false,
	vertical: false,
	horizontal: false, 
	reverse: false,
	inline: false,
	collapse: false
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
	const {className, children, align, justify, alignWrapped, nowrap, inner, collapse, tight, vertical, horizontal, reverse, inline, ...rest} = props; 
	const cxb = cx.bind(styles);

	const boundClasses = cxb(
		Responsive(align, {format: align}),
		Responsive(justify, {format: justify, multiformat: false }),
		Responsive(alignWrapped, {format: `wrapped-${alignWrapped}`, multiformat: 'wrapped-' }),
		Responsive(horizontal, {format: 'horizontal', override: 'horizontal' }),
		Responsive(vertical, {format: 'vertical', override: 'vertical' }),
		Responsive(reverse, {format: 'reverse', override: 'reverse' }),
		Responsive(nowrap, {format: 'nowrap', override: 'nowrap' }),
		Responsive(inner, {format: 'inner', override: 'inner' }),
		Responsive(inline, {format: 'inline', override: 'inline' }),
		Responsive(collapse, {format: 'collapse', override: 'collapse' }),
		Responsive(tight, {format: 'tight', override: 'tight' }),
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