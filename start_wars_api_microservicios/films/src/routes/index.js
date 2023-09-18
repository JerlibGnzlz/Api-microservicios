const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");


const router = Router();

router.get("/", controllers.getFilms);






module.exports = router;
