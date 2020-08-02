
var a = prompt("Insert first number");
var op = prompt("Insert one of this operations: +, -, *, /");
var b = prompt("Insert second number");
switch (op) {
    case '+':
        document.write("Addition of two numbers is: " + (parseInt(a) + parseInt(b)));
        break;
    case '-':
        document.write("Subtraction of two numbers is: " + (a - b));
        break;
    case '*':
        document.write("Multiplication of two numbers is: " + (a * b));
        break;
    case '/':
        document.write("Division of two numbers is: " + (a / b));
        break;
    default:
        document.write("Error. Bad operation. Try again");
}
