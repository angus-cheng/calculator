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

const statement = new Object();

function isNumeric(val) {
	return /^-?\d+$/.test(val.toString());
}

function appendToDisplay(key) {
	output.textContent += key;
}

function btnHandler(event) {
	let key = event.target.textContent
	if (key === 'AC') {
		for (let key in statement) {
			delete statement[key];
		}
		displayKey(key);
	} else if (statement.firstKey == null && isNumeric(key)) {
		statement.firstKey = key;
		displayKey(key);
	}  else if (statement.firstKey == null && !isNumeric(key)) {
		statement.firstKey = 0;
		statement.secondKey = key;
		appendToDisplay(key);
	}  else if (statement.firstKey != null && isNumeric(key) && statement.secondKey == null) {
		statement.firstKey += key;
		appendToDisplay(key);
	} else if (statement.secondKey == null) {
		statement.secondKey = key;
		appendToDisplay(key);
	} else if (statement.thirdKey == null) {
		statement.thirdKey = key;
		output.textContent = `${operate(statement.firstKey, statement.thirdKey, statement.secondKey)}`;
	}
}

btns.forEach(btn => {
	btn.addEventListener('click', btnHandler);
});