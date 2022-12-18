//
let saveEl = document.getElementById("save-el");

let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let saveAll = count + "  - ";
  saveEl.textContent += saveAll;
  countEl.textContent = 0;
  count = 0;

  // console.log(count);
}
//////////////???????

// let username = "per";
// let message = "you have three new notification";

// let messageToUser = message + "," + username + "!";
// console.log(message + ", " + username + "!");

// console.log(messageToUser);

// console.log(messageToUser);
////////////???????

// let name = "john";
// let greeting = "hi, my name is";
// let myGreeting = greeting + "," + name + "!";
// console.log(myGreeting);

// let welcomeEl = document.getElementById("welcome-el");

// let name = "john";
// let greeting = "hi, my name is";

// welcomeEl.innerText = greeting + " " + name;

// welcomeEl.innerText += '👋  ';
