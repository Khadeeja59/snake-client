const net = require("net");
const {IP,PORT} = require("./constants");
const connect = function () {
  const conn = net.createConnection({ 
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });
  conn.setEncoding("utf8");

  conn.on('connect',function(){
    console.log("Successfully connected to game server");
    conn.write('Name: KK');
     });
     conn.on('connect',function(){
      conn.write('Say: Hello!!!!');
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