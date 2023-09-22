const server = require("./src/server");

const { Character, Films, Planet } = require("./src/database");

Planet.list().then((res) => console.log(res));

const { PORT } = require("./src/config/envs");

server.listen(PORT, () => {
  console.log(`Database service on PORT ${PORT}`);
});