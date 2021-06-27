function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(a, b, op) {
	a = parseInt(a);
	b = parseInt(b);
	switch(op) {
		case '+': 
			return result = add(a, b);
		case '-': 
			return result = subtract(a, b);
		case 'x':
			return result = multiply(a, b);
		case '/': 
			return result = divide(a, b);
		default: 
			return 'Enter an operand';
	}
}

const output = document.querySelector('.output');
const btns = Array.from(document.querySelectorAll('.grid > button'));

function displayKey(key) {
	switch(key) {
		case '0':
			output.textContent = '0';
			break;
		case '1':
			output.textContent = '1';
			break;
		case '2':
			output.textContent = '2';
			break;
		case '3':
			output.textContent = '3';
			break;
		case '4':
			output.textContent = '4';
			break;
		case '5':
			output.textContent = '5';
			break;
		case '6':
			output.textContent = '6';
			break;
		case '7':
			output.textContent = '7';
			break;
		case '8':
			output.textContent = '8';
			break;
		case '9':
			output.textContent = '9';
			break;
		case '+':
			output.textContent = '+';
			break;
		case '-':
			output.textContent = '-';
			break;
		case 'x':
			output.textContent = 'x';
			break;
		case '/':
			output.textContent = '/';
			break;
		case '=':
			output.textContent = '=';
			break;
		case 'AC':
			output.textContent = '0';
			break;
	}
}

let statement = [0];

function isNumeric(char) {
	return (/([0-9]|\.)/.test(char));
}

function appendToDisplay(key) {
	output.textContent += key;
}

/*
	let key = event.target.textContent
	if (key === 'AC') {
		for (let property in statement) {
			delete statement[property];
		}
		displayKey(key);
	}  else if (key === '.' && statement.firstKey.includes(key)) {
		return;
	}
	else if (key === '.' && !statement.firstKey.includes(key)) {
		statement.firstKey += key;
		console.log(key);
		appendToDisplay(key);
	} else if (statement.firstKey == null && isNumeric(key)) {
		statement.firstKey = key;
		displayKey(key);
	}  else if (statement.firstKey == null && !isNumeric(key)) {
		statement.firstKey = 0;
		statement.secondKey = key;
		appendToDisplay(key);
	}  else if (statement.firstKey != null && (isNumeric(key) || (!isNaN(parseFloat(key)))) && statement.secondKey == null) {
		statement.firstKey += key;
		appendToDisplay(key);
	} else if (statement.secondKey == null) {
		statement.secondKey = key;
		appendToDisplay(key);
	} else if (statement.thirdKey == null) {
		statement.thirdKey = key;
		output.textContent = `${operate(statement.firstKey, statement.thirdKey, statement.secondKey)}`;
	} else {
		return;
	}
}
*/

function btnHandler (event) {
	let key = event.target.textContent;
	if (!isNumeric(key)) {
		statement.push(key);
		output.textContent = key;
		console.log('operand');
	} else if (!isNumeric(statement[statement.length-1])) {
		statement.push(key);
		console.log('new num');
	}  else if (statement[0] === 0) {
		statement[0] = key;
		output.textContent = key;
	}  else if (key === '.' && statement[statement.length-1].includes('.')){
		return;
	}
	else {
		statement[statement.length-1] += key; 
		appendToDisplay(key);
		console.log('prev num');
	}
}

btns.forEach(btn => {
	btn.addEventListener('click', btnHandler);
});