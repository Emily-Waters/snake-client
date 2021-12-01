const net = require("net");
const {IP, PORT,NAME} = require('./constants');

// establishes a connection with the game server
const connect = function(input) {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  conn.on('connect', () => {
    conn.write(NAME);
    console.log("Connection Success!");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log('Server says: ', data);
    
  });

  return conn;
};


module.exports = {
  connect,
};
