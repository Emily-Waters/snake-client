// setup interface to handle user input from stdin

const { connect } = require("./client");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", data => {
    return connection.write(handleUserInput(data));
  });
  return stdin;
};


const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === encodeURI('w')) {
    console.log("UP");
    return "Move: up";
  } else if (key === encodeURI('s')) {
    console.log("DOWN");
    return "Move: down";
  } else if (key === encodeURI('a')) {
    console.log("LEFT");
    return "Move: left";
  } else if (key === encodeURI('d')) {
    console.log("RIGHT");
    return "Move: right";
  }
};

module.exports = {
  setupInput,
  // handleUserInput
};