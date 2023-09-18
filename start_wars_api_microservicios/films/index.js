const server = require("./src/app");


const PORT = 8002;

server.listen(PORT, () => {
  console.log(`Films server lisntening on port ${PORT}`);
});
