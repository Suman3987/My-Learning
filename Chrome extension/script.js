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

// const playerName = "Per";
// let credits = 45;

// credits = credits - 10;

// If possible, use const. If not, use let

// which variable below should be changed from let to const

// The customer wants to order some stuff. Here are the details:

const basePrice = 520;
const discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days";

// whoops! Turns out the shipping will be a bit more complex
shippingCost = 15;
shippingTime = " 7-14 days";

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost;

//  Finally, notifying the customer
// console.log("Total cost:" + fullPrice + ". It will arrive in " + shippingTime);

// lesson 10 Push to the myLeads array

// let myLeads = [];
// const inputEL = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");

//  Push the value "www.awesomelead.com" to myArray when the input button is clicked

// inputBtn.addEventListener("click", function () {
//   myLeads.push("www.awesomelead.com");
//   console.log(myLeads);
// });

/////////// Push the value from the input field //////// 5hour 3 min

// let myLeads = [];
// const inputEL = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");

// inputBtn.addEventListener("click", function () {
// Push the value from the inputEL into the myLeads array
// instead of the hard-coded "www.awesomeleads.com" value
// Google ->"get value from input field javascript"

// myLeads.push(inputEL.value);

// myLeads.push("www.awesomelead.com");
//   console.log(myLeads);
// });

//////// use a for loop to log out leads////

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEL = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el"); //create the unordered list///
console.log(ulEl);
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEL.value);
  console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
  ulEl.textContent += myLeads[i] + " ";
}
