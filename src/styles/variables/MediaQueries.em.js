const MEDIA_MAX = (1280 / 15);
const MEDIA_DESKTOP = (1024 / 15); 
const MEDIA_TABLET = (600 / 15);
const MEDIA_MOBILE = (480 / 15);

const MediaQueries = module.exports = {
	"--desktop": `(width >= ${MEDIA_DESKTOP}em)`,
	"--tablet": `(width > ${MEDIA_TABLET}em)`,
	"--tablet-range": `(width >= ${MEDIA_MOBILE}em) and (width <${MEDIA_DESKTOP}em)`,
	"--mobile": `(width > ${MEDIA_MOBILE}em)`
};