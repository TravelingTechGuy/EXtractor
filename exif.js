#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander'),
	package = require('./package');

var list = function(files) {
	var path = require('path'),
		paths = files.split(',');
	
	return paths.map(function(string) {
		string = string.trim();
		if (string.substr(0,1) === '~') {
    		return path.join(process.env.HOME, string.substr(1));
    	}
    	else {
    		return string;
    	}
	});
}

var getFiles = function(directory, recursive) {
	var fs = require('fs'),
		path = require('path'),
		files = fs.readdirSync(directory),
		toCheck = [];
	
	files.forEach(function(file) {
		if(file.match(/\.(?:jpe?g|png|gif)$/)) {
			toCheck.push(path.join(directory, file));
		}
	});
	return toCheck;
};

var getExif = function(files) {
	var exif = require('exif2');
	
	files.forEach(function(path) {
		exif(path, function(err, obj) {
			if(err) {
				console.log('Error: ', err);
			}
			else {
				console.log('Getting exif data for file %s:\n', path, obj);
			}
		});
	});
};

var main = function() {
	program
		.version(package.version)
		.usage('[options] <path>')
		.option('-f, --file <file,file,...>', 'Get exif data from file/s', list)
		.option('-d, --directory <path>', 'Get exif data from all files in directory')
		.option('-r, --recursive', 'Look for files in sub-directories')
		.parse(process.argv);

	if(program.file && program.file.length > 0) {
		getExif(program.file);	
	}

	if(program.directory) {
		console.log('Getting exif data for all files in: %s %s', program.directory, (program.recursive ? 'recursively' : ''));
		getExif(getFiles(program.directory, program.recursive));
	}
};

main();