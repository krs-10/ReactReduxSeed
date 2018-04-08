const path = require('path');
const Variables = require('./src/styles/variables/index');
const Functions = require('./css.functions.js');

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
		// customProperties: { variables: customProperties, warnings: false},
		customProperties: false,
		nesting: false,
		customMedia: {extensions: Variables.MediaQueries},
	}
}

const postcssConfig = {
	from: './src/styles/app.css',
	to: './dist/styles.css',
	exec: true,
	plugins: {
		'postcss-discard-comments': {},
		'postcss-each': {},
		'postcss-for': {},
		'postcss-conditionals': {},
		'postcss-nesting': {},
		'postcss-nested': {},
		'postcss-custom-properties': {
			variables: Object.assign({}, Variables.Colors, Variables.Sizes, Variables.Easings),
			warnings: false, 
			preserve: 'computed'
		},
		'postcss-calc': {precision: 3}, 
		'postcss-custom-media': {extensions: Variables.MediaQueries},
		'postcss-media-minmax': {},
		'postcss-functions': {functions: Functions}
	}
}

// const postcssConfig = {
// 	from: './src/styles/app.css',
// 	to: './dist/styles.css',
// 	plugins: 
// 		[

// 			require('postcss-discard-comments'),
// 			require('postcss-each'),
// 			require('postcss-for'), 
// 			require('postcss-conditionals'),
// 			require('postcss-nesting'),
// 			require('postcss-nested'),
// 			require('postcss-custom-properties')({
// 				variables: {...require('./src/styles/variables/index')},
// 				warnings: false, 
// 				preserve: false
// 			}),
// 			require('postcss-calc')({precision: 3}), 
// 			require('postcss-custom-media')({extensions: Variables.MediaQueries}),
// 			require('postcss-media-minmax'),
// 			require('postcss-functions')({functions: Functions})
// 		]
// }

module.exports = postcssConfig; 