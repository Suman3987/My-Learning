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
