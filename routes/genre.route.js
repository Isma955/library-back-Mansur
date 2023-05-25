const { Router } = require("express");
const { genreController } = require("../controllers/genre.controller");

const router = Router();

router.post("/genre", genreController.createGenre) // создание жанра

module.exports = router;
