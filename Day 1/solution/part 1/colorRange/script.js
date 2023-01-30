var head = document.getElementById("head");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");

function changeColor(){
    head.style.color = `rgb(${red.value},${green.value},${blue.value})`;
}