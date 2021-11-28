

function checkIfValid() {
const inpObj = document.getElementById("age");
if (!inpObj.checkValidity()) {
document.getElementById("demo").innerHTML = inpObj.validationMessage;
} else {
document.getElementById("demo").innerHTML = "Input OK";
}
}

function stopMotion () {
    document.getElementById("img").src="flower.png";
}