const server = require("./src/app");


const PORT = 8003;
server.listen(PORT, () => {
  console.log(`Planets server lisntening on port ${PORT}`);
});
