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

function btnHandler (event) {
	let key = event.target.textContent;
	if (key === '=' && statement.length < 3) {
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

btns.forEach(btn => {
	btn.addEventListener('click', btnHandler);
});