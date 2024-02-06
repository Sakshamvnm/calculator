//CALCULATOR PROGRAM
const displayElement = document.getElementById("display");

function appendToDisplay(input) {
    displayElement.value += input;
}

function clearDisplay() {
    displayElement.value = "";
}

function calculate() {
    try {
        displayElement.value = eval(displayElement.value);
    } catch (error) {
        displayElement.value = "Error";
    }
}
function Delete(){
	displayElement.value =displayElement.value.slice(0, -1);
expression = displayElement.value
}