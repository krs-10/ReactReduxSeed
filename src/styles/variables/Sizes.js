
const round = (num, fix = 3) => {
	const rounded = Number.parseFloat(+num).toFixed(fix);
	return rounded; 
}


const ramp = (min, max, min_base, max_base, lh, rem) => {
	lh = +lh,
	min = +min, 
	max = +max,
	min_base = +min_base, 
	max_base = +max_base;

	const diff = max_base / min_base; 
	const min_lh = round(lh * min_base);
	const max_lh = round(lh * max_base);

	let multiplier = Math.ceil(min / min_lh);
	if (multiplier > 1){
		multiplier = (lh * multiplier) < min ? multiplier : lh; 
	}
	if (min_lh < min) multiplier = multiplier * lh; 

	let lineHeight = round((min_lh / min) * multiplier); 
	if (min > min_base && lineHeight > lh ) lineHeight = lineHeight / lh;

	const finalRamp = { min: min, max: max, lh: `${round(lineHeight)}` };
	return finalRamp; 
}


const getRem = (size, rem, string = true) => {
	size = +size, rem = +rem;
	const remRounded = round(size / rem);
	const remFinal = string ? `${remRounded}rem` : (remRounded);
	return remFinal; 
};


const getFluidFont = (s1, s2, v1, v2) => {
	s1 = +s1, s2 = +s2, v1 = +v1, v2 = +v2;  
	const first = round(s2 - s1); 
	const second = round(v2 - v1); 
	const format_first = `${s1}rem + (${first})`; 
	const format_second = `((100vw - ${v1}rem)/ ${second})`; 
	const fluidFont = `calc(${format_first} * ${format_second})`; 

	return {
		min: `${s1}rem`, 
		max: `${s2}rem`,
		fluid: fluidFont.toString(), 
	}
}


const FONT = 16; 
// const FONT = 36; 
const FONT_MAX = 18; 
const LINE_HEIGHT = 1.4;
const LINE_HEIGHT_MAX = 1.6; 
const LINE_HEIGHT_MIN = 1.2; 
const PX_LINE_HEIGHT = round(FONT * LINE_HEIGHT);
const SPACING = 10;

const MEDIA_MAX = 1280;
const MEDIA_DESKTOP = 1024; 
const MEDIA_TABLET = 600;
const MEDIA_MOBILE = 480;

const MIN_FONT = getRem(round(FONT), SPACING, false);
const MAX_FONT = getRem(round(FONT_MAX), SPACING, false);

const MIN_VIEWPORT = getRem(round(MEDIA_MOBILE), SPACING, false);
const MAX_VIEWPORT = getRem(round(MEDIA_DESKTOP), SPACING, false);

const FLUID_FONT = getFluidFont(MIN_FONT, MAX_FONT, MIN_VIEWPORT, MAX_VIEWPORT);


const H1F = ramp(3.2, 4, MIN_FONT, MAX_FONT, LINE_HEIGHT, SPACING); 
const H2F = ramp(2.4, 3.2, MIN_FONT, MAX_FONT, LINE_HEIGHT, SPACING); 
const H3F = ramp(2, 2.4, MIN_FONT, MAX_FONT, LINE_HEIGHT, SPACING); 
const H4F = ramp(1.8, 2, MIN_FONT, MAX_FONT, LINE_HEIGHT, SPACING); 
const H5F = ramp(1.2, 1.4, MIN_FONT, MAX_FONT, LINE_HEIGHT, SPACING); 
const H6F = ramp(1.0, 1.2, MIN_FONT, MAX_FONT, LINE_HEIGHT, SPACING); 
const PF = ramp(1.6, 1.8, MIN_FONT, MAX_FONT, LINE_HEIGHT, SPACING); 

const H1 = getFluidFont(H1F.min, H1F.max, MIN_VIEWPORT, MAX_VIEWPORT);
const H2 = getFluidFont(H2F.min, H2F.max, MIN_VIEWPORT, MAX_VIEWPORT);
const H3 = getFluidFont(H3F.min, H3F.max, MIN_VIEWPORT, MAX_VIEWPORT);
const H4 = getFluidFont(H4F.min, H4F.max, MIN_VIEWPORT, MAX_VIEWPORT);
const H5 = getFluidFont(H5F.min, H5F.max, MIN_VIEWPORT, MAX_VIEWPORT);
const H6 = getFluidFont(H6F.min, H6F.max, MIN_VIEWPORT, MAX_VIEWPORT);
const P = getFluidFont(PF.min, PF.max, MIN_VIEWPORT, MAX_VIEWPORT);

const RHYTHM = 15; 
const SPACING_MOBILE = 30; 
const GUTTER_MOBILE = 15;
const PAGE_GUTTER_MOBILE = 20; 


const RHYTHM_DESKTOP = 20; 
const SPACING_DESKTOP = 50; 
const GUTTER_DESKTOP = 20;
const PAGE_GUTTER_DESKTOP = 40; 


const Sizes = module.exports = {

	"base-font-size": `${FONT}px`,
	"line-height": `${LINE_HEIGHT}`,
	"line-height-max": `${LINE_HEIGHT_MAX}`,
	"line-height-min": `${LINE_HEIGHT_MIN}`,
	"root-font-size-percentage": `${(SPACING / 16) * 100}%`,
	"root-font-size": FLUID_FONT.min,
	"root-font-size-max": FLUID_FONT.max,
	"root-font-size-fluid": FLUID_FONT.fluid,

	"h1": H1.min, 
	"h2": H2.min, 
	"h3": H3.min, 
	"h4": H4.min, 
	"h5": H5.min, 
	"h6": H6.min, 
	"p": P.min,

	"h1-lh": H1F.lh, 
	"h2-lh": H2F.lh, 
	"h3-lh": H3F.lh, 
	"h4-lh": H4F.lh, 
	"h5-lh": H5F.lh, 
	"h6-lh": H6F.lh, 
	"p-lh": PF.lh, 

	"h1-fluid": H1.fluid, 
	"h2-fluid": H2.fluid, 
	"h3-fluid": H3.fluid, 
	"h4-fluid": H4.fluid, 
	"h5-fluid": H5.fluid, 
	"h6-fluid": H6.fluid, 
	"p-fluid": P.fluid,

	"h1-max": H1.max, 
	"h2-max": H2.max, 
	"h3-max": H3.max, 
	"h4-max": H4.max, 
	"h5-max": H5.max, 
	"h6-max": H6.max, 
	"p-max": P.max,

	"size": "1rem", 
	"size-half": "0.5rem",
	"size-third": `${1/3}rem`,
	"size-quarter": "0.25rem",
	"size-double": "2rem", 
	"size-triple": "3rem", 


	"spacing-desktop":  getRem(SPACING_DESKTOP, SPACING),
	"spacing-mobile": getRem(SPACING_MOBILE, SPACING),

	"gutter-desktop":  getRem(GUTTER_DESKTOP, SPACING),
	"gutter-mobile":  getRem(GUTTER_MOBILE, SPACING), 

	"gutter-margin-desktop":  getRem(-GUTTER_DESKTOP, SPACING),
	"gutter-margin-mobile":  getRem(-GUTTER_MOBILE, SPACING),

	"page-gutter-desktop": getRem(PAGE_GUTTER_DESKTOP, SPACING),
	"page-gutter-mobile": getRem(PAGE_GUTTER_MOBILE, SPACING),

	"rhythm-mobile": getRem(RHYTHM, SPACING),
	"rhythm-desktop": getRem(RHYTHM_DESKTOP, SPACING),

	"vw-max": `${MAX_VIEWPORT}rem`,
	"vw-min": `${MIN_VIEWPORT}rem`,

	// "bp-max": `${round(MEDIA_MAX / 16)}em`, 
	// "bp-max-rem": getRem(MEDIA_MAX, SPACING),
	// "bp-desktop": `${round(MEDIA_DESKTOP / 16)}em`, 
	// "bp-tablet": `${round(MEDIA_TABLET / 16)}em`, 
	// "bp-mobile": `${round(MEDIA_MOBILE / 16)}em`, 

	"bp-max": `${80}em`, 
	"bp-max-rem": getRem(MEDIA_MAX, SPACING),
	"bp-desktop": `${64}em`, 
	"bp-tablet": `${37}em`, 
	"bp-mobile": `${30}em`, 

	"ease-out-quad": "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
	"ease-in-quad": "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
}




