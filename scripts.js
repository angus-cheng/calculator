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
	a = parseFloat(a);
	b = parseFloat(b);
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

function isNumeric(char) {
	return (/([0-9]|\.)/.test(char));
}

let statement = [0];
let prevKey;

/**
 * Parses key or button press and feeds into calculator
 * @param {any key or button press} key 
 * @returns 
 */
function calculate(key) {
	if (key === '=' && statement.length < 3) {
		output.textContent = statement[0];

	} else if (key === 'AC') {
		statement.splice(0, statement.length);
		statement.push(0);
		output.textContent = statement[0];

	// Check if operand or equals has been entered before
	} else if ((!isNumeric(key) && statement.length === 3) | key === '=') {
		let num1 = statement[0];
		let op = statement[1];
		let num2 = statement[2];
		let newNum = operate(num1, num2, op);
		statement.splice(0, statement.length, newNum);
		if (key !== '=') statement.push(key);
		output.textContent = newNum;
	
	// Check if key entered is an operand
	} else if (!isNumeric(key)) {
		statement.push(key);
		output.textContent = key;

	// Check if last keypress was an operand
	} else if (!isNumeric(statement[statement.length-1])) {
		statement.push(key);
		output.textContent = key;

	// Check if first number is 0
	}  else if (statement[0] === 0) {
		if (key === '0') {
			return;
		}
		statement[0] = key;
		output.textContent = key;

	// Check if there is already a decimal point in number
	}  else if (key === '.' && statement[statement.length-1].includes('.')){
		return;
	
	// Check if previous key was '=' to reset statement with new num
	} else if (prevKey == '=') {
		statement.splice(0, statement.length);
		statement[0] = key;
		output.textContent = key;

	// Append digit to current number
	} else {
		statement[statement.length-1] += key; 
		output.textContent += key;
	}

	prevKey = key;
}

function btnHandler(event) {
	let key = event.target.textContent;
	calculate(key);
}

btns.forEach(btn => {
	btn.addEventListener('click', btnHandler);
});

// Keystroke compatibility
document.addEventListener('keydown', logKey);

function logKey(e) {
	if (e.keyCode > 47 && e.keyCode < 58) {
		if (e.keyCode === 56 && e.shiftKey) {
			calculate('x');
		} else {
			calculate(e.keyCode);
		}

	}

	switch (e.keyCode) {
		case 191:
			calculate('/');
			break;

		case 88:
			calculate('x');
			break;

		case 61:
			if (e.shiftKey) {
				console.log('additon')
				calculate('+');
			} else {
				console.log('equals')
				calculate('=');
			}
			break;

		case 13:
			calculate('=');
			break;

		case 173:
			calculate('-');
			break;

		case 27: 
			calculate('AC');
			break;

		case 190:
			calculate('.');
			break;

		default:
			return;
	}
}