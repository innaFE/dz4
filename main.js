const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout(alphabet) {
	let arrAlphabet = alphabet.split('');
	let keyboardTop = arrAlphabet.filter((arr, i) => i >= arrAlphabet.indexOf("q") && i <= arrAlphabet.indexOf("]"));
	let keyboardMid = arrAlphabet.filter((arr, i) => i >= arrAlphabet.indexOf("a") && i <= arrAlphabet.indexOf("'"));
	let keyboardBot = arrAlphabet.filter((arr, i) => i >= arrAlphabet.indexOf("z") && i <= arrAlphabet.indexOf("/"));
	let keyboard = [keyboardTop, keyboardMid, keyboardBot];
	return keyboard;
}

function getRandCharInRow(row, addKeyboardLayout) {
	let rowIndex = row - 1;
	let elemIndex = Math.floor(Math.random() * keyboard[rowIndex].length);
	return keyboard[rowIndex][elemIndex];
}

function getRandCharInAlph(keyboard) {
	addKeyboardLayout(keyboard);
	let rowIndex = Math.floor(Math.random() * keyboard.length) - 1;
	let elemIndex = Math.floor(Math.random() * keyboard[rowIndex].length);
	return keyboard[rowIndex][elemIndex];
}

getRandCharInRow(row)
getRandCharInAlph(keyboard)
