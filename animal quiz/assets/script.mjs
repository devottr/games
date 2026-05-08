var animal1 =
 "https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images-medium-5/close-up-of-the-face-of-a-red-fox-victoria-hillman.jpg";
//s
var animal2 =
 "https://i.redd.it/afnx2tqcmso41.jpg";
//k
var animal3 =
 "https://live.staticflickr.com/6076/6040832649_2be1ef6163_b.jpg";
//p


var animal5 =
 "https://thumbs.imagekind.com/2335832_650/funny-face-tortoise-turtle-closeup_art.jpg?v=1526992649";
var animal6 =
 "https://www.animalfactsencyclopedia.com/images/animalextremeclose-up-sloth.jpg ";
var animal7 =
 "https://www.animalfactsencyclopedia.com/images/animalextremeclose-up-wallaby.jpg ";
var animal8 =
 "https://www.animalfactsencyclopedia.com/images/animalextremeclose-up-sealion.jpg ";
var animal9 =
 "https://www.animalfactsencyclopedia.com/images/animalextremeclose-up-meerkat.jpg";
var animal10 =
 "https://www.animalfactsencyclopedia.com/images/animalextremeclose-up-wombat.jpg";
var animalsad =
 "https://i.kym-cdn.com/photos/images/original/001/510/490/e7f.jpg";
var animalsoso =
 "https://static01.nyt.com/images/2007/08/27/science/tier_190.2.jpg?quality=75&auto=webp&disable=upscale";
var animalalmost =
 "https://i.pinimg.com/474x/ad/8d/b7/ad8db76dac65522f2585c1d07acee27f.jpg";
var animalwow =
 "https://asset.holidaycardsapp.com/assets/card/bf_b_day102-915446bee02fbfed46978d9dd7ed3dfe.png";

var animal = new Image();
animal.src = animal1;
var a = document.getElementById(
  "Animal")
 .innerHTML = animal;
var p = document.getElementById(
 "parent");
p.appendChild(a);
var button1 = document
 .getElementById("b1");
var button2 = document
 .getElementById("b2");
var button3 = document
 .getElementById("b3");
var button4 = document
 .getElementById("b4");
var question = 1;
var points = 0;

function score() {
 var p2 = document.getElementById(
  "parent2")
 var score = document.getElementById(
  "score")
 p2.removeChild(button1);
 p2.removeChild(button2);
 p2.removeChild(button3);
 p2.removeChild(button4);
 var scored = points * 10;
 switch (scored) {
  case 0:
  case 10:
  case 20:
  case 30:
  case 40:
  case 50:
   animal.src = animalsad;
   p.appendChild(a)
   score.innerHTML = "Whoa, only " +
    scored +
    "% Looks like you need to study up on your aminals!";
   break;
  case 60:
  case 70:
  case 80:
   animal.src = animalsoso;
   p.appendChild(a)
   score.innerHTML =
    "You scored a " +
    scored +
    "% Not bad, not bad. Better than a monkey's uncle. Which I guess would also be a monkey...";
   break;
  case 90:
   animal.src = animalalmost;
   p.appendChild(a)
   score.innerHTML =
    "You scored a " +
    scored +
    "% Almost there! keep trying! Or don't that's a solid A-";
   break;
  case 100:
   animal.src = animalwow;
   p.appendChild(a)
   score.innerHTML =
    "You scored a " +
    scored +
    "% Great job! One Hundo Percento! Do you kiss your mother with that brain? If not, You should!";
   break;
 }

}

function changeAnimal(num) {
 switch (num) {
  case 2:
   animal.src = animal2;
   p.appendChild(a);
   button1.innerHTML = "Clam";
   button2.innerHTML = "A Nightmare";
   button3.innerHTML = "Mussel";
   button4.innerHTML = "Scallop";
   break;
  case 3:
   animal.src = animal3;
   p.appendChild(a);
   button1.innerHTML = "Kangaroo";
   button2.innerHTML = "Wallaby";
   button3.innerHTML = "Capybara";
   button4.innerHTML = "My Friend";
   break;
  case 4:
   animal.src = animal4;
   p.appendChild(a);
   button1.innerHTML = "Sonic";
   button2.innerHTML = "Porcupine";
   button3.innerHTML = "My Teacher";
   button4.innerHTML = "Echidna";
   break;
  case 5:
   animal.src = animal5;
   p.appendChild(a);
   button1.innerHTML = "Turtle";
   button2.innerHTML = "Grandpa!";
   button3.innerHTML = "Tortoise";
   button4.innerHTML = "Tuatara";
   break;
  case 6:
   animal.src = animal6;
   p.appendChild(a);
   button1.innerHTML = "Sloth";
   button2.innerHTML = "Wombat";
   button3.innerHTML = "The Flash";
   button4.innerHTML = "Bear";
   break;
  case 7:
   animal.src = animal7;
   p.appendChild(a);
   button1.innerHTML = "Kangaroo";
   button2.innerHTML = "Wallaby";
   button3.innerHTML = "Capybara";
   button4.innerHTML = "Pickle Rick";
   break;
  case 8:
   animal.src = animal8;
   p.appendChild(a);
   button1.innerHTML = "Walrus";
   button2.innerHTML = "seal";
   button3.innerHTML = "Cable Guy";
   button4.innerHTML = "Sealion";
   break;
  case 9:
   animal.src = animal9;
   p.appendChild(a);
   button1.innerHTML = "Lion";
   button2.innerHTML = "Tiger";
   button3.innerHTML = "Meerkat";
   button4.innerHTML = "Oh My!";
   break;
  case 10:
   animal.src = animal10;
   p.appendChild(a);
   button1.innerHTML = "Sloth";
   button2.innerHTML = "Wombat";
   button3.innerHTML = "My Uncle";
   button4.innerHTML = "Capybara";
   break;
 }
}

function button01() {
 switch (question) {
  case 1:
   question++;
   changeAnimal(question);
   break;
  case 2:
   question++;
   changeAnimal(question);
   break;
  case 3:
   points++;
   question++;
   changeAnimal(question);
   break;
  case 4:
   question++;
   changeAnimal(question);
   break;
  case 5:
   question++;
   changeAnimal(question);
   break;
  case 6:
   points++;
   question++;
   changeAnimal(question);
   break;
  case 7:
   question++;
   changeAnimal(question);
   break;
  case 8:
   question++;
   changeAnimal(question);
   break;
  case 9:
   question++;
   changeAnimal(question);
   break;
  case 10:
   score();
   break;
 }
}

function button02() {
 switch (question) {
  case 1:
   question++;
   changeAnimal(question);
   break;
  case 2:
   question++;
   changeAnimal(question);
   break;
  case 3:
   question++;
   changeAnimal(question);
   break;
  case 4:
   points++;
   question++;
   changeAnimal(question);
   break;
  case 5:
   question++;
   changeAnimal(question);
   break;
  case 6:
   question++;
   changeAnimal(question);
   break;
  case 7:
   points++;
   question++;
   changeAnimal(question);
   break;
  case 8:
   question++;
   changeAnimal(question);
   break;
  case 9:
   question++;
   changeAnimal(question);
   break;
  case 10:
   points++;
   score();
   break;
 }
}

function button03() {
 switch (question) {
  case 1:
   points++;
   question++;
   changeAnimal(question);
   break;
  case 2:
   question++;
   changeAnimal(question);
   break;
  case 3:
   question++;
   changeAnimal(question);
   break;
  case 4:
   question++;
   changeAnimal(question);
   break;
  case 5:
   points++;
   question++;
   changeAnimal(question);
   break;
  case 6:
   question++;
   changeAnimal(question);
   break;
  case 7:
   question++;
   changeAnimal(question);
   break;
  case 8:
   question++;
   changeAnimal(question);
   break;
  case 9:
   points++;
   question++;
   changeAnimal(question);
   break;
  case 10:
   score();
   break;
 }
}

function button04() {
 switch (question) {
  case 1:
   question++;
   changeAnimal(question);
   break;
  case 2:
   points++;
   question++;
   changeAnimal(question);
   break;
  case 3:
   question++;
   changeAnimal(question);
   break;
  case 4:
   question++;
   changeAnimal(question);
   break;
  case 5:
   question++;
   changeAnimal(question);
   break;
  case 6:
   question++;
   changeAnimal(question);
   break;
  case 7:
   question++;
   changeAnimal(question);
   break;
  case 8:
   points++;
   question++;
   changeAnimal(question);
   break;
  case 9:
   question++;
   changeAnimal(question);
   break;
  case 10:
   score();
   break;
 }
}

