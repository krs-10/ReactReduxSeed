const MEDIA_MAX = (1280 / 16);
const MEDIA_DESKTOP = (1024 / 16); 
const MEDIA_TABLET = (600 / 16);
const MEDIA_MOBILE = (480 / 16);

const Sizes = require('./Sizes');
// const max = Sizes['bp-max'], 
// 	desktop = Sizes['bp-desktop'],
// 	tablet = Sizes['bp-tablet'],
// 	mobile = Sizes['bp-mobile'];

const max = '80em', 
	desktop = '64em',
	tablet = '37em',
	mobile = '30em';

const MediaQueries = module.exports = {
	"--desktop": `(width >= ${desktop})`,
	"--tablet": `(width > ${tablet})`,
	"--tablet-range": `(width >= ${mobile}) and (width <${desktop})`,
	"--mobile": `(width > ${mobile})`
};
