const connect = function () {
  const net = require("net");
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: DYX");
  });
  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 500);
  // });

  return conn;
};
module.exports = {
  connect,
};
