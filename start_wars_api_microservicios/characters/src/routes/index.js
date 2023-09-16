const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/", controllers.getCharacters);

router.post("/create", controllers.createCharacter);




module.exports = router;
