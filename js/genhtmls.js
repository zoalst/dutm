/*
	Author: Zachary Stenger
	run node genhtmls.js to generate htmls for dutm website
	auto-generates index.html (dutm home page) 
	and an example page for each dutm function
*/

var fs = require('fs');


var funcList = ['noise','angryComputer','fax','wobbly',
      'unknown','bird','abrasive','laser','interference'];
createAllHTMLFiles(funcList);
createIndexHTMLFile(funcList);


function createHTMLFile(func) {
	var output;
	output = '\<\!doctype html\>\n\<html lang\="en"\>\n\<head\>\n\t\<title\>\n';
	output += '\t\t'+func;
	output += '\n\t\</title\>\n\t\<meta charset\="utf\-8"\>\n\t\<meta name\="viewport" content\="width\=device\-width, user\-scalable\=no, minimum\-scale\=1\.0, maximum\-scale\=1\.0"\>\n';
	output += '\</head\>\n';
	output += '\<body\>\n\t';
	output += 'did you know...\n\t\<br\>\n\tyou can go back by pressing alt+←\n\t\<br\>\n\t?\n';
	output += '\t\<script src\="../js/riffwave.js"\>\</script\>\n\t\<script type\=\'text/javascript\' src\=\'../js/dutm.js\'\>\</script\>\n';
  output += '\t\<script\>\n\t\tdutm.';
	output +=  func;
	output += '\(\);\n\t\</script\>\n\</body\>\n\</html\>\n';
	//console.log(output);
	return output;
}

function createAllHTMLFiles(funcs) {
	var output;
	for(var func in funcs) {
		output = createHTMLFile(funcs[func]);
		fs.writeFile('../examples/'+funcs[func]+'.html', output, function (err) {
  		if (err) throw err;
  		console.log('It\'s saved!');
		});
	}
}

function createIndexHTMLFile(funcs) {
	var output;
	output = '\<\!doctype html\>\n\<html lang\="en"\>\n\<head\>\n\t\<title\>\n';
	output += '\t\tdutm!';
	output += '\n\t\</title\>\n\t\<meta charset\="utf\-8"\>\n\t\<meta name\="viewport" content\="width\=device\-width, user\-scalable\=no, minimum\-scale\=1\.0, maximum\-scale\=1\.0"\>\n';
	output += '\</head\>\n';
	output += '\<body\>\n\tdid you know...\n\t\<br\>\n\tyou can select things by using tab and then pressing enter?\n\t\<br\>\n';
	output += '\tcan you visit every page in silence?\n\t\<br\>\n';
	for(var func in funcs) {
		output += '\t\<a href\="examples/'+funcs[func]+'.html"\>'+funcs[func]+'\</a\>\n\t\<br\>\n';
	}
	output += '\t\<a href\="https://github.com/zacharystenger/dutm"\>github\</a\>\n\t\<br\>\n';
	output += '\t\<script src\="js/riffwave.js"\>\</script\>\n\t\<script type\=\'text/javascript\' src\=\'js/dutm.js\'\>\</script\>\n';
  output += '\t\<script\>\n\t\tdutm.angryComputer\(\);\n\t\tdutm.unknown\(\);\n\t\</script\>\n';
	output += '\</body>\n\</html\>\n';
	console.log(output);
	fs.writeFile('../index.html', output, function (err) {
  	if (err) throw err;
  	console.log('It\'s saved!');
	});
}