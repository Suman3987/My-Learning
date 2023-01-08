// Object - store data in depth -composite / complex data type
// key -value pairs

// let course = {
//   title: "learn CSS Grid for free",
//   lessons: 16,
//   creator: "Per Harald Borgen",
//   length: 63,
//   level: 2,
//   isFree: true,
//   tags: ["html", "css"],
// };

// console.log(course.isFree);

// let airbnb = {
//   buildBy: "Per",
//   location: "north",
//   rooms: 6,
//   ticket: "true",
//   buildIn: 1896,
//   owners: ["william", "Peter", "Per"],
//   security: "eagle",
// };
// console.log(airbnb.location);
// console.log(airbnb.rooms);
// console.log(airbnb.owners[1]);
// console.log(airbnb.ticket);

let person = { name: "Per", age: 35, country: "Norway" };
function logData() {
  console.log(
    person.name +
      " is " +
      person.age +
      " years old and lives in " +
      person.country
  );
}
logData();

// ////////// if else statement//////
let age = 67;
if (age < 6) {
  console.log("free");
} else if (age < 18) {
  console.log("child discount");
} else if (age < 27) {
  console.log("student discount");
} else if (age < 67) {
  console.log("full price");
} else console.log("senior citizen discount");

/////// loops and Arrays///////

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// console.log("The 5 largest countries in the world :");
// for (let i = 0; i < largeCountries.length; i++) {
//   console.log(" - " + largeCountries[i]);
// }

//////////////push, pop,unshift,shift challenge///////
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

///////
largeCountries.pop(); //remove item//

//////
// largeCountries.push("Pakistan"); //add item
// console.log(largeCountries);

// largeCountries.shift(); //remove  1st item

// largeCountries.unshift("China"); // add item
// console.log(largeCountries);

///////Logical Operators/////////

// let dayOfMonth = 31;
// let weekDay = "Friday";

// if (dayOfMonth === 31 && weekDay === "Friday") {
//   console.log("😱");
// }

///////Rock papers scissors/////
let hands = [" rock", "paper", "scissor"];

function getHand() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}
console.log(getHand());
