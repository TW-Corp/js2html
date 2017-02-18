// js2html

/* Changelog:
	Version 1.1: If Id is none, the Id of the new element will be nothing.
*/
function createP(text, where, id) {
	var newParagraph = document.createElement('p');
	var newTextNode = document.createTextNode(text);
	newParagraph.appendChild(newTextNode);
	if (id !== '') {
		newParagraph.id = id;
	} 
	if (id === '') {
		newParagraph.id = '';
	}
	document.getElementById(where).appendChild(newParagraph);
}

function createDiv(id, where) {
	var newDiv = document.createElement('div');
	newDiv.id = id;
	document.getElementById(where).appendChild(newDiv);
}

function createH3(text, where, id) {
	var newH3 = document.createElement('h3');
	var newTextNode = document.createTextNode(text);
	newH3.appendChild(newTextNode);
	if (id !== '') {
		newH3.id = id;
	}
	document.getElementById(where).appendChild(newH3);
}