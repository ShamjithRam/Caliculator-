let display = document.getElementById("display");

// Function to append character to display
function appendCharacter(char) {
    display.value += char;
}

// Function to clear display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to evaluate the expression
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
