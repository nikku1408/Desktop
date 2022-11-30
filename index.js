// var c = "nikhil";
// console.log(c);
// console.log(typeof c);

// if (6 > 4) {
//   console.log(`${c} and 6 is always greater than 4`);
// } else {
//   console.log(`${c} given statement is false`);
// }

// let name = "ansh ninawe";

// var numArr = [1, 2, 3, 4, 0, 22, 1, 3, 11, 5];
// var max = numArr[0];
// for (var i = 0; i < numArr.length; i++) {
//   if (numArr[i] > max) {
//     max = numArr[i];
//   }
// }

// console.log(max);

// //operators

// var cars = [
//   {
//     colourNumber: 1,
//     colourName: "Red",
//     colourId: "C001",
//   },
//   {
//     colourNumber: 2,
//     colourName: "Orange",
//     colourId: "C002",
//   },
//   {
//     colourNumber: 3,
//     colourName: "Purple",
//     colourId: "C003",
//   },
// ];
// let colName = "";
// for (var i = 0; i < cars.length; i++) {
//   if (cars[i].colourId == "C003") {
//     colName = cars[i].colourName;
//   }
// }
// console.log(colName);

// for (let i = 1; i < 10; i++) {
//   setTimeout(() => {
//     console.warn(i);
//   }, 1000);
// }

// for loop

// for (var i = 5; i <= 10; i++) {
//   console.log(i);
// }

// var a = [1, 2, 3, 4, 5, 123, 33, 4, 11];
// for (var j = 0; j <= a.length; j++) {
//   console.log(a[j]);
// }

// var b = [
//   {
//     id: 1,
//     name: "nikhil",
//     city: "pune",
//   },
//   {
//     id: 2,
//     name: "suman",
//     city: "bangalore",
//   },
//   {
//     id: 3,
//     name: "vijay",
//     city: "mumbai",
//   },
// ];
// for (var s = 0; s < b.length; s++) {
//   if (b[s].city == "bangalore") {
//     console.log(b[s].name);
//   }
// }

var desc = "this is the life";
var numberOfChars = desc.length;

console.log(desc.slice(-3));

console.log(desc.trim());
console.log(desc.charAt(3));
console.log(desc.split(" "));

var fruits = ["aple", "mango", "grapes", "banana", "muskmelon"];
var fa = fruits.push("watermelon");
console.log(fruits);
console.log(fruits.pop());

var tch = "github";
console.log(tch.charAt(0).toUpperCase() + tch.slice(1));

function makeUpperCase(name) {
  var conv = name.toUpperCase();
  return conv;
}
console.log(makeUpperCase("nikhil"));

var name = "ansh";
var sentence = `${name} is the very bright kid.`;
var changedSent = sentence.replace(name, "bunty");
console.log(changedSent);

//------------------------------------------------------------------------------------
function main(a, b = main()) {
  return a + b;
}
main();
