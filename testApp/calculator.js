var cur = 0;
var stored = 0;

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('one').addEventListener('click', one);
})
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('buttonTwo').addEventListener('click', two);
})
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('buttonThree').addEventListener('click', three);
})
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('buttonFour').addEventListener('click', four);
})
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('buttonFive').addEventListener('click', five);
})
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('buttonSix').addEventListener('click', six);
})
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('buttonSeven').addEventListener('click', seven);
})
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('buttonEight').addEventListener('click', eight);
})
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('buttonNine').addEventListener('click', nine);
})

function addNumber(num, concatNum) {
    return num * 10 + concatNum;
}

function displayNumber(num) {
  document.getElementById("result").innerHTML = num;
}

function one(e) {
  chrome.extension.sendMessage({directive: "one"}, function(response) {
    cur = addNumber(cur, 1);
    displayNumber(cur);
  });
}

function two(e) {
  chrome.extension.sendMessage({directive: "buttonTwo"}, function(response) {
    cur = addNumber(cur, 2);
    displayNumber(cur);
  });
}

function three(e) {
  chrome.extension.sendMessage({directive: "buttonThree"}, function(response) {
    cur = addNumber(cur, 3);
    displayNumber(cur);
  });
}

function four(e) {
  chrome.extension.sendMessage({directive: "buttonFour"}, function(response) {
    cur = addNumber(cur, 4);
    displayNumber(cur);
  });
}

function five(e) {
  chrome.extension.sendMessage({directive: "buttonFive"}, function(response) {
    cur = addNumber(cur, 5);
    displayNumber(cur);
  });
}

function six(e) {
  chrome.extension.sendMessage({directive: "buttonSix"}, function(response) {
    cur = addNumber(cur, 6);
    displayNumber(cur);
  });
}

function seven(e) {
  chrome.extension.sendMessage({directive: "buttonSeven"}, function(response) {
    cur = addNumber(cur, 7);
    displayNumber(cur);
  });
}

function eight(e) {
  chrome.extension.sendMessage({directive: "buttonEight"}, function(response) {
    cur = addNumber(cur, 8);
    displayNumber(cur);
  });
}

function nine(e) {
  chrome.extension.sendMessage({directive: "buttonNine"}, function(response) {
    cur = addNumber(cur, 9);
    displayNumber(cur);
  });
}