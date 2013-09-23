#!/usr/bin/env node

'use strict'

var list = function(files) {
	var path = require('path');
	return files.split(',').map(function(string) {
		string = string.trim();
		return (string.substr(0,1) === '~') ? path.join(process.env.HOME, string.substr(1)) : string;
	});
};

var getImageFilesInDirectory = function(directory, recursive) {
	var fs = require('fs'),
		path = require('path'),
		result = [];
	
	if(recursive) {
		var wrench = require('wrench');
		wrench.readdirSyncRecursive(directory).forEach(function(file) {
			if(file.match(/\.(?:jpe?g|png|gif)$/)) {
				result.push(path.join(directory, file));
			}
		});
	}
	else {
		fs.readdirSync(directory).forEach(function(file) {
			if(file.match(/\.(?:jpe?g|png|gif)$/)) {
				result.push(path.join(directory, file));
			}
		});
	}
	return result;
};

var getExifData = function(file, callback) {
	var exif = require('exif2');
	
	exif(file, function(err, obj) {
		var result = {
			file: file
		};
		if(err) {
			result.error = err;
		}
		else {
			result.exif = obj;
		}
		callback(null, result);
	});
};

var processResults = function(results) {
	//this function will handle all the results
	//you can potentially save them to a database, or do something with them
	console.log(results);
};

var main = function() {
	var program = require('commander'),
		async = require('async'),
		version = require('./package').version,
		files = [];

	program
		.version(version)
		.usage('[options] <path>')
		.option('-f, --file <file,file,...>', 'Get EXIF data from file/s', list)
		.option('-d, --directory <path>', 'Get EXIF data from all files in directory')
		.option('-r, --recursive', 'Look for files in sub-directories')
		.parse(process.argv);

	if(program.file && program.file.length > 0) {
		files = program.file;
	}

	if(program.directory) {
		console.log('Getting exif data for all files in: %s %s', program.directory, (program.recursive ? 'recursively' : ''));
		files = getImageFilesInDirectory(program.directory, program.recursive);
	}

	async.map(files, 
		function(file, callback) {
			getExifData(file, callback);
		},
		function(error, result) {
			processResults(result);
		}
	);
};

main();