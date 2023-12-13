// You should already know:
// HTML, CSS and JavaScript
// Possibly experience with other libraries and frameworks

// How  NodeJs differs from Vanilla JS
// 1) Node runs on a server - not in a browser
// 2)) The console is the terminal window not browser console.
console.log("Hello World");

// 3) global object instead of window object
// console.log(global);

// 4) Has Common Core modules that we will explore (relating to the operating system/ file system)
// 5) CommonJS module instead of its modules(uses require)

const os = require("os");
const path = require("path");

console.log(os.type()); // displays the windows type
console.log(os.version()); // displays the windows version
console.log(os.homedir()); // displays the windows home directory

console.log(__dirname); // displays current directory and its path
console.log(__filename); // displays current file and its path

console.log(path.dirname(__filename)); // Displays the path of the current file
console.log(path.basename(__filename)); // Displays the full name of the current file
console.log(path.extname(__filename)); // Displays the extension of the current file

console.log(path.parse(__filename));
// Displays an object with various value such as root, dir, base, ext, name.
