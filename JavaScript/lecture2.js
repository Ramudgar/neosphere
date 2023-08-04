// console.log(3+3)
// console.log("3"+"3")
// console.log("3" + + 3)
// console.log(3 + + "3")
// console.log(3+3-3)
// console.log("3" + "3" - "3")

// forloop break
//  for (let i=1; i<=10; i++){
//         if (i==5){
//             break;
//         }
//         console.log(i);
//     }

// forloop continue

// for (let i=1; i<=10; i++){
//     if (i==5){
//         continue;
//     }
//     console.log(i);
// }

// function

// function add(a,b,c){
//     console.log(a+b+c);
// }
// const result = add(2,3,3);
// console.log(result);
// add(2,3,4)

// // function with return statement

// function sum(a,b){
//     return a+b;
// }
// const results = sum(2,4);
// console.log(results);

// call back function

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

function calc(a,b,callback){
    return callback(a,b);
}
const result = calc(2,3,add);
console.log(result);


// another example of call back function

// function operator(Add){
//     return Add;
// }
// function Add(a,b){
//     return a+b;
// }
// const results = operator(Add(2,7));
// console.log(results);

// method functions

// const person = {
//   name: "Alice",
//   greet: function () {
//     console.log("Hello, " + this.name + "!");
//   },
// };
// // person.name = "Bob";

// person.greet();

// print 1,22,333,4444,55555
// for (let i=1; i<=5;i++){
//     let str = "";
//     for (let j=1;j<=i;j++){
//         str +=i;
//     }
//     console.log(str);
// }

// print *,**,***,****,*****
// for(let i=1; i<=6;i++)

// {
//     let str="";
//     for (let j=1; j<=i; j++){
//         str+="*"

//     }
//     console.log(str)
// }

// print * in decreasing order a triangle

//  for(let i=5; i>=1;i--){
//     let str="";
//     for (let j=1; j<=i; j++){
//         str+="*"
//     }
//     console.log(str)
//  }
