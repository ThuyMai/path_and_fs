'use strict';
var fs = require('fs');

var processData = process.argv;
var fileName = processData[2];
var dirName = processData[3];

fs.readdir(dirName, function (err, listFile) {
    var result = false;
    listFile.forEach(function (file) {
        if (file.toString() == fileName)
            result = true;
    });
    if (result == true)
        console.log(fileName + " is found");
    else
        console.log(fileName + " not found");
});