const display = document.getElementById('display');

let justCalculated = false; // NEW

function appendNumber(input) {
    // If last action was "=", start a new expression
    if (justCalculated) {
        display.value = '';
        justCalculated = false;
    }

    display.value += input;
}

function setOperation(operator) {
    // If user presses an operator right after result, continue the expression
    if (justCalculated) {
        justCalculated = false;
    }
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
    justCalculated = false;
}

function calculateResult() {
    try {
        if (display.value.trim() === '') return;
        display.value = eval(display.value);
        justCalculated = true; // NEXT number press will clear
    } catch (error) {
        display.value = 'Error';
        justCalculated = true;
    }
}
