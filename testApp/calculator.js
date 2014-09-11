var cur = 0;
var stored = 0;

document.getElementById("buttonOne").addEventListener("clickOne", one);

function addNumber(num, concatNum) {
    return num * 10 + concatNum;
}

function displayNumber(num) {
  document.getElementById("result").innerHTML = num;
}

function one() {
    cur = addNumber(cur, 1);
    displayNumber(cur);
}

function two() {
    cur = addNumber(cur, 2);
    displayNumber(cur);
}

function three() {
    cur = addNumber(cur, 3);
    displayNumber(cur);
}

function four() {
    cur = addNumber(cur, 4);
    displayNumber(cur);
}

function five() {
    cur = addNumber(cur, 5);
    displayNumber(cur);
}

function six() {
    cur = addNumber(cur, 6);
    displayNumber(cur);
}

function seven() {
    cur = addNumber(cur, 7);
    displayNumber(cur);
}

function eight() {
    cur = addNumber(cur, 8);
    displayNumber(cur);
}

function nine() {
    cur = addNumber(cur, 9);
    displayNumber(cur);
}