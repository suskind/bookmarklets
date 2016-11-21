
var fs = require('fs');
var UglifyJS = require('uglify-js');



var args = process.argv;
if(args.length < 3) {

    console.log('Error...'); 
    console.log('$ node build.js <file_path.js>');
    process.exit(1);
}

args = args.slice(2);

fs.access(args[0], fs.constants.R_OK, function(err) {

    if(err) {
        console.log('Error... No read access!');
        console.log('$ node build.js <file_path.js>');
        process.exit(1);
    }

    var result = UglifyJS.minify(args[0]);

    console.log('');
    console.log('HTML bookmarklet tag:');
    console.log('');
    console.log('<a href=\'javascript:void('+result.code+')\' onclick="return false;">Add to bookmarks</a>');
    console.log('');

    console.log('------ ');

    console.log('');
    console.log('Add to bookmarks:');
    console.log('');
    console.log('javascript:void('+ result.code +')');
    console.log('');

});

