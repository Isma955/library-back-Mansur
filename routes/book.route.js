const { Router } = require("express");
const { bookController } = require("../controllers/book.controller");

const router = Router();

router.post("/books", bookController.createBook); // добавление книги
router.delete("/books/:id", bookController.deleteBook) // удаление книги
router.patch("/books/:id", bookController.patchBook) // изменение книги
router.get("/books/:id", bookController.findBookId) // вывод одной книги по ID
router.get("/books", bookController.getBooks) // вывод всех книг
router.get("/books/genre/:id", bookController.getGenreId) // вывод всех книг определенного жанра

module.exports = router;
