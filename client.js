const net = require("net");

// establishes a connection with the game server
const connect = function() {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541// PORT number here,
  });

  conn.on('connect', () => {
    conn.write('Name: RKD');
    // conn.write('Move: up');
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
