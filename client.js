const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });
  conn.setEncoding("utf8");

  conn.on('connect',function(){
    console.log("Successfully connected to game server");
    conn.write('Name: KK');
     });
    
  conn.on('data', (data) => {
    console.log('Server says: ', data);
    
  });
    // conn.on('connect', () => {
    // conn.write('Move: up');
    // });
  // interpret incoming data as text

  return conn;
};

  module.exports = {connect};