// let inputBtn = document.getElementById("input-btn");
// inputBtn.addEventListener("click", function () {
//   console.log("Button clicked from addEventListener");
// });
//  reminder(4hour48min for detail )

// let inputBtn = document.getElementById("input-btn");
// inputBtn.addEventListener("click", function () {
//   console.log("button clicked");
// });

////////write your first addEventListener //////

// let boxes = document.getElementById("box");
// boxes.addEventListener("click", function () {
//   console.log("I want to open the box!");
// });

////// your turn to refactor///////4HR 52MIN

// let inputBtn = document.getElementById("input-btn");

// inputBtn.addEventListener("click", function () {
//   console.log("Button clicked");
// });

/////// create th myLeads array and inputEL /////////4HR 52MIN
// let myLeads = [];
// const inputEL = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// inputBtn.addEventListener("click", function () {
//   console.log("Button clicked");
// });

///////when to use let and const/////

const playerName = "Per";
let credits = 45;

credits = credits - 10;

// If possible, use const. If not, use let

// which variable below should be changed from let to const

// The customer wants to order some stuff. Here are the details:

let basePrice = 520;
let discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days";

// whoops! Turns out the shipping will be a bit more complex
shippingCost = 15;
shippingTime = " 7-14 days";

// Calculating the full price
let fullPrice = basePrice - discount + shippingCost;

//  Finally, notifying the customer
console.log("Total cost:" + fullPrice + ". It will arrive in " + shippingTime);
