const server = require("./src/server");

const { Character, Films } = require("./src/database");

Films.list().then((res) => console.log(res));

const { PORT } = require("./src/config/envs");

server.listen(PORT, () => {
  console.log(`Database service on PORT ${PORT}`);
});