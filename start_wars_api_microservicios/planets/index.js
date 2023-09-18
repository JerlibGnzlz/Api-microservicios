const server = require("./src/app");

server.listen(8003, () => {
  console.log(`Planets server lisntening on port ${PORT}`);
});
