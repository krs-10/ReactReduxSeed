const MEDIA_MAX = 1280;
const MEDIA_DESKTOP = 1024; 
const MEDIA_TABLET = 600;
const MEDIA_MOBILE = 480;

const MediaQueries = module.exports = {
	"--desktop": `(width >= ${MEDIA_DESKTOP}px)`,
	"--tablet": `(width > ${MEDIA_TABLET}px)`,
	"--tablet-range": `(width >= ${MEDIA_MOBILE}px) and (width <${MEDIA_DESKTOP}px)`,
	"--mobile": `(width > ${MEDIA_MOBILE}px)`
};
