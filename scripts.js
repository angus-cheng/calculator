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
	switch(op) {
		case 'add': 
			return result = add(a, b);
		case 'subtract': 
			return result = subtract(a, b);
		case 'multiply':
			return result = multiply(a, b);
		case 'divide': 
			return result = divide(a, b);
		default: 
			return 'Enter an operand';
	}
}

const output = document.querySelector('.output');
const btns = Array.from(document.querySelectorAll('.grid > button'));

function outputTextContent(key) {
	switch(firstKey) {
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
			output.textContent = '';
			break;
	}
}

function btnHandler(event) {
	let firstKey, secondKey;
	if(firstKey == null) {
		firstKey = event.target.textContent
	} else if(secondKey == null) {
			secondKey = event.target.textContent;
		}
}

btns.forEach(btn => {
	btn.addEventListener('click', btnHandler);
});