// var a = 5;
// console.log(a);
// a = 7;
// console.log(a);
// var a = 6;
// console.log(a);

// const b = 5;

// console.log(b);

// let c = 5;
// console.log(c);
// c = 7;
// console.log(c);

// let add = null;
// console.log(add);
// console.log(typeof add);
// add = 5;
// console.log(add);

// let f = 5;
// console.log(f);
// const g = 6;
// console.log((f -= 5));

// let h = "55";

// console.log(
//     h=="55"
// )
// console.log(
//     h==="55"
// )

// hoisting in js
// a=5
// console.log(a);
// var a;
// console.log(a);

// if else statement

// const add = "8";

// const sub = 8;
// if (add == 5) {
//   console.log("add is equal to 5");
// } else if (sub == 6) {
//   console.log("sub equal to 6");
// } else {
//   console.log("required input is not given");
// }

// switch case statement
// let number = prompt("enter a number");
// switch (number) {
//   case 5:
//     alert("add is equal to 5");
//     // console.log("add is equal to 5");
//     break;
//   case 6:
//     alert("add is equal to 6");
//     console.log("add is equal to 6");
//     break;
//   default:
//     alert("required input is not given");
//     console.log("required input is not given");
//     break;
// }

// let number = window.prompt("Enter a number");
// switch (Number(number)) {
//   case 5:
//     console.log("The number is equal to 5");
//     alert("The number is equal to 5");
//     break;
//   case 6:
//     console.log("The number is equal to 6");
//     alert("The number is equal to 6");
//     break;
//   default:
//     console.log("Required input is not given");
//     alert("Required input is not given");
//     break;
// }

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter a number: ", function (number) {
//   switch (Number(number)) {
//     case 5:
//       console.log("The number is equal to 5");
//       break;
//     case 6:
//       console.log("The number is equal to 6");
//       break;
//     default:
//       console.log("Required input is not given");
//       break;
//   }

//   rl.close();
// });

// const purchaseAmount = 1000;
// switch (true) {
//   case purchaseAmount < 100:
//     console.log(purchaseAmount * 0.05);
//   default:
//     console.log(purchaseAmount * 0.1);
// }

// calculate bmi using if else statement
// const weight = prompt("Enter your weight in kg");
// const heightInFeet = prompt("Enter your height in Feet");
// const height = heightInFeet * 0.3048;

// const bmi = weight / (height * height);
// if (bmi < 18.5) {
//   console.log(`Your BMI is ${bmi}, so you are underweight.`);
//   alert("Your BMI is " + bmi + ", so you are underweight.");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   console.log("Your BMI is " + bmi + ", so you have a normal weight.");
//   alert( `Your BMI is ${bmi}, so you have a normal weight.`);
// } else if (bmi >= 25 && bmi <= 29.9) {
//   console.log("Your BMI is " + bmi + ", so you are overweight.");
//   alert("Your BMI is " + bmi + ", so you are overweight.");
// } else {
//   console.log("Your BMI is " + bmi + ", so you are obese.");
//   alert("Your BMI is " + bmi + ", so you are obese.");
// }

// let a = [1, 2, 6, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     console.log(a[i]);
//   } else {
//     console.log("odd number");
//   }
// }

for(let i=0; i>5;i+=2){
    console.log(i);
}
