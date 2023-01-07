// count to ten!

// we need to specify

//where should we START counting?
//where is the FINISH line?
// what's the STEP SIZE we should use?

//     START           FINISH     STEP SIZE

// for (let count = 10; count < 21; count += 1) {
//   console.log(count);
// }

// for (let i = 0; i < 6; i += 1) {
//   console.log(i);
// }

for (let i = 10; i <= 100; i += 10) {
  console.log(i);
}

// for loops and arrays

let message = [
  "Hey, how's it going?",
  "I'm great , thank you ! How about you?",
  "All good. Been working on my portfolio lately",
  "same here !",
  "Great to hear",
  "😎 ",
];
for (let i = 0; i < message.length; i += 1) {
  console.log(message[i]);
}
