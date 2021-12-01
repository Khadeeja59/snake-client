const net = require("net");
const {connect} = require("./client");
const {setupInput} = require("./input");
// const handleUserInput = function () {
//   if (key === '\u0003') {
//     process.exit();
//   }
// };
// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.on("data", handleUserInput);
//   return stdin;
// };

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '165.227.47.243', // IP address here,
//     port: 50541 // PORT number here,
//   });
//   conn.on('data', (data) => {
//     console.log('Server says: ', data);
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

console.log("Connecting ...");
let conn = connect();
setupInput(conn);