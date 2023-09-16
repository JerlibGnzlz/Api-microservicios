const server = require("./src/app");


const PORT = 8002;

server.listen(PORT, () => {
  console.log(`Characters server lisntening on port ${PORT}`);
});
