// setup interface to handle user input from stdin
const {INPUT} = require('./constants');
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
  } else if (INPUT[decodeURI(key)]) {
    return INPUT[decodeURI(key)];
  }
};

module.exports = {
  setupInput
};