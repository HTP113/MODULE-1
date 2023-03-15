function addition() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Result Addition: " + (Number(num1)+Number(num2));
}
function subtraction() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Result Subtraction: " + (Number(num1)-Number(num2));

}
function multiplication() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Multiplication: " + (Number(num1)*Number(num2));

}
function division() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Divistion: " + (Number(num1)/Number(num2));
}
