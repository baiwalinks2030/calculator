let calculation = "";

function appendNumber(num) {
  calculation += num;
  updateDisplay();
}

function appendOperator(operator) {
  calculation += operator;
  updateDisplay();
}

function clearResult() {
  calculation = "";
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(calculation);
    calculation = result;
    updateDisplay();
  } catch (error) {
    calculation = "";
    updateDisplay();
    alert("Invalid calculation!");
  }
}

function updateDisplay() {
  document.getElementById("result").value = calculation;
}
