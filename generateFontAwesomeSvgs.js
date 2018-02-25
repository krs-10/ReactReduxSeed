const fs = require('fs');
const path = require('path');
const fontBlast = require('font-blast');
const svgstore = require('svgstore');
const xml2js = require('xml2js');


const fontFile = 'node_modules/font-awesome/fonts/fontawesome-webfont.svg';
const destDir = '_lib/assets/icons';
const iconDir = path.join(destDir, 'svg');

const sprites = svgstore();

const compileIcons = () => {
	
	try { fs.accessSync(iconDir) }
	catch (e) { fs.mkdirSync(iconDir) }
	const files = fs.readdirSync(iconDir);

	files.forEach((file, index) => {
		const inputFile = path.resolve(__dirname, iconDir, file);
		sprites.add(
			path.basename(file, '.svg'), 
			fs.readFileSync(inputFile));
	});
	
	// fs.unlinkSync(path.join(destDir, 'verify.html'));
	fs.writeFileSync(path.join(destDir, 'symbols.svg'), sprites);
}

fontBlast(fontFile, destDir)
	.then((args) => {
		return compileIcons();
	})
	.catch((err) => {
		console.log("error converting FontAwesome svg files ", err);
	})

