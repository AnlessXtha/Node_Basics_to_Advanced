const fs = require("fs");

/*
fs.readFile("./files/starter.txt", "utf8", (err, data) => {
  if (err) throw err;
  //   console.log(data); // Shows buffer data
  //   console.log(data.toString()); // Shows the data in a text format
  console.log(data); // After add 'utf8' in the parameter it will display tha data in string format
});
*/

// Better way to use path in code

const path = require("path");

fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

console.log("Hello...");

// exit on the uncaught error

// 'process' is a global object which provides information an control over the current Node.js process.
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});

// This is an event listener for the "uncaughtException" event. If an unhandled exception occurs during the program's execution, it logs an error message containing the details of the exception and then exits the process with an exit code of 1.
// This approach is generally used to capture unexpected errors that might otherwise crash the application. However, relying on "uncaughtException" is not a recommended practice, and it's often better to handle errors explicitly in your code.
