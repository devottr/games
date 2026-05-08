const emojis = ["", "&#127812",
 "&#127822",
 "&#127849", "&#127812", "&#127822",
 "&#127849", "&#127812", "&#127822",
 "&#127849",
];


let sortEmoji = [];
let choiceOption = 0;
let choiceCount = 0;

function choice(value) {
 if (value == 1) {
  document.getElementById("o1")
   .classList.add("chosen");
  choiceOption = document
   .getElementById("o1")
   .innerHTML
  document.getElementById("o2").style
   .display = "none";
  document.getElementById("o3").style
   .display = "none";
 } else if (value == 2) {
  document.getElementById("o2")
   .classList.add("chosen");
  choiceOption = document
   .getElementById("o2")
   .innerHTML
  document.getElementById("o1").style
   .display = "none";
  document.getElementById("o3").style
   .display = "none";
 } else {
  document.getElementById("o3")
   .classList.add("chosen");
  choiceOption = document
   .getElementById("o3")
   .innerHTML
  document.getElementById("o1").style
   .display = "none";
  document.getElementById("o2").style
   .display = "none";
 }
}


function playGame() {
 for (var i = 1; i < 10; i++) {
  sortEmoji.push(Math.floor(Math
   .random() * (9 - 1)) + 1);
 }
}

function startGame(item, index) {
 index += 1;
 var position = document
  .getElementById(index.toString());
 position.innerHTML = emojis[item];
 position.classList.add("hide");
 position.addEventListener("click",
  clickItem);
}

function clickItem(e) {
 if (e.currentTarget.innerHTML ==
  choiceOption) {
  e.currentTarget.classList.remove(
   "hide");
  choiceCount--;
  if (choiceCount <= 0) {
   var element2 = document
    .getElementById("result");
   element2.style.display =
    "inline-block";
   element2.innerHTML = "YOU WIN";
   element2.style.color = "green";
   document.getElementById("start")
    .style.display = "none";
   document.getElementById("again")
    .style.display = "inline-block";
  }

 } else {
  var elements = document
   .querySelectorAll(".emoji");
  elements.forEach((item) => {
   item.disabled = true;
   item.classList.remove("hide");
   item.classList.add("lose");
  });

  var element2 = document
   .getElementById("result");
  element2.style.display =
   "inline-block";
  element2.innerHTML = "YOU LOSE";
  document.getElementById("start")
   .style.display = "none";
  document.getElementById("again")
   .style.display = "inline-block";


 }
}

function countChoice() {
 var elements = document
  .querySelectorAll(".emoji");

 elements.forEach((item) => {
  if (item.innerHTML ==
   choiceOption) {
   choiceCount++
  }
 });
}


function start() {
 if (choiceOption != 0) {
  playGame();
  sortEmoji.forEach(startGame);
  countChoice();
 } else {
  alert("Choose Your Emoji")
 }

}

function playAgain() {
 location.reload();
}




