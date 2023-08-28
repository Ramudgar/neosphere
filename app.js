// const calculate= require('./calculate')

// const adds=calculate.add(5,6)
// console.log(adds)

// asynchronous programming
// callbac function to handle file system
const fs = require("fs");

// Synchronous read
// const data = fs.readFileSync("./ram.txt", "utf8");
// console.log("Sync File contents:", data);

// fs.readFile("./ram.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File contents:", data);
// });

// Creating an HTTP Server with the http Module:

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, Node.js!");
// });

// const port = 5000;
// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// handling different http module

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         const responseData = { message: 'Hello from Node.js!' };
//         res.end(JSON.stringify(responseData));
//     }
// });

// const port = 3000;
// server.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });

// Express.js is a popular web application framework that simplifies the process of building web applications and APIs in Node.js.

// Setting Up an Express App:

// Install the Express package using npm install express.
// Example: Creating a basic Express app that responds with "Hello, Express!"

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`App listening on port ${port}`);
// });

// Routing and Middleware:

// Define routes for different paths and HTTP methods.
// Use middleware functions for tasks like logging and authentication.
// for about page

// app.get('/about', (req, res) => {
//     res.send('About page');
// });

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.json());

// app.post('/submit', (req, res) => {
//     const requestData = req.body;
//     // Handle the data, e.g., save it to a database
//     res.json({ message: 'Data received successfully' });
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`App listening on port ${port}`);
// });

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

// // take multiple input to calculate simple interest

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the principal amount: ", function (principal) {
//   rl.question("Enter the rate of interest: ", function (rate) {
//     rl.question("Enter the time period (in years): ", function (time) {
//       const simpleInterest = (principal * rate * time) /100;
//       console.log(`Simple interest: ${simpleInterest}`);
//       rl.close();
//     });
//   });
// });

// take input height and weight to calculate bmi and convert height to meter

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter your height in feet: ", function (height) {
//   rl.question("Enter your weight in kilograms: ", function (weight) {
//     const heightInMeters = height * 0.3048;
//     const bmi = weight / (heightInMeters * heightInMeters);
//     console.log(`Your BMI is ${bmi}`);
//     // also use the if else condition to check the bmi is underweight or normal or overweight  or obese
//     if (bmi < 18.5) {
//       console.log("You are underweight");
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//       console.log("You are normal");
//     } else if (bmi >= 25 && bmi <= 29.9) {
//       console.log("You are overweight");
//     } else {
//       console.log("You are obese");
//     }

//     rl.close();
//   });
// });

// creating api using express
const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// define the route to get all users

app.get("/users", (req, resp) => {
  const users = [
    {
      id: 1,
      name: "ram",
      age: 23,
    },
    {
      id: 2,
      name: "shyam",
      age: 24,
    },
  ];
  resp.json(users);
});

// define the route to get user by id

app.get("/users/:id", (req, res) => {
  const users = [
    {
      id: 1,
      name: "ram",
      age: 23,
    },
    {
      id: 2,
      name: "shyam",
      age: 24,
    },
  ];
  const user = users.find((users123) => users123.id === Number(req.params.id));
  res.json(user);
});


// write a code for post request

app.post("/postUser", (req, res) => {
  const users = [
    {
      id: 1,
      name: "ram",
      age: 23,
    },
    {
      id: 2,
      name: "shyam",
      age: 24,
    },
  ];
  const user = {
    id: 3,
    name: "hari",
    age: 25,
  };
  users.push(user);
  res.json(users);
});




app.listen(port, () => {
  console.log(`Our app listening at http://localhost:${port}`);
}
);

