let resultField = document.getElementById("result");

function appendValue(value) {
  resultField.value += value;
}

function clearResult() {
  resultField.value = "";
}

function calculate() {
  try {
    const expression = resultField.value;
    const result = evaluateExpression(expression);
    resultField.value = result;
  } catch {
    resultField.value = "Error";
  }
}

function deleteLast() {
  resultField.value = resultField.value.slice(0, -1);
}

function evaluateExpression(expression) {
  const operators = /[+\-*/]/;
  const numbers = expression.split(operators).map(Number); 
  const operator = expression.match(operators); 
  
  if (!operator || numbers.length !== 2) {
    throw new Error("Invalid expression");
  }

  const [a, b] = numbers;
  switch (operator[0]) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) throw new Error("Division by zero");
      return a / b;
    default:
      throw new Error("Unsupported operator");
  }
}
