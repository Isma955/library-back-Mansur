const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.post("/reviews", reviewsController.createReview) // добавление рецензии
router.delete("/reviews/:id", reviewsController.deleteReview) // удаление рецензии
router.get("/reviews/book/:id", reviewsController.getReview) // вывод рецензий выбранной книги

module.exports = router;
