const result = document.getElementById("result");

function appendValue(input) {
    result.value += input;
}

function clearResult() {
    result.value = "";
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}