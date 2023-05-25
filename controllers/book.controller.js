const Book = require("../models/Book.model");
const Reviews = require("../models/Reviews.model")
const Author = require("../models/Author.model")

module.exports.bookController = {
  createBook: async (req, res) => {
    // добавление книги
    const data = await Book.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    });
    res.json("Книга добавлена");
  },
};
