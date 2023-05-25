const { Router } = require("express");
const { bookController } = require("../controllers/book.controller");

const router = Router();

router.post("/books", bookController.createBook); // добавление книги

module.exports = router;
