// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", data => {
    return handleUserInput(data);
  });
  return stdin;
};


const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

};

module.exports = {
  setupInput,
  // handleUserInput
};