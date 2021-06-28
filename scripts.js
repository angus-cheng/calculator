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

function isNumeric(char) {
	return (/([0-9]|\.)/.test(char));
}

let statement = [0];

function btnHandler (event) {
	let key = event.target.textContent;
	if (key === '=' && statement.length < 3) {
		output.textContent = statement[0];
	}

	// Check if operand has been entered before
	else if ((!isNumeric(key) && statement.length === 3) | key === '=') {
		let num1 = statement[0];
		let op = statement[1];
		let num2 = statement[2];
		let newNum = operate(num1, num2, op);
		statement.splice(0, statement.length, newNum);
		statement.push(key);
		output.textContent = newNum;
	
	// Check if key entered is an operand
	} else if (!isNumeric(key)) {
		statement.push(key);
		output.textContent = key;
		console.log('operand');

	// Check if last keypress was an operand
	} else if (!isNumeric(statement[statement.length-1])) {
		statement.push(key);
		output.textContent = key;
		console.log('new num');

	// Check if first number is 0
	}  else if (statement[0] === 0) {
		statement[0] = key;
		output.textContent = key;

	// Check if there is already a decimal point in number
	}  else if (key === '.' && statement[statement.length-1].includes('.')){
		return;
	
	// Append digit to current number
	} else {
		statement[statement.length-1] += key; 
		output.textContent += key;
		console.log('prev num');
	}
}

btns.forEach(btn => {
	btn.addEventListener('click', btnHandler);
});