// require("@babel/polyfill");
 
const DefaultColors = {
	"white": "#ffffff",
	"gray-1": "#F4F6F6", 
	"gray-2": "#EAEDED", 
	"gray-3": "#D5DBDB", 
	"gray-4": "#AAB7B8", 
	"gray-5": "#92AFB3", 
	"blue-1": "#EBF8FA", 
	"blue-2": "#82D8E3", 
	"blue-3": "#36C2B4", 
	"blue-4": "#01A4BA", 
	"blue-5": "#008296", 
	"blue-6": "#015A66",
	"blue-7": "#00464F", 
	"blue-8": "#373E3E", 
	"blue-9": "#002E36", 
	"blue-10": "#232F3E",
	"blue-11": "#007CB6",
	"green-1": "#ADE422", 
	"green-2": "#2C7A47", 
	"green-3": "#46B746",
	"yellow-1": "#fff3cc",
	"yellow-2": "#FFC400",
	"yellow-3": "#AD6403",
	"orange-1": "#ffe7e1",
	"orange-2": "#FF6138",
	"red-1": "#CF3535",
	"pink-1": "#A90067", 
}

const Custom = {
	"white": "#FFFFFF",
	"blue-cerulean": "#00A8E1",
	"blue-deep-cerulean": "#007CB6",
	"blue-ebony-clay": "#232F3E",
	"blue-deep-teal": "#002E36",
	"blue-trout": "#4e5864",
	"green-inch-worm": "#ADE422",
	"green-apple": "#46B746",
	"gray-haze": "#EAEDED",
	"gray-tower": "#AAB7B8"
}

const ThemeColors = {
	"color-body": `${Custom['blue-ebony-clay']}`,
	"background-body": `${Custom.white}`,

	"background-section-primary": `${Custom['blue-trout']}`,
	"color-section-primary": `${Custom.white}`,

	"background-section-secondary": `${Custom['gray-haze']}`,
	"color-section-secondary": `${Custom['blue-deep-teal']}`,

	"background-button-primary": `${Custom['blue-cerulean']}`,
	"color-button-primary": `${Custom.white}`,
	"border-button-primary": `${Custom['blue-ebony-clay']}`, 
	"background-button-primary-hover": `inherit`,
	"color-button-primary-hover": `inherit`,
	"border-button-primary-hover": `inherit`, 
	"background-button-primary-disabled": `inherit`,
	"color-button-primary-disabled": `inherit`,
	"border-button-primary-disabled": `inherit`, 

	"color-button-secondary": `${Custom['blue-cerulean']}`,
	"background-button-secondary": `${Custom.white}`, 
	"border-button-secondary": `${Custom['blue-ebony-clay']}`,
	"background-button-secondary-hover": `inherit`,
	"color-button-secondary-hover": `inherit`,
	"border-button-secondary-hover": `inherit`, 
	"background-button-secondary-disabled": `inherit`,
	"color-button-secondary-disabled": `inherit`,
	"border-button-secondary-disabled": `inherit`, 

	"background-button-tertiary": `${Custom['green-inch-worm']}`,
	"color-button-tertiary": `${Custom['blue-ebony-clay']}`,
	"border-button-tertiary": `${Custom['green-apple']}`, 
	"background-button-tertiary-hover": `inherit`,
	"color-button-tertiary-hover": `inherit`,
	"border-button-tertiary-hover": `inherit`, 
	"background-button-tertiary-disabled": `inherit`,
	"color-button-tertiary-disabled": `inherit`,
	"border-button-tertiary-disabled": `inherit`, 

	"background-nav": `${Custom['blue-ebony-clay']}`, 
	"color-nav": `${Custom.white}`, 
	"color-nav-active": `${Custom['blue-cerulean']}`,
	"border-nav-active": `${Custom['blue-cerulean']}`,

	"fill-icon-outer": `${Custom['blue-deep-cerulean']}`,
	"fill-icon-inner": `${Custom['blue-cerulean']}`,

	"color-link": `${Custom['blue-deep-cerulean']}`, 
	"color-link-hover": "inherit", 
	"color-link-visited": "inherit"
}

const CompiledColors = {
	...Custom, 
	...ThemeColors
};

const Colors = module.exports = { 
	...CompiledColors
}






