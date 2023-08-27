// Imagine we have an asynchronous function that simulates fetching data from a server with a delay.
// function fetchDataFromServer() {
//   const promise=new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "John", age: 30 };
//       // For simplicity, let's assume the data was successfully fetched after a delay of 1 second.
//       resolve(data); // Resolve the Promise with the fetched data.
//       // If there was an error, you can reject the Promise with a reason like this:
//       // reject(new Error("Failed to fetch data from the server."));
//     }, 1000); // Simulate a 1-second delay for fetching data.
      
//     });
//     return promise;
//   }
  
//   // Now, let's use the fetchDataFromServer function to handle the Promise.
//   fetchDataFromServer().then((data) => {
//       // This block will execute when the Promise is fulfilled (resolved successfully).
//       console.log("Fetched data:", data);
//     })
//     .catch((error) => {
//       // This block will execute when the Promise is rejected (an error occurred).
//       console.error("Error fetching data:", error);
//     });
  
  // The code above will log "Fetched data: { name: 'John', age: 30 }" after 1 second.
  // If there was an error, it would log "Error fetching data: [error message]" instead.
  
// try and catch with simple example

  function divide(a, b) { 
    try{
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return a / b;
  }
catch(error){
  console.log(error);
}}
const result = divide(10, 0);
console.log(result);
 


// // async await
// function fetchDataFromServer() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = { name: "John", age: 30 };
//         resolve(data); // Resolve the Promise with the fetched data.
//         // If there was an error, you can reject the Promise with a reason like this:
//         // reject(new Error("Failed to fetch data from the server."));
//       }, 1000); // Simulate a 1-second delay for fetching data.
//     });
//   }
  
//   // Now, let's use the async/await syntax to handle the Promise.
//   async function fetchData() {
//     try {
//       const data = await fetchDataFromServer(); // Wait for the Promise to be resolved.
//       console.log("Fetched data:", data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
  
//   // Call the async function.
//   fetchData();
  
//   console.log("This will be printed before the fetched data because fetchData is asynchronous.");
 