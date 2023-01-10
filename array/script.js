// Arrays - ordered lists of items

let featuredPosts = [
  "Check out my Netflix clone",
  "Here's the code for my project",
  "I've just relaunched my portfolio",
];

let experience = [
  "CEO at Scrimba",
  "Frontend developer at Xeneta",
  "People counter for Norstat",
];

// let newMessage = "same here !";
// experience.push("same here !");
// console.log(experience);

// console.log(experience[1]);
// console.log(experience[2]);
// console.log(experience[0]);
// console.log(experience.length);

// Arrays with multiple data types

// let person = ["john", 35, true];

// adding and removing items from arrays

let cards = [7, 4];
cards.push(6);
// console.log(cards);

// let message = [
//   "Hey, how's it going?",
//   "I'm great , thank you ! How about you?",
//   "All good. Been working on my portfolio lately",
// ];

// let newMessage = "same here !";

// message.push(newMessage);
// console.log(message);
// message.pop(newMessage);
// console.log(message);

let fruit = ["🍎 ", "🍊 ", "🍎 ", "🍎 ", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function sortFruit() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += "🍎 ";
    } else if (fruit[i] === "🍊 ") {
      orangeShelf.textContent += "🍊 ";
    }
  }
}

sortFruit();

// function sortFruit() {
//   for (let i = 0; i < fruit.length; i++) {
//     if (fruit[i] === "🍎 ") {
//       appleShelf.textContent += "🍎 ";
//     } else if (fruit[i] === "🍊 ") {
//       orangeShelf.textContent += "🍊";
//     }
//   }
// }
// sortFruit();
