const { Router } = require("express");
const { genreController } = require("../controllers/genre.controller");

const router = Router();

router.post("/genre", genreController.createGenre) // создание жанра
router.delete("/genre/:id", genreController.deleteGenre) // удаление жанра
router.get("/genre", genreController.getGenre) // вывод всех жанров

module.exports = router;
