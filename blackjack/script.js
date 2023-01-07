// let firstCard = 10;
// let secondCard = 7;

// let sum = firstCard + secondCard;
// if (sum < 21) {
//   console.log("Do you want to draw a new card ?");
// } else if (sum === 21) {
//   console.log("WOHOO ...!! Congratulation You won the  BLACKJACK Game !!");
// } else {
//   console.log("You loss the game !!");
// }

///////-----//////////
/////////IF ELSE STATEMENT
// let age = 22;

// if (age < 21) {
//   console.log("You can not enter the club");
// } else {
//   console.log("Welcome");
// }

/////////
// let age = 105;
// if (age < 100) {
//   console.log("Not elegible");
// } else if (age === 100) {
//   console.log("Here is your birthday card from the king !");
// } else {
//   console.log("Not elegible, you have already gotten one");
// }

///////blackjack///
// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
let cards = []; //array
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
  name: "Per",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $ " + player.chips;

console.log(cards);

// create a function , getRandomCard(), that always returns the number 5
function getRandomCard() {
  // if 1 -> return 11

  // if 11-13 -> return 10

  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  // return Math.floor(Math.random() * 13) + 1;
  renderGame();
}
function renderGame() {
  cardEl.textContent = "Cards ";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card ?";
  } else if (sum === 21) {
    message = "You've got Blackjack !";
    hasBlackJack = true;
  } else {
    message = "You're out of the game ! ";
    isAlive = false;
  }
  messageEl.textContent = message;
  ////log it out
  // console.log(message);
}
function newCard() {
  // console.log("Drawing a new card from the deck !");
  // use the getRandomCard() to set the value of card

  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}

///////// CASH OUT
// console.log(hasBlackJack);
// console.log(isAlive);

/////////////boolean///
// console.log(4 === 3); // false
// console.log(5 > 2); // true
// console.log(12 > 12); // false
// console.log(3 < 0); // false
// console.log(3 >= 3); // true
// console.log(11 <= 11); // true
// console.log(3 <= 2); // false

// .....
// returning values in functions
// let player1Time = 102;
// let player2Time = 107;

// function getFastestRaceTime() {
//   if (player1Time < player2Time) {
//     return player1Time;
//   } else if (player2Time < player1Time) {
//     return player2Time;
//   } else {
//     return player1Time;
//   }
// }

// let fastestRace = getFastestRaceTime();
// console.log(fastestRace);

// function getTotalRaceTime() {
//   return player1Time + player2Time;
// }
// let totalTime = getTotalRaceTime();
// console.log(totalTime);

///////////////random number////
// let randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber);

// what does Math.random() do ?

// Your answer:
// let flooredNumber = Math.floor(3.65457);
// console.log(flooredNumber);

/////////Create a function , rollDice (), that returns a random number between 1 and 6

// function rollDice() {
//   let randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber;
// }
// console.log(rollDice());

///////the logical and operator/////

let hasCompletedCourse = true;
let givesCertificate = true;

if (hasCompletedCourse === true && givesCertificate === true) {
  generateCertificate();
}

function generateCertificate() {
  console.log("Generating certificate....");
}

let hasSolvedChallenge = false;
let hasHintsLeft = false;

if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution();
}

function showSolution() {
  console.log("Showing the solution");
}

let likesDocumentaries = true;
let likesStartups = true;

if (likesDocumentaries === true || likesStartups === true) {
  recommendMovie();
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!");
}
