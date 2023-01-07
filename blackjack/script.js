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
let firstCard = 10;
let secondCard = 6;
let cards = [firstCard, secondCard]; //array
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = " ";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function startGame() {
  renderGame();
}
function renderGame() {
  cardEl.textContent = "Cards: " + cards[0] + " + " + cards[1];
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
  console.log("Drawing a new card from the deck !");
  let card = 5;
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
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
