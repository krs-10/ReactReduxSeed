// font-size = 
// 	calc(
// 		[fmin_unit] + ([fmax] - [fmin])
// 		* ((100vw - [vmin_unit]) / ([vmax] - [vmin]))
// 	);

// 	font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));


// 	font-size: calc(2.494rem + 1.471vw)

// font_unit / (viewport_font_unit * 0.01); 

const round = (value, decimal = 3) => {
	const rounded = Number.parseFloat(+value).toFixed(decimal);
	return rounded; 
}

const strip = (value) => {
	// const stripped = value.replace(/\D/g, "");
	const stripped = value.replace(/[A-Z]/gi, "");
	return stripped; 
}


const convert = (value, to) => {
	if (!value || !to) return value; 
	// const test = /(\d+)([A-Z].+)/gi.exec(value); 


	// const [, +num = value, unit = false] = test;
	// console.log("hi - num, unit :", num, unit);
	// switch unit {
	// 	case 'rem': 
	// 		if (to === 'px') 
	// }
	return value; 
}

const vfont = (fmin, fmax, vmin, vmax) => {
	let fmin_strip = +strip(fmin), 
		fmax_strip = +strip(fmax),
		vmin_strip = +strip(vmin),
		vmax_strip = +strip(vmax);

	// const test = /(\d+)([A-Z].+)/gi;
	// const hasUnit = /[A-Z].+/gi; 
	// let f_unit = '', v_unit = ''; 
	// if (fmin.match(hasUnit)){
	// 	if ()
	// }
	const f_strip = (fmax_strip * 0.01) - (fmin_strip * 0.01); 
	const v_strip = (vmax_strip * 0.01) - (vmin_strip * 0.01);

	const test1 = (100 - vmin_strip) / v_strip; 
	const resolved = round(((100 - (vmin_strip * 0.01)) / v_strip) * (f_strip));

	const format_resolved = `calc(${fmin} + ${resolved}vw)`; 
	return format_resolved; 
}

module.exports = {
	round: round, 
	strip: strip, 
	vfont: vfont, 
	convert: convert
};

