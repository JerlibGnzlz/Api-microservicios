const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.status(200).send("from films"));

router.use("/films", require("./filmsRouter"));

module.exports = router;
