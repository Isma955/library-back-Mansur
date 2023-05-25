const Book = require("../models/Book.model");
const Author = require("../models/Author.model")
const Genre = require ("../models/Genre.model")

module.exports.bookController = {
  createBook: async (req, res) => {
    // добавление книги
    const data = await Book.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    });
    res.json("Book create");
  },
  deleteBook: async (req, res) => {
    // удаление книги
    const data = await Book.findByIdAndDelete(req.params.id);
    res.send("Book delete");
  },
  patchBook: async (req, res) => {
    // изменение книги
    const data = await Book.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre
    })
    res.json('Book is updated')
  },
  findBookId: async (req,res) => {
    // вывод одной книги по ID
    const data = await Book.findById(req.params.id)
    res.json(data)
  },
  getBooks: async (req,res) => {
    // вывод всех книг с автором и жанром
    const data = await Book.find().populate('author', '-_id -__v').populate('genre', '-_id -__v')
    res.json(data)
  },
  getGenreId: async (req,res) => {
    // вывод всех книг определенного жанра
    const data = await Book.find({ genre: req.params.id})
    res.json(data)
  }
};
