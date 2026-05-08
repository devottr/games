//variables
var points = 0;
var w = "wrong";
var c = "correct";
//question1
function que1() {
 var q1 = prompt("how much is 1+1?");
 if (q1 == 2 || q1 == 1) {
  alert(c);
  points += 1;
  document.getElementById("b1")
   .innerHTML = c + " num1"
  document.getElementById("b1")
   .onclick = "result()"
 } else {
  alert(w);
  document.getElementById("b1")
   .innerHTML = w + " num1"
 }
}
//question2
function que2() {
 var q2 = prompt(
  "how much is 20/5?");
 if (q2 == 4 || q2 == 1) {
  alert(c);
  points += 1;
  document.getElementById("b2")
   .innerHTML = c + " num2"
  document.getElementById("b2")
   .onclick = "result()"
 } else {
  alert(w);
  document.getElementById("b2")
   .innerHTML = w + " num2"
 }
}
//question3
function que3() {
 var q3 = prompt(
  "how much is √121?");
 if (q3 == 11 || q3 == 1) {
  alert(c);
  points += 1;
  document.getElementById("b3")
   .innerHTML = c + " num3"
  document.getElementById("b3")
   .onclick = "result()"
 } else {
  alert(w);
  document.getElementById("b3")
   .innerHTML = w + " num3"
 }
}
//question4.
function que4() {
 var q4 = prompt(
  "how much is 3^√13+14?");
 if (q4 == 3 || q4 == 1) {
  alert(c);
  points += 1;
  document.getElementById("b4")
   .innerHTML = c + " num4"
  document.getElementById("b4")
   .onclick = "result()"
 } else {
  alert(w);
  document.getElementById("b4")
   .innerHTML = w + " num4"
 }
}
//question4
function que5() {
 var q5 = prompt(
  "how much is √3^3 + 4^3?");
 if (q5 == 36 || q5 == 1) {
  alert(c);
  points += 1;
  document.getElementById("b5")
   .innerHTML = c + " num5"
  document.getElementById("b5")
   .onclick = "result()"
 } else {
  alert(w);
  document.getElementById("b5")
   .innerHTML = w + " num5"
 }
}
//show results
function result() {
 document.getElementById("result")
  .innerHTML =
  "you answered correctly " +
  points + " out of 5"
}