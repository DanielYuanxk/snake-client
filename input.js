let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  } // your code here
  if (key === "\u0077") {
    connection.write("Move: up");
  } // your code here
  if (key === "\u0073") {
    connection.write("Move: down");
  } // your code here
  if (key === "\u0061") {
    connection.write("Move: left");
  } // your code here
  if (key === "\u0064") {
    connection.write("Move: right");
  } // your code here
  if (key === "\u0070") {
    connection.write("Say: hi there!");
  }
  if (key === "\u006F") {
    connection.write("Say: time to die!");
  }
};
module.exports = { setupInput };
