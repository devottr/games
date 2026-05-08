//FONCTIONS PRINCIPALES DE LA CALCULARICE

function calc(num) {

 document.getElementById('result')
  .value += num;

}

function clear() {

 document.getElementById('result')
  .value = '';

 paren_bolean = false;

}

function back() {

 var x = document.getElementById(
   'result')
  .value;

 document.getElementById('result')
  .value = x
  .substring(0, x.length - 1);

 if (document.getElementById(
   'result').value ===
  '') {

  paren_bolean = false;

 }

}



//MET LA VALEUR OPPOSER DE L'INPUT

function change() {

 var x = document.getElementById(
   'result')
  .value;

 document.getElementById('result')
  .value = (x -
   2 * x);

 if (document.getElementById(
   'result').value ===
  'NaN') {

  document.getElementById('result')
   .value =
   alert_msg(
    "The calculations don't work");

 }

}



//MESSAGE D'ALERT

function alert_msg(msg) {

 document.getElementById('alert')
  .innerHTML =
  msg;

 document.getElementById('msg_alert')
  .style
  .display = 'block';

}

function cancel() {

 document.getElementById('msg_alert')
  .style
  .display = 'none';

}



var paren_bolean = false;

//FONCTION POUR LES PARENTHESE

function Paren() {

 var x = document.getElementById(
   'result')
  .value;

 if (paren_bolean === false) {

  calc('(');

 } else {

  calc(')');

 }

 paren_bolean = !paren_bolean;

}



//FONCTION POUR LA RACIE CARRE

function RootSquare() {

 calc('√');

 Paren();

}



//FONCTIONS POUR CALCULER

var typeOfCalc = [];

function result() {

 typeOfCalc = []

 var x = document.getElementById(
   'result')
  .value;

 var caclHistory = document
  .getElementById(
   'result').value;

 //VÉRIFIER SI UN ² EST ACTIVE

 if (x.includes('²') === true) {

  do {

   const k = x.substring(0, x
    .indexOf('²'));

   const atReplace = x.substring(k
    .lastIndexOf(
     ' ') + 1, x.indexOf('²') + 1);

   const result = k.substring(k
    .lastIndexOf(
     ' '), k.length) * k.substring(k
    .lastIndexOf(' '), k.length);

   x = x.replace(atReplace
   .toString(), result
    .toString());

  } while (x.includes('²') === true);

  document.getElementById('result')
   .value = x;

  typeOfCalc.push(' square');

 }

 //VERIFIER SI UN √ EST ACTIVE

 if (x.includes('√') === true) {

  do {

   x = x.replace('√(' + x.substring(x
     .indexOf(
      '√') + 2, x.length).substring(
     x.substring(
      x.indexOf('√') + 2, x.length),
     x
     .substring(x.indexOf('√') + 2,
      x.length)
     .indexOf(')')) + ')', Math
    .sqrt(x
     .substring(x.indexOf('√') + 2,
      x.length)
     .substring(x.substring(x
      .indexOf('√') + 2,
      x.length), x.substring(x
      .indexOf('√') +
      2, x.length).indexOf(')'))));

  } while (x.includes('√') === true);

  document.getElementById('result')
   .value = x;

  typeOfCalc.push(' square root');

 }

 //POUR L'HISTORIQUE

 function history() {

  document.getElementById(
    'message-h3').style
   .display = 'none';

  if (x.includes('+') === true) {

   typeOfCalc.push(' addition');

  }

  if (x.includes('-') === true) {

   var y = x;

   do {

    if (y.startsWith('-') === true) {

     y = y.substring(y.length, 1);

    } else if (y.includes('-') ===
     true) {

     typeOfCalc.push(' subtraction');

     y = 'nothing';

    }

   } while (y.includes('-') ===
    true);

  }

  if (x.includes('*') === true) {

   typeOfCalc.push(
   ' multiplication');

  }

  if (x.includes('/') === true) {

   typeOfCalc.push(' division');

  }

  document.getElementById(
    'message-h3').style
   .display = 'none';

  document.getElementById(
    'ol-history')
   .innerHTML +=
   '<li><span class="calcule">' +
   caclHistory +
   '</span><span class="calc-type"> ' +
   typeOfCalc +
   ' </span><span class="calcule">Result : ' +
   eval(x) + '</span></li>';

 }

 history();

 if (x) {

  document.getElementById('result')
   .value =
   eval(x);

 }

}



//FONCTION POUR L'HISTORIQUES

var hide = true;

function historyAnimations() {

 hide = !hide;

 document.getElementById('histoty')
  .style
  .transition = '0.5s';

 document.getElementById('histoty')
  .style
  .webkitTransition = '0.5s';

 if (hide === false) {

  document.getElementById('histoty')
   .style
   .opacity = '1';

 } else if (hide === true) {

  document.getElementById('histoty')
   .style
   .opacity = '0';

 }

}



//FONCTIONS POUR ARRONDIRE LE RESULT

function round() {

 document.getElementById(
   'message-h3').style
  .display = 'none';

 var x = document.getElementById(
   'result')
  .value;

 if (x === 0 || x.includes('.') ===
  false) {

  document.getElementById('result')
   .value =
   alert_msg(
    "You can't round that !");

  document.getElementById('result')
   .value =
   'impossible';

  paren_bolean = false;

 } else if (x !== 0 || x.includes(
   '.') ===
  true) {

  document.getElementById('result')
   .value = Math
   .round(x);

  document.getElementById(
    'ol-history')
   .innerHTML +=
   '<li><span class="calcule"> Round(' +
   x +
   ')</span><span class="calc-type"> round </span><span class="calcule">Result : ' +
   Math.round(x) + '</span></li>';

 } else {

 }

}



//FONCTION POUR CACHER LES NEWS ALERT

function newsHide() {

 document.getElementById('new-up')
  .style
  .display = 'none';

}



//TOUS LES ONCLICK/ADDEVENTLISTENER

document.getElementById(
  'clear_button')
 .onclick = clear;

document.getElementById('back_btn')
 .onclick =
 back;

document.getElementById(
  'change-sign-btn')
 .onclick = change;

document.getElementById(
  'btn-cancel-news')
 .addEventListener('click',
 newsHide);