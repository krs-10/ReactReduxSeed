const path = require('path');
const Variables = require('./src/styles/variables/index');

const customProperties = Object.assign({}, Variables.Colors, Variables.Sizes, Variables.Easings);

const customPropertiesJSON = Object.entries(customProperties).reduce((total, curr, index) => {
	const keyval = { value: curr[1]};
	total[curr[0]] = curr[1].toString(); 
	return total; 
}, {});



const postcssConfig = module.exports = {
	// sourceMap: true,
	from: './src/styles/app.css',
	to: './dist/styles.css',
	plugins: {
		'postcss-url': {},
		'postcss-discard-comments': {},
		'postcss-each': {},
		'postcss-for': {},
		'postcss-conditionals': {},
		'postcss-nesting': {},
		'postcss-nested': {},
		'postcss-color-function': {},
		'postcss-custom-properties': {variables: customProperties, warnings: false},
		'postcss-custom-media': {extensions: Variables.MediaQueries},
		'postcss-media-minmax': {},
		'css-mqpacker': {},
		'cssnano': {}
	}
}