console.log("working");

//===PROMPT===class========
var calcJs = prompt("Welcome to JS Calculator. I am here to help with your numbers. Lets start. Please write Basic or Advanced calculator");
console.log("calcJs");

//===SWITCH===========https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_state_switch1
switch (calcJs) {
  case "basic":
    alert("Welcome to JS Basic calculator. Let's have fun and enter some numbers.")
    break;

  case "advance":
    alert("Welcome to Js Advance calculator. Let's have some fun and enter some numbers now!")
    text = "Ooops, sorry JS Advance Calculator is under construction. Will be with you soon!";
    break;

  default:
    alert("Welcome back to JS Basic Calculator.")
    text = "Great you are back! Let's start working with some numbers and enter some numbers!";
    break;
}
/*=========BASIC CALCULATOR=====JavaScript Operators Reference. JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more.====https://www.w3schools.com/js/js_operators.asp====*/

function operatorFunction(y, x, operator) {
  var z;
  if (operator == '+') {
    z = x + y;
  }
  else if (operator == '-') {
    z = x - y;
  }
  else if (operator == '*') {
    z = x * y;
  }
  else if (operator == '/') {
    z = x / y;
  }
  return x, y;
}

//=========END operatorFunction========

//=========CONNECTING SWITCH WITH IF ELSE ======https://www.w3schools.com/js/tryit.asp?filename=tryjs_elseif=================

var defaultMessage = "Ooops, sorry JS Advance Calculator is under construction. Will be with you soon!";
if (calcJs == "basic") {
  console.log(alert("Let's start making magic with numbers and start calculating!"));
  var x, y, operator;
  x = promt("Type your number here");
  y = promt("Type your number here");

  //===========PROMPT============
  operator = prompt("Choose an operator")
  //========ALERT================
  alert(operatorFunction(y, x, operator));
  //===========PROMPT============
  operator = promt("Please select or Basic or Advance calculator mode.")
}
else if (calcJs == "advance"){
  defaultMessage = "Ooops, sorry JS Advance Calculator is under construction. Will be with you soon!";
}
console.log(calcJs("basic"))   // this should take you to the basic calculator

