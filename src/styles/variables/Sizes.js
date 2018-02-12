const FONT_SIZE = 15; 
const SPACING_SIZE = 10;
const LINE_HEIGHT = 21;

const FONT_SCALE = LINE_HEIGHT / FONT_SIZE; 
const SCALE_MULTIPLIER = 3; 
const SCALE_HEIGHT = LINE_HEIGHT * 3; 
const VERTICAL_RHYTHM = SCALE_HEIGHT * FONT_SCALE; 

const MEDIA_MAX = 1280;
const MEDIA_DESKTOP = 1024; 
const MEDIA_TABLET = 768;
const MEDIA_MOBILE = 480;

const H1 = 30; 
const H2 = 22; 
const H3 = 18; 
const H4 = 15; 
const H5 = 13; 
const H6 = 10;
const P = 15; 



const setRhythm = (size, lineHeight = FONT_SCALE, spacing = SPACING_SIZE) => {
	let lh = +(lineHeight).toFixed(3);
	let lhs = lh * spacing;
	let s = +((size * lh) + lhs).toFixed(3);
	const finalRhythm = (Math.round((s / lhs)) * Math.round(lhs)) / 10;
	return finalRhythm; 
}

const Sizes = module.exports = {

	"base-font-size": `${FONT_SIZE}px`,
	// "line-height": +(LINE_HEIGHT/FONT_SIZE).toFixed(1),
	"line-height": 1.4,
	"root-html-percentage": `${(SPACING_SIZE / 16) * 100}%`,
	"root-font-size": `${FONT_SIZE / SPACING_SIZE}rem`,

	"h1": `${H1/SPACING_SIZE}rem`, 
	"h2": `${H2/SPACING_SIZE}rem`, 
	"h3": `${H3/SPACING_SIZE}rem`, 
	"h4": `${H4/SPACING_SIZE}rem`, 
	"h5": `${H5/SPACING_SIZE}rem`, 
	"h6": `${H6/SPACING_SIZE}rem`, 
	"p": `${P/SPACING_SIZE}rem`, 

	"h1-space": `${setRhythm(H1)}rem`,
	"h2-space": `${setRhythm(H2)}rem`,
	"h3-space": `${setRhythm(H3)}rem`,
	"h4-space": `${setRhythm(H4)}rem`,
	"h5-space": `${setRhythm(H5)}rem`,
	"h6-space": `${setRhythm(H6)}rem`,
	"p-space": `${setRhythm(P)}rem`,

	"size": "1rem", 
	"size-half": "0.5rem",
	"size-third": `${1/3}rem`,
	"size-quarter": "0.25rem",
	"size-double": "2rem", 
	"size-triple": "3rem", 

	"ease-out-quad": "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
	"ease-in-quad": "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
	"bp-max": `${MEDIA_MAX}px`,
	"bp-desktop": `${MEDIA_DESKTOP}px`,
	"bp-tablet": `${MEDIA_TABLET}px`,
	"bp-mobile": `${MEDIA_MOBILE}px`
}



// export default Sizes; 



