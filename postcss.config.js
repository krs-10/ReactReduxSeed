const path = require('path');
const Variables = require('./src/styles/variables/index');

const customProperties = Object.assign({}, Variables.Colors, Variables.Sizes, Variables.Easings);

const customPropertiesJSON = Object.entries(customProperties).reduce((total, curr, index) => {
	const keyval = { value: curr[1]};
	total[curr[0]] = curr[1].toString(); 
	return total; 
}, {});

const postcssNext = {
	browsers: ['last 3 versions'],
	features: {
		calc: {precision: 3},
		customProperties: { variables: customProperties, warnings: false},
		nesting: false,
		customMedia: {extensions: Variables.MediaQueries},
	}
}

const postcssConfig = module.exports = {
	from: './src/styles/app.css',
	to: './dist/styles.css',
	plugins: {
		'postcss-discard-comments': {},
		'postcss-each': {},
		'postcss-for': {},
		'postcss-conditionals': {},
		'postcss-nesting': {},
		'postcss-nested': {},
		'postcss-cssnext': postcssNext,
	}
}