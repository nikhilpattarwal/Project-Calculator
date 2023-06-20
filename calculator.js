var buttons = document.getElementsByClassName("button");
var screen = document.getElementById("screen");

var operand1 = null;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    var value = this.getAttribute('data-value');

    if (value === '+') {
      performPendingOperation();
      operator = '+';
      screen.innerText = "";
    } else if (value === '-') {
      performPendingOperation();
      operator = '-';
      screen.innerText = "";
    } else if (value === '/') {
      performPendingOperation();
      operator = '/';
      screen.innerText = "";
    } else if (value === '*') {
      performPendingOperation();
      operator = '*';
      screen.innerText = "";
    } else if (value === '%') {
      operator = '%';
      operand1 = parseFloat(screen.textContent);
      var result = operand1 / 100;
      screen.innerText = result;
      operand1 = parseFloat(screen.innerText);
      operand2 = null;
      operator = null;
    } else if (value === '=') {
      performPendingOperation();
      operator = null;
    } else if (value === 'AC') {
      operand1 = null;
      operand2 = null;
      operator = null;
      screen.innerText = "";
    } else {
      screen.innerText += value;
    }
  });
}

function performPendingOperation() {
  if (operator !== null && operand1 !== null && screen.textContent !== "") {
    operand2 = parseFloat(screen.textContent);
    var result;
    if (operator === '+') {
      result = operand1 + operand2;
    } else if (operator === '-') {
      result = operand1 - operand2;
    } else if (operator === '*') {
      result = operand1 * operand2;
    } else if (operator === '/') {
      result = operand1 / operand2;
    }
    operand1 = result;
    operator = null;
    screen.innerText = result;
  } else if (operand1 === null && screen.textContent !== "") {
    operand1 = parseFloat(screen.textContent);
  }
}
