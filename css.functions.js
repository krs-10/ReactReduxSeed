

// const fluid = ()

// $min_width: 400;
// $max_width: 800;

// $min_font: 12;
// $max_font: 24; 

// :root { font-size: #{$min_font}px; }

// @media (min-width: #{$min_width}px) and (max-width: #{$max_width}px) {
//   :root { 
//     font-size: calc(#{$min_font}px + (#{$max_font} - #{$min_font}) * ( (100vw - #{$min_width}px) / ( #{$max_width} - #{$min_width})));
//   }
// }
// @media (min-width: #{$max_width}px) {
//   :root { 
//     font-size: #{$max_font}px;
//   }
// }

const strip = (value = "") => {

	const stripped = `"${value}"`.replace(/[A-Z]/gi, "");
	return stripped; 
}

const fluid = (s1, s2, v1 = 48, v2 = 102.4) => {
	s1 = +s1, s2 = +s2, v1 = +v1, v2 = +v2;  
	// s1 = strip(s1), 
	// s2 = strip(s2), 
	// v1 = strip(v1), 
	// v2 = strip(v2); 
	const first = round(+s2 - +s1); 
	const second = round(+v2 - +v1);
	const format_first = `${s1}rem + (${first})`; 
	const format_second = `((100vw - ${v1}rem)/ ${second})`; 
	const fluidFont = `calc(${format_first} * ${format_second})`; 
	// return {
	// 	min: `${s1}rem`, 
	// 	max: `${s2}rem`,
	// 	fluid: fluidFont.toString(), 
	// }
	return fluidFont.toString();
}

const round = (value, decimal = 3) => {
	const rounded = Number.parseFloat(+value).toFixed(decimal);
	return rounded; 
}




const vfont = (fmin, fmax, vmin, vmax) => {
	let fmin_strip = +strip(fmin), 
		fmax_strip = +strip(fmax),
		vmin_strip = +strip(vmin),
		vmax_strip = +strip(vmax);

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
	fluid: fluid
};

